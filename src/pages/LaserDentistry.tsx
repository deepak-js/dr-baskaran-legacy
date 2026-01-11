import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LaserDentistry() {
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
            <h1 className="heading-display mb-6">Laser Dentistry</h1>
            <p className="body-large text-muted-foreground">
              Laser dentistry transforms the patient experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <p className="label-caps mb-4">Benefits</p>
            <h2 className="heading-section">
              Redefining Patient Comfort
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Minimal Pain", description: "Significantly reduced discomfort during procedures." },
              { title: "Bloodless", description: "Clean procedures with minimal bleeding." },
              { title: "Faster Healing", description: "Accelerated recovery times." },
              { title: "Reduced Anxiety", description: "A calmer, more comfortable experience." },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-border pt-6"
              >
                <h3 className="heading-subsection mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Applications</p>
            <h2 className="heading-section mb-6">Versatile Precision</h2>
            <p className="body-large text-muted-foreground mb-10">
              Used across surgical, periodontal, and soft tissue procedures to
              enhance comfort and precision.
            </p>
            <Link to="/contact">
              <Button variant="institution" size="xl">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
