import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import thanjavurTemple from "@/assets/thanjavur-temple.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DentalTourism() {
  return (
    <Layout>
      <SEO
        title="Dental Tourism in Thanjavur | World-Class Dental Care by Dr. Baskaran - Raga Dental"
        description="Dental tourism in Thanjavur, Tamil Nadu. Patients from Europe, Australia, New Zealand, and India travel to Raga Dental for world-class dental treatment by Dr. Baskaran. Best dental tourism destination in South India."
        keywords="dental tourism Thanjavur, dental tourism India, dental tourism Tamil Nadu, international dental patients Thanjavur, dental travel Thanjavur, affordable dental care India"
      />
      {/* Hero with Image */}
      <section className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 h-[70vh]">
          <img
            src={thanjavurTemple}
            alt="Thanjavur Temple - Cultural Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        
        <div className="container-institutional relative z-10 pt-16 pb-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="label-caps mb-4">Dental Tourism</p>
            <h1 className="heading-display mb-6">
              World-Class Dentistry Does Not Require <span className="text-accent italic">Metro Cities</span>
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
              <div className="divider-accent mb-6" />
              <p className="label-caps mb-4">Why Thanjavur</p>
              <h2 className="heading-section mb-6">
                The Perfect Setting for <span className="text-accent italic">Recovery</span>
              </h2>
              <div className="space-y-6 body-editorial gold-line pl-6">
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
              className="card-premium p-8 lg:p-10 rounded-sm"
            >
              <h3 className="heading-subsection mb-6">International Patients</h3>
              <p className="body-editorial mb-6">
                Patients from Europe, Australia, and New Zealand trust Raga
                Dental for precision and integrity.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Europe", "Australia", "New Zealand", "Middle East"].map((region) => (
                  <span key={region} className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent">
                    {getFlag(region)} {region}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="section-padding gradient-gold-subtle">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <p className="label-caps mb-4">Patient Journey</p>
            <h2 className="heading-section">Clarity at <span className="text-accent italic">Every Step</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "Consultation", desc: "Initial assessment and treatment planning" },
              { step: "Treatment", desc: "Precision care with world-class protocols" },
              { step: "Recovery", desc: "Comfortable healing in a serene setting" },
              { step: "Follow-up", desc: "Continued care and long-term support" }
            ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-serif text-xl shadow-soft group-hover:shadow-gold group-hover:scale-105 transition-all">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl mb-2">{item.step}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      →
                    </div>
                  )}
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
              <Button variant="institution" size="xl" className="shadow-soft hover:shadow-gold magnetic">
                Begin Your Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding gradient-navy text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6bTAgMHYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-institutional relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
            <blockquote className="heading-section italic mb-6">
              "Experience world-class dental care in a city that has been a center of art, culture, and excellence for over a millennium."
            </blockquote>
            <p className="label-caps text-accent">Thanjavur, Tamil Nadu</p>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
