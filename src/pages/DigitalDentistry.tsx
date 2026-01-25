import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import digitalHero from "@/assets/digital-dentistry-hero.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DigitalDentistry() {
  return (
    <Layout>
      <SEO
        title="Digital Dentistry in Thanjavur | Advanced Digital Dental Technology - Dr. Baskaran"
        description="Digital dentistry in Thanjavur by Dr. Baskaran at Raga Dental. Fully digital diagnostics and workflows ensuring precision, predictability, and safety. Best digital dentistry clinic in Thanjavur."
        keywords="digital dentistry Thanjavur, digital dental technology Thanjavur, Dr. Baskaran digital dentistry, CAD/CAM dentistry Thanjavur, digital dental impressions Thanjavur"
      />
      {/* Hero with Image */}
      <section className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 h-[60vh]">
          <img
            src={digitalHero}
            alt="Digital Dentistry Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container-institutional relative z-10 pt-16 pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
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
            <div className="divider-accent mb-6" />
            <p className="label-caps mb-4">Our Digital Workflow</p>
            <h2 className="heading-section">End-to-End <span className="text-accent italic">Precision</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Advanced Diagnostics",
                description: "Comprehensive digital imaging and analysis for accurate assessment.",
              },
              {
                number: "02",
                title: "Precision Planning",
                description: "Computer-aided treatment design for optimal outcomes.",
              },
              {
                number: "03",
                title: "Predictable Execution",
                description: "Guided procedures with verified outcomes and minimal error.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-8 rounded-sm relative overflow-hidden group"
              >
                <span className="absolute -top-4 -right-2 text-8xl font-serif text-muted/30 group-hover:text-accent/20 transition-colors">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <span className="label-caps text-accent block mb-4">
                    Step {step.number}
                  </span>
                  <h3 className="heading-subsection mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="section-padding gradient-gold-subtle">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Outcome</p>
            <h2 className="heading-section mb-10">The Digital <span className="text-accent italic">Difference</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "Reduced variability.", icon: "↘" },
                { text: "Enhanced safety.", icon: "◈" },
                { text: "Consistent results.", icon: "✓" },
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-sm shadow-soft hover:shadow-gold transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent">{outcome.icon}</span>
                  </div>
                  <p className="font-serif text-xl">{outcome.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/contact">
                <Button variant="institution" size="xl" className="shadow-soft hover:shadow-gold magnetic">
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
