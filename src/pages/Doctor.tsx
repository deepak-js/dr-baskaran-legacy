import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import drBaskaranClinic from "@/assets/dr-baskaran-clinic.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Doctor() {
  return (
    <Layout>
      <SEO
        title="Dr. Baskaran - Best Dentist & Implantologist in Thanjavur | 25+ Years Experience"
        description="Dr. Baskaran is the best dentist and implantologist in Thanjavur, Tamil Nadu. With 25+ years of clinical experience, NYU training, and expertise in dental implants, laser dentistry, and digital dentistry. Founder of Raga Dental."
        keywords="Dr. Baskaran, best dentist Thanjavur, best implantologist Thanjavur, dentist Thanjavur, dental implants Thanjavur, NYU trained dentist, laser dentistry Thanjavur, digital dentistry Thanjavur, experienced dentist Thanjavur"
      />
      {/* Hero */}
      <section className="pt-32 pb-16" itemScope itemType="https://schema.org/Person">
        <div className="container-institutional">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="label-caps mb-4">The Doctor</p>
            <h1 className="heading-display mb-6" itemProp="name">Dr. Baskaran</h1>
            <p className="body-large text-muted-foreground" itemProp="description">
              A clinician, not a marketer. His reputation is built on outcomes,
              not adjectives. The best dentist and implantologist in Thanjavur, Tamil Nadu.
            </p>
            <meta itemProp="jobTitle" content="Chief Implantologist and Dentist" />
            <meta itemProp="worksFor" content="Raga Dental" />
            <meta itemProp="address" content="Thanjavur, Tamil Nadu, India" />
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
                  alt="Dr. Baskaran, Best Dentist and Implantologist at Raga Dental, Thanjavur"
                  title="Dr. Baskaran - Best Dentist in Thanjavur"
                  className="w-full h-full object-cover object-top"
                  itemProp="image"
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
              <div className="space-y-6 body-editorial" itemScope itemType="https://schema.org/EducationalOrganization">
                <p>
                  Trained at world-renowned institutions including <span itemProp="name">New York University</span> and <span itemProp="name">Unicamillus University, Italy</span>. Dr. Baskaran's international training makes him one of the best dentists in Thanjavur.
                </p>
                <p>
                  Regular participant and presenter at international dental
                  conferences with global knowledge exchange. His expertise in implantology, laser dentistry, and digital dentistry positions him as the leading dentist in Thanjavur, Tamil Nadu.
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
              Thanjavur as a destination for global-grade dental care. As the best dentist and implantologist in Thanjavur, he has transformed dental healthcare in South Tamil Nadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Keywords Section for SEO */}
      <section className="section-padding bg-muted/30">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section text-center mb-8">
              Why Dr. Baskaran is the <span className="text-accent">Best Dentist in Thanjavur</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Best Dentist in Thanjavur",
                "Best Implantologist in Thanjavur",
                "Dental Implants Specialist Thanjavur",
                "Laser Dentistry Expert Thanjavur",
                "Digital Dentistry Pioneer Thanjavur",
                "NYU Trained Dentist Thanjavur",
                "Experienced Dentist Thanjavur (25+ Years)",
                "International Dental Training",
                "Dental Tourism Specialist Thanjavur",
                "Advanced Dental Technology Thanjavur",
                "Navigation-Guided Implants Thanjavur",
                "Semi-Robotic Implant Systems Thanjavur"
              ].map((expertise, index) => (
                <div key={index} className="bg-card p-4 rounded-sm border-l-2 border-accent">
                  <p className="font-serif text-sm">{expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
