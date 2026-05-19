import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { blogPosts as staticPosts, type BlogPost } from "@/data/blogPosts";

export interface FaqItem { question: string; answer: string }
export interface LinkRef { anchor: string; url: string }
export interface EeatMeta {
  author_bio?: string;
  author_credentials?: string[];
  reviewed_by?: string;
  reviewer_credentials?: string;
  medically_reviewed_date?: string;
  sources?: { title: string; url: string }[];
  experience_note?: string;
}

export interface MergedBlogPost extends BlogPost {
  faq?: FaqItem[];
  eeat?: EeatMeta;
  metaTitle?: string;
  metaDescription?: string;
  heroImageAlt?: string;
  source: "static" | "db";
}

function mapDbRow(row: any): MergedBlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt || "",
    content: row.content_html || "",
    author: row.author,
    authorRole: row.author_role,
    publishedDate: row.published_at,
    category: row.category,
    tags: row.tags || [],
    image: row.image_url || undefined,
    readTime: row.read_time || 5,
    featured: !!row.featured,
    faq: Array.isArray(row.faq) ? row.faq : [],
    eeat: row.eeat || {},
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    heroImageAlt: row.hero_image_alt || undefined,
    source: "db",
  };
}

function toMerged(p: BlogPost): MergedBlogPost {
  return { ...p, source: "static" };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<MergedBlogPost[]>(staticPosts.map(toMerged));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      if (!mounted) return;
      const dbPosts = (data || []).map(mapDbRow);
      const bySlug = new Map<string, MergedBlogPost>();
      for (const p of staticPosts.map(toMerged)) bySlug.set(p.slug, p);
      for (const p of dbPosts) bySlug.set(p.slug, p); // DB wins
      const merged = Array.from(bySlug.values()).sort(
        (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      );
      setPosts(merged);
      setLoading(false);
    })();
    return () => { mounted = false; };
  }, []);

  return { posts, loading };
}

export function useBlogPost(slug: string | undefined) {
  const { posts, loading } = useBlogPosts();
  const post = slug ? posts.find((p) => p.slug === slug) : undefined;
  return { post, loading, posts };
}
