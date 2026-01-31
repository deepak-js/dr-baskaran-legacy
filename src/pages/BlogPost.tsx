import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";
import { SocialShare } from "@/components/ui/social-share";
import { Calendar, Clock, ArrowLeft, Tag, User, BookOpen } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import NotFound from "./NotFound";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const currentUrl = typeof window !== "undefined" 
    ? window.location.href 
    : `https://www.ragadental.com/blog/${post.slug}`;

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={`${post.title} | Dr. Baskaran - Raga Dental`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        image={post.image || `https://www.ragadental.com/dr-baskaran-portrait.jpg`}
        type="article"
      />

      {/* Back Link */}
      <section className="pt-32 pb-8">
        <div className="container-institutional">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      {post.image && (
        <section className="pb-8">
          <div className="container-institutional">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-muted"
            >
              <LazyImage
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-4xl">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium mb-4 backdrop-blur-sm rounded-full">
                    {post.category}
                  </span>
                  <h1 className="heading-display text-background mb-4 drop-shadow-lg" itemProp="headline">
                    {post.title}
                  </h1>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Header */}
      <section className="pb-16">
        <div className="container-institutional">
          <motion.article
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="max-w-4xl mx-auto"
          >
            {/* Meta Information */}
            {!post.image && (
              <>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedDate} itemProp="datePublished">
                      {formatDate(post.publishedDate)}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="heading-display mb-6" itemProp="headline">
                  {post.title}
                </h1>
              </>
            )}

            {/* Author Card */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border bg-card p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span itemProp="name">{post.author}</span>
                </p>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <time dateTime={post.publishedDate}>
                      {formatDate(post.publishedDate)}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mb-12">
              <SocialShare
                url={currentUrl}
                title={post.title}
                description={post.excerpt}
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Tag className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground text-sm rounded-full transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Share Again */}
            <div className="mt-12 pt-8 border-t border-border">
              <SocialShare
                url={currentUrl}
                title={post.title}
                description={post.excerpt}
              />
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container-institutional">
            <h2 className="heading-section mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-soft">
                    {relatedPost.image && (
                      <div className="relative h-40 overflow-hidden bg-muted">
                        <LazyImage
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium mb-3 inline-block rounded-full">
                        {relatedPost.category}
                      </span>
                      <h3 className="heading-subsection mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-section mb-6">Ready to Transform Your Smile?</h2>
            <p className="body-large text-muted-foreground mb-8">
              Schedule a consultation with Dr. Baskaran to discuss your dental health needs.
            </p>
            <Link
              to="/contact"
              className="inline-block font-serif text-lg border-b border-foreground pb-1 hover:border-primary hover:text-primary transition-colors"
            >
              Request a Consultation →
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

