import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DentalTourism() {
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
            <p className="label-caps mb-4">Dental Tourism</p>
            <h1 className="heading-display mb-6">
              World-Class Dentistry Does Not Require Metro Cities
            </h1>
            <p className="body-large text-muted-foreground">
              Patients travel from across the world to Thanjavur for advanced
              dental care delivered with global precision and cultural depth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Thanjavur */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-4">Why Thanjavur</p>
              <h2 className="heading-section mb-6">
                The Perfect Setting for Recovery
              </h2>
              <div className="space-y-6 body-editorial">
                <p>
                  Advanced care delivered in a culturally rich, calm environment
                  ideal for recovery.
                </p>
                <p>
                  Thanjavur offers a unique combination of world-class dental
                  expertise and the tranquility needed for optimal healing.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-muted p-8 lg:p-12"
            >
              <h3 className="heading-subsection mb-6">International Patients</h3>
              <p className="body-editorial">
                Patients from Europe, Australia, and New Zealand trust Raga
                Dental for precision and integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="label-caps mb-4">Patient Journey</p>
            <h2 className="heading-section">Clarity at Every Step</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Consultation", "Treatment", "Recovery", "Follow-up"].map(
              (step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-serif text-lg">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl">{step}</h3>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="body-editorial mb-8">
              All managed with clarity and care.
            </p>
            <Link to="/contact">
              <Button variant="institution" size="xl">
                Begin Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
