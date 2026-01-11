import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Implantology() {
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
            <p className="label-caps mb-4">Center of Excellence</p>
            <h1 className="heading-display mb-6">Implantology</h1>
            <p className="body-large text-muted-foreground">
              Dental implants are not cosmetic procedures. They are surgical
              reconstructions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-4">Our Approach</p>
              <h2 className="heading-section mb-6">
                Precision at Every Stage
              </h2>
              <div className="space-y-6 body-editorial">
                <p>
                  We employ navigation-guided implant placement and semi-robotic
                  precision systems to ensure biological and functional harmony.
                </p>
                <p>
                  Every implant is planned digitally, executed precisely, and
                  monitored for long-term success.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[
                "Navigation-guided implant placement",
                "Semi-robotic precision systems",
                "Biological and functional harmony",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-muted"
                >
                  <div className="w-3 h-3 bg-primary rounded-full shrink-0" />
                  <p className="font-serif text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Why It Matters</p>
            <h2 className="heading-section mb-12">The Precision Advantage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Precision",
                description: "Reduces complications and enhances outcomes.",
              },
              {
                title: "Predictability",
                description: "Ensures longevity and patient confidence.",
              },
              {
                title: "Experience",
                description: "Determines successful long-term outcomes.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="heading-subsection mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-4">Who This Is For</p>
              <h2 className="heading-section mb-6">
                Long-Term Solutions, Not Shortcuts
              </h2>
              <p className="body-large text-muted-foreground mb-8">
                Patients seeking long-term, functionally stable implant
                solutions—not shortcuts.
              </p>
              <Link to="/contact">
                <Button variant="institution" size="xl">
                  Request a Consultation
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-muted p-8 lg:p-12"
            >
              <blockquote className="font-serif text-2xl lg:text-3xl italic mb-6">
                "Implantology is not about replacing teeth. It is about
                restoring function, confidence, and quality of life."
              </blockquote>
              <p className="label-caps">— Dr. Baskaran</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
