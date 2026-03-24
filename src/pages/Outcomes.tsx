import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { getFlag } from "@/lib/flags";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    quote:
      "The precision and care I received at Raga Dental exceeded my expectations. Dr. Baskaran's expertise is truly world-class.",
    author: "🇦🇺 Patient from Australia",
    treatment: "Full Mouth Rehabilitation",
  },
  {
    quote:
      "I traveled from Europe specifically for implant treatment. The digital planning and execution were flawless.",
    author: "🇩🇪 Patient from Germany",
    treatment: "Dental Implants",
  },
  {
    quote:
      "The laser dentistry approach made my procedure completely pain-free. I wish I had found this clinic years ago.",
    author: "Patient from Chennai",
    treatment: "Periodontal Treatment",
  },
];

export default function Outcomes() {
  return (
    <Layout>
      <SEO
        title="Dental Treatment Outcomes & Results | Dr. Baskaran - Raga Dental"
        description="View successful dental treatment outcomes and patient results from Dr. Baskaran at Raga Dental, Thanjavur. Real results from dental implants, laser dentistry, and digital dentistry procedures."
        keywords="dental treatment outcomes Thanjavur, dental implant results, laser dentistry results, dental success stories Thanjavur, patient outcomes Raga Dental, dental treatment before after"
      />
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
            <p className="label-caps mb-4">Outcomes & Testimonials</p>
            <h1 className="heading-display mb-6">
              Trust Built Over Decades
            </h1>
            <p className="body-large text-muted-foreground">
              Not campaigns. Real patients. Real outcomes. Real satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 lg:p-10"
              >
                <blockquote className="font-serif text-xl italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-6">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="heading-section italic mb-6">
              "Our success is measured not by volume, but by the lasting
              outcomes we deliver to each patient."
            </blockquote>
            <p className="label-caps text-primary-foreground/70">
              — Dr. Baskaran
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
