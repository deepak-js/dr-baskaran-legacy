import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalDentistry() {
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
            <h1 className="heading-display mb-6">Digital Dentistry</h1>
            <p className="body-large text-muted-foreground">
              Digital dentistry is not technology adoption. It is error
              elimination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Workflow */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <p className="label-caps mb-4">Our Digital Workflow</p>
            <h2 className="heading-section">End-to-End Precision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Advanced Diagnostics",
                description: "Comprehensive digital imaging and analysis.",
              },
              {
                number: "02",
                title: "Precision Planning",
                description: "Computer-aided treatment design.",
              },
              {
                number: "03",
                title: "Predictable Execution",
                description: "Guided procedures with verified outcomes.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-muted"
              >
                <span className="label-caps text-primary block mb-4">
                  {step.number}
                </span>
                <h3 className="heading-subsection mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Outcome</p>
            <h2 className="heading-section mb-10">The Digital Difference</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                "Reduced variability.",
                "Enhanced safety.",
                "Consistent results.",
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-border pt-6"
                >
                  <p className="font-serif text-xl">{outcome}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/contact">
                <Button variant="institution" size="xl">
                  Schedule a Digital Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
