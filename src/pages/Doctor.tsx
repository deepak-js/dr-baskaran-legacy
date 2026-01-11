import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import drBaskaranClinic from "@/assets/dr-baskaran-clinic.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Doctor() {
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
            <p className="label-caps mb-4">The Doctor</p>
            <h1 className="heading-display mb-6">Dr. Baskaran</h1>
            <p className="body-large text-muted-foreground">
              A clinician, not a marketer. His reputation is built on outcomes,
              not adjectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait + Introduction */}
      <section className="section-padding pt-0">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={drBaskaranClinic}
                  alt="Dr. Baskaran at Raga Dental"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-section mb-6">Origin Story</h2>
                <div className="space-y-6 body-editorial">
                  <p>
                    Born in Sethurayan Kudikadu, a small agrarian village,
                    Dr. Baskaran's journey reflects discipline, resilience, and
                    long-term vision.
                  </p>
                  <p>
                    His mission was simple: elevate healthcare standards without
                    abandoning his roots.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evolution */}
      <section className="section-padding bg-card">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="label-caps mb-4">Clinical Evolution</p>
            <h2 className="heading-section mb-10">
              25 Years of Progressive Mastery
            </h2>

            <div className="space-y-8">
              {[
                "Over 25 years of clinical practice",
                "Pioneer of laser dentistry in South Tamil Nadu",
                "Early adopter of navigation-guided and semi-robotic implants",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 mt-3 bg-primary rounded-full shrink-0" />
                  <p className="body-large">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Education */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-4">Global Education & Exposure</p>
              <h2 className="heading-section mb-6">
                Learning from the World's Best
              </h2>
              <div className="space-y-6 body-editorial">
                <p>
                  Trained at world-renowned institutions including New York
                  University and Unicamillus University, Italy.
                </p>
                <p>
                  Regular participant and presenter at international dental
                  conferences with global knowledge exchange.
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
              <blockquote className="font-serif text-2xl lg:text-3xl italic mb-6">
                "Technology exists to reduce human suffering."
              </blockquote>
              <p className="body-editorial">
                Every treatment is designed to maximize comfort, safety, and
                predictability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Statement */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4 text-primary-foreground/70">Legacy</p>
            <h2 className="heading-section mb-6">
              Positioning Thanjavur on the Global Dental Map
            </h2>
            <p className="body-large text-primary-foreground/80">
              Dr. Baskaran's work has enabled generational progress, positioning
              Thanjavur as a destination for global-grade dental care.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
