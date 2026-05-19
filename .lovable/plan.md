## Goal
Let n8n publish blog posts directly to the site via a secured webhook. Posts go live instantly on `/blog` and `/blog/:slug`, render with the existing premium template, and the webhook URL + secret are visible/copyable from the `/admin` console.

## Architecture

```text
n8n workflow
   │  POST JSON (title, content_html, image_url, tags, …)
   │  Header: x-webhook-secret: <token>
   ▼
Edge Function: publish-blog-post  (verify_jwt = false)
   │  • Validate secret
   │  • Validate payload (Zod)
   │  • Auto-generate slug, reading time, internal links
   ▼
DB table: blog_posts  (public READ, no public WRITE)
   ▼
/blog and /blog/:slug
   • Fetch DB posts, merge with hardcoded posts in src/data/blogPosts.ts
   • Render with existing BlogPost template
```

## Webhook payload contract (what n8n sends)

```json
{
  "title": "string (required, 10–200 chars)",
  "excerpt": "string (optional, auto-generated from content if missing, max 300)",
  "content_html": "string (required, sanitized HTML body)",
  "category": "Implantology | Laser Dentistry | Digital Dentistry | Preventive Care | Dental Tourism | General",
  "tags": ["string", "..."],
  "image_url": "https://… (hero image, optional)",
  "author": "Dr. Baskaran (optional, default)",
  "author_role": "Chief Implantologist (optional, default)",
  "internal_links": [{ "anchor": "dental implants", "url": "/implantology" }],
  "external_links": [{ "anchor": "NYU Dentistry", "url": "https://dental.nyu.edu" }],
  "featured": false,
  "slug": "optional-override-slug"
}
```

Server behavior:
- Auto-slugify title if `slug` not provided; append `-2`, `-3` on collision.
- Auto-compute `read_time` from word count (200 wpm).
- Auto-inject `internal_links` / `external_links` into `content_html` by replacing first occurrence of each anchor with an `<a>` tag (external links get `target="_blank" rel="noopener"`).
- Sanitize HTML on the client at render time using DOMPurify (allowed: p, h2, h3, ul, ol, li, strong, em, a, blockquote, img, br).

## Database

New table `blog_posts`:

- `title`, `slug` (unique), `excerpt`, `content_html`
- `image_url`, `category`, `tags text[]`
- `author`, `author_role`
- `read_time int`, `featured bool`
- `published_at timestamptz default now()`
- standard `id`, `created_at`, `updated_at`

RLS:
- Public SELECT: anyone can read posts (blog is public).
- INSERT/UPDATE/DELETE: admin only via `has_role(auth.uid(), 'admin')`. The edge function uses the service-role key, so it bypasses RLS for inserts coming from n8n.

## Edge function: `publish-blog-post`

- Path: `POST {SUPABASE_URL}/functions/v1/publish-blog-post`
- `verify_jwt = false` (n8n is unauthenticated; we use a shared secret instead)
- Header check: `x-webhook-secret` must equal Supabase secret `BLOG_WEBHOOK_SECRET`
- Validate body with Zod, return 400 on failure
- Insert into `blog_posts` using service-role client
- Return `{ id, slug, url: "/blog/<slug>" }`

Will request these secrets via add_secret:
- `BLOG_WEBHOOK_SECRET` — random token shared with n8n

## Frontend changes

1. **`src/data/blogPosts.ts`** — keep as fallback. Add `useBlogPosts()` hook that fetches DB posts and merges by `slug` (DB wins).
2. **`src/pages/Blog.tsx`** — switch to merged source, sort by `publishedDate` desc.
3. **`src/pages/BlogPost.tsx`** — accept DB post shape; sanitize `content_html` with DOMPurify before `dangerouslySetInnerHTML`; render external links with the proper rel; auto-add jump anchor IDs to `h2`/`h3` for prettier in-page navigation.
4. **`src/pages/Admin.tsx`** — add a new tab "Blog Webhook" alongside consultations:
   - Read-only display of the webhook URL: `https://lvjjmnixhwjvtcerghbx.supabase.co/functions/v1/publish-blog-post`
   - Copy button for URL and for the `x-webhook-secret` header name
   - "Rotate secret" instructions (link to add_secret flow)
   - Sample JSON payload (copyable) for n8n's HTTP Request node
   - List of published DB posts with title, slug, date, and a delete button
5. Add `isomorphic-dompurify` dependency for safe HTML rendering.

## n8n setup the user follows (documented in admin)

1. In n8n, add an **HTTP Request** node:
   - Method: `POST`
   - URL: (copied from admin)
   - Headers: `x-webhook-secret: <secret>`, `Content-Type: application/json`
   - Body: JSON matching the contract above (likely produced by an upstream AI node)
2. Trigger from any n8n schedule, chat, or AI workflow.
3. On success, the post is live at `/blog/<slug>` immediately.

## Out of scope (can be added later)
- Image upload to storage bucket (URLs only for now, per your choice).
- Draft/review workflow.
- Per-post analytics, comments, related-by-tag recommendations.
- Migrating the 6 hardcoded posts into the DB.
