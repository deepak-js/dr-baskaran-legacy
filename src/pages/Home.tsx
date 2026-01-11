import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import drBaskaranPortrait from "@/assets/dr-baskaran-portrait.jpg";
import clinicProcedure from "@/assets/clinic-procedure.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="max-w-xl"
            >
              <motion.div variants={fadeIn} className="divider-accent mb-8" />
              <motion.h1
                variants={fadeIn}
                className="heading-display mb-6 text-balance"
              >
                Precision Dentistry. Global Standards.{" "}
                <span className="text-muted-foreground">Rooted in Thanjavur.</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="body-editorial mb-4"
              >
                Implantology · Laser Dentistry · Digital Dentistry
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="label-caps mb-10"
              >
                25+ Years of Clinical Mastery
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link to="/contact">
                  <Button variant="institution" size="xl">
                    Request a Consultation
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={drBaskaranPortrait}
                  alt="Dr. Baskaran, Chief Implantologist at Raga Dental"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 shadow-elevated max-w-xs hidden md:block">
                <p className="font-serif text-lg mb-1">Dr. Baskaran</p>
                <p className="text-sm text-muted-foreground">
                  Founder & Chief Implantologist
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <section className="py-16 border-y border-border">
        <div className="container-institutional">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              "25+ Years of Clinical Experience",
              "Global Training & International Exposure",
              "Patients from India, Europe, Australia & New Zealand",
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="font-serif text-lg">{stat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="label-caps mb-4">Centers of Excellence</p>
            <h2 className="heading-section">Three Pillars of Precision Care</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Implantology",
                description:
                  "Navigation-guided and semi-robotic implant systems focused on accuracy, longevity, and biological harmony.",
                href: "/implantology",
              },
              {
                title: "Laser Dentistry",
                description:
                  "Pain-free, bloodless procedures with faster healing and enhanced patient comfort.",
                href: "/laser-dentistry",
              },
              {
                title: "Digital Dentistry",
                description:
                  "Fully digital diagnostics and workflows ensuring precision, predictability, and safety.",
                href: "/digital-dentistry",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={pillar.href} className="block">
                  <div className="border-t border-border pt-8">
                    <span className="label-caps text-muted-foreground mb-4 block">
                      0{index + 1}
                    </span>
                    <h3 className="heading-subsection mb-4 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="body-editorial">{pillar.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin to Impact */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={clinicProcedure}
                  alt="Advanced dental procedure at Raga Dental"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="label-caps mb-4">Origin to Impact</p>
              <h2 className="heading-section mb-6">
                From 10×10 ft to 7,000 sq.ft
              </h2>
              <div className="space-y-6 body-editorial">
                <p>
                  Dr. Baskaran began his practice in a 10×10 ft room with a single
                  purpose: to deliver world-class dental care to his own people.
                </p>
                <p>
                  Today, Raga Dental operates as a 7,000 sq.ft digital dental
                  center, redefining clinical standards in South India.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/doctor">
                  <Button variant="subtle" size="default">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Philosophy</p>
            <blockquote className="heading-section mb-6 italic">
              "Pain-Free Dentistry is not a promise."
            </blockquote>
            <p className="body-large text-muted-foreground">
              It is a repeatable clinical outcome achieved through technology,
              discipline, and experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dental Tourism Preview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="label-caps mb-4 text-primary-foreground/70">
              Dental Tourism
            </p>
            <h2 className="heading-section mb-6">
              Patients travel from across the world to Thanjavur
            </h2>
            <p className="body-large text-primary-foreground/80 mb-8">
              Advanced dental care delivered with global precision and cultural
              depth.
            </p>
            <Link to="/dental-tourism">
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn About Dental Tourism
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
