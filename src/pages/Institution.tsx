import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import teamImage from "@/assets/team.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Institution() {
  return (
    <Layout>
      <SEO
        title="Raga Dental - Advanced Dental Clinic in Thanjavur | 7,000 sq.ft Facility"
        description="Raga Dental is a 7,000 sq.ft world-class dental clinic in Thanjavur, Tamil Nadu. Advanced infrastructure, precision systems, and accountability. Led by Dr. Baskaran with 25+ years of expertise."
        keywords="Raga Dental, dental clinic Thanjavur, advanced dental facility Thanjavur, dental clinic Tamil Nadu, 7000 sqft dental clinic, world-class dental clinic Thanjavur, precision dentistry Thanjavur"
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
            <p className="label-caps mb-4">The Institution</p>
            <h1 className="heading-display mb-6">Raga Dental</h1>
            <p className="body-large text-muted-foreground">
              Not a clinic. A system built on precision, process, and
              accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Image */}
      <section className="pb-16">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-muted"
          >
            <img
              src={teamImage}
              alt="The Raga Dental team"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-4">Infrastructure</p>
              <h2 className="heading-section mb-10">
                World-Class Facility in South India
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                "7,000 sq.ft digital dental facility",
                "International sterilization and safety protocols",
                "Advanced diagnostic and surgical equipment",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-border pb-6"
                >
                  <p className="body-large">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Systems */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <p className="label-caps mb-4">Clinical Systems</p>
            <h2 className="heading-section">
              Systematic Excellence at Every Step
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Digital Planning",
                description:
                  "Digitally guided treatment planning for precision outcomes.",
              },
              {
                number: "02",
                title: "Pain Management",
                description:
                  "Standardized pain-management protocols for patient comfort.",
              },
              {
                number: "03",
                title: "Outcome Monitoring",
                description:
                  "Long-term outcome monitoring for sustained results.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-background"
              >
                <span className="label-caps text-muted-foreground block mb-4">
                  {item.number}
                </span>
                <h3 className="heading-subsection mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Differentiation</p>
            <h2 className="heading-section mb-10">What Sets Us Apart</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                "Care is never rushed.",
                "Decisions are evidence-based.",
                "Outcomes matter more than volume.",
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-t border-border pt-6"
                >
                  <p className="font-serif text-xl">{principle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
