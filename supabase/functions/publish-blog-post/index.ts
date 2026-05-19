import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const LinkSchema = z.object({ anchor: z.string().min(1), url: z.string().min(1) });
const FaqSchema = z.object({ question: z.string().min(3), answer: z.string().min(3) });

const EeatSchema = z.object({
  author_bio: z.string().optional(),
  author_credentials: z.array(z.string()).optional(),
  reviewed_by: z.string().optional(),
  reviewer_credentials: z.string().optional(),
  medically_reviewed_date: z.string().optional(),
  sources: z.array(z.object({ title: z.string(), url: z.string().url() })).optional(),
  experience_note: z.string().optional(),
}).strict().partial();

const BodySchema = z.object({
  title: z.string().min(10).max(200),
  slug: z.string().min(3).max(120).optional(),
  excerpt: z.string().max(320).optional(),
  content_html: z.string().min(50),
  category: z.string().min(2).max(60).default("General"),
  tags: z.array(z.string().min(1).max(40)).max(20).default([]),
  image_url: z.string().url().optional(),
  hero_image_alt: z.string().max(200).optional(),
  author: z.string().min(2).max(100).default("Dr. Baskaran"),
  author_role: z.string().min(2).max(120).default("Chief Implantologist"),
  meta_title: z.string().max(70).optional(),
  meta_description: z.string().max(170).optional(),
  internal_links: z.array(LinkSchema).max(20).default([]),
  external_links: z.array(LinkSchema).max(20).default([]),
  faq: z.array(FaqSchema).max(15).default([]),
  eeat: EeatSchema.default({}),
  featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]).default("published"),
  published_at: z.string().datetime().optional(),
});

function slugify(input: string): string {
  return input.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 120);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

function injectLinks(html: string, internal: { anchor: string; url: string }[], external: { anchor: string; url: string }[]) {
  let out = html;
  const apply = (anchor: string, url: string, isExternal: boolean) => {
    const safe = anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(?<!<a[^>]*>)\\b(${safe})\\b(?![^<]*</a>)`, "i");
    const rel = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
    out = out.replace(re, `<a href="${escapeHtml(url)}"${rel}>$1</a>`);
  };
  for (const l of internal) apply(l.anchor, l.url, false);
  for (const l of external) apply(l.anchor, l.url, true);
  return out;
}

function readingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.round(words / 200));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const secret = req.headers.get("x-webhook-secret");
  const expected = Deno.env.get("BLOG_WEBHOOK_SECRET");
  if (!expected || secret !== expected) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let json: unknown;
  try { json = await req.json(); }
  catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Validation failed", details: parsed.error.flatten() }), {
      status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  const data = parsed.data;

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  // Slug generation with collision handling
  let baseSlug = data.slug ? slugify(data.slug) : slugify(data.title);
  if (!baseSlug) baseSlug = `post-${Date.now()}`;
  let finalSlug = baseSlug;
  for (let i = 2; i < 50; i++) {
    const { data: existing } = await supabase.from("blog_posts").select("id").eq("slug", finalSlug).maybeSingle();
    if (!existing) break;
    finalSlug = `${baseSlug}-${i}`;
  }

  const contentHtml = injectLinks(data.content_html, data.internal_links, data.external_links);
  const excerpt = data.excerpt || contentHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 280);
  const readTime = readingTime(contentHtml);

  const insertPayload = {
    title: data.title,
    slug: finalSlug,
    excerpt,
    content_html: contentHtml,
    image_url: data.image_url ?? null,
    hero_image_alt: data.hero_image_alt ?? null,
    category: data.category,
    tags: data.tags,
    author: data.author,
    author_role: data.author_role,
    read_time: readTime,
    featured: data.featured,
    meta_title: data.meta_title ?? null,
    meta_description: data.meta_description ?? null,
    internal_links: data.internal_links,
    external_links: data.external_links,
    faq: data.faq,
    eeat: data.eeat,
    status: data.status,
    published_at: data.published_at ?? new Date().toISOString(),
  };

  const { data: inserted, error } = await supabase
    .from("blog_posts")
    .insert(insertPayload)
    .select("id, slug, title")
    .single();

  if (error) {
    return new Response(JSON.stringify({ error: "Insert failed", details: error.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({
    ok: true,
    id: inserted.id,
    slug: inserted.slug,
    url: `/blog/${inserted.slug}`,
  }), { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } });
});
