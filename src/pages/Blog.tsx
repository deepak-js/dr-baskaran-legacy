import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { blogPosts, getAllCategories } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Blog() {
  const categories = getAllCategories();
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <SEO
        title="Dental Blog & Articles | Dr. Baskaran - Raga Dental"
        description="Expert dental insights, articles, and educational content from Dr. Baskaran at Raga Dental, Thanjavur. Learn about dental implants, laser dentistry, digital dentistry, and oral health."
        keywords="dental blog, dental articles, dental education, dental insights, dental implants blog, laser dentistry blog, dental health articles, dental care tips"
      />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-institutional relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <p className="label-caps">Blog & Articles</p>
            </div>
            <h1 className="heading-display mb-6 flex items-center gap-3">
              Expert Dental Insights
              <Sparkles className="h-8 w-8 text-accent hidden md:block" />
            </h1>
            <p className="body-large text-muted-foreground">
              Evidence-based perspectives on implantology, pain-free dentistry,
              technology, and long-term oral health from Dr. Baskaran.
            </p>
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span>Expert Content</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-institutional">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-accent" />
              <h2 className="heading-section">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border group hover:border-primary/50 transition-all duration-300 hover:shadow-elevated overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    {post.image && (
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <LazyImage
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground flex-wrap">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <h3 className="heading-subsection mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="body-editorial text-muted-foreground mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={post.publishedDate}>
                            {formatDate(post.publishedDate)}
                          </time>
                        </div>
                        <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-sm font-medium">
                          Read more
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-section">All Articles</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Filter by:</span>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/blog?category=${encodeURIComponent(category)}`}
                  className="px-3 py-1 text-sm bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Image */}
                    {post.image && (
                      <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden bg-muted">
                        <LazyImage
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent lg:hidden" />
                      </div>
                    )}
                    {/* Content */}
                    <div className={`lg:col-span-3 p-6 lg:p-8 ${!post.image ? 'lg:col-span-5' : ''}`}>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground flex-wrap">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <time dateTime={post.publishedDate}>
                            {formatDate(post.publishedDate)}
                          </time>
                        </div>
                      </div>
                      <h3 className="heading-subsection mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="body-editorial text-muted-foreground mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium text-sm">
                        Read article
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-section mb-6">Have Questions?</h2>
            <p className="body-large text-muted-foreground mb-8">
              Schedule a consultation to discuss your specific dental health
              concerns with Dr. Baskaran.
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

