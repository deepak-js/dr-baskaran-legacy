import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const insights = [
  {
    title: "Understanding Dental Implant Longevity",
    category: "Implant Decision-Making",
    excerpt:
      "What factors determine how long your dental implants will last? A clinical perspective on implant success.",
  },
  {
    title: "The Science Behind Pain-Free Dentistry",
    category: "Pain-Free Dentistry",
    excerpt:
      "How modern technology and protocols have made truly pain-free dental procedures a reality.",
  },
  {
    title: "Digital Planning: The Future of Dental Care",
    category: "Technology in Healthcare",
    excerpt:
      "How digital workflows are transforming dental treatment outcomes and patient experiences.",
  },
  {
    title: "Long-Term Oral Health: A Preventive Approach",
    category: "Long-Term Oral Health",
    excerpt:
      "Building a foundation for lifelong oral health through evidence-based prevention strategies.",
  },
];

export default function Insights() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-institutional">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="label-caps mb-4">Insights</p>
            <h1 className="heading-display mb-6">Educational Resources</h1>
            <p className="body-large text-muted-foreground">
              Evidence-based perspectives on implantology, pain-free dentistry,
              technology, and long-term oral health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding pt-0">
        <div className="container-institutional">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {insights.map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-border pt-8 group cursor-pointer"
              >
                <p className="label-caps text-muted-foreground mb-3">
                  {insight.category}
                </p>
                <h2 className="heading-subsection mb-4 group-hover:text-primary transition-colors">
                  {insight.title}
                </h2>
                <p className="body-editorial">{insight.excerpt}</p>
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
