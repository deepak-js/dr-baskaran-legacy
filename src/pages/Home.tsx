import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import drBaskaranPortrait from "@/assets/dr-baskaran-portrait.jpg";
import clinicProcedure from "@/assets/clinic-procedure.jpg";
import implantHero from "@/assets/implant-hero.jpg";
import laserHero from "@/assets/laser-dentistry-hero.jpg";
import digitalHero from "@/assets/digital-dentistry-hero.jpg";
import thanjavurTemple from "@/assets/thanjavur-temple.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
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
      <section className="min-h-screen flex items-center pt-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container-institutional relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <span className="text-muted-foreground italic">Rooted in Thanjavur.</span>
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
                <span className="text-accent">25+ Years</span> of Clinical Mastery
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="institution" size="xl" className="shadow-soft hover:shadow-gold magnetic w-full sm:w-auto">
                    Request a Consultation
                  </Button>
                </Link>
                <Link to="/doctor">
                  <Button variant="institutionOutline" size="xl" className="magnetic w-full sm:w-auto">
                    Meet Dr. Baskaran
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted rounded-sm shadow-elevated image-overlay group">
                <img
                  src={drBaskaranPortrait}
                  alt="Dr. Baskaran, Chief Implantologist at Raga Dental"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card p-6 shadow-elevated max-w-xs hidden md:block border-l-2 border-accent"
              >
                <p className="font-serif text-lg mb-1">Dr. Baskaran</p>
                <p className="text-sm text-muted-foreground">
                  Founder & Chief Implantologist
                </p>
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-sm hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Strip */}
      <section className="py-16 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-accent/[0.03] to-primary/[0.02]" />
        <div className="container-institutional relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: "25+", text: "Years of Clinical Experience" },
              { number: "NYU", text: "Global Training & International Exposure" },
              { number: "4+", text: "Countries — Patients Trust Us Globally" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-default"
              >
                <p className="font-serif text-4xl md:text-5xl mb-2 text-primary transition-colors group-hover:text-accent">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground tracking-wide">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="section-padding relative">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="label-caps mb-4">Centers of Excellence</p>
            <h2 className="heading-section">Three Pillars of <span className="italic text-accent">Precision</span> Care</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Implantology",
                description: "Navigation-guided and semi-robotic implant systems focused on accuracy, longevity, and biological harmony.",
                href: "/implantology",
                image: implantHero,
              },
              {
                title: "Laser Dentistry",
                description: "Pain-free, bloodless procedures with faster healing and enhanced patient comfort.",
                href: "/laser-dentistry",
                image: laserHero,
              },
              {
                title: "Digital Dentistry",
                description: "Fully digital diagnostics and workflows ensuring precision, predictability, and safety.",
                href: "/digital-dentistry",
                image: digitalHero,
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link to={pillar.href} className="block group">
                  <div className="card-premium rounded-sm overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <span className="label-caps text-accent mb-3 block">
                        0{index + 1}
                      </span>
                      <h3 className="heading-subsection mb-3 group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        Learn More 
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin to Impact */}
      <section className="section-padding gradient-gold-subtle">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted rounded-sm shadow-elevated">
                <img
                  src={clinicProcedure}
                  alt="Advanced dental procedure at Raga Dental"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 rounded-sm -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="label-caps mb-4">Origin to Impact</p>
              <h2 className="heading-section mb-6">
                From <span className="text-accent">10×10 ft</span> to <span className="text-accent">7,000 sq.ft</span>
              </h2>
              <div className="space-y-6 body-editorial gold-line pl-6">
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
                  <Button variant="subtle" size="default" className="group">
                    <span>Explore the Journey</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6bTAgMHYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container-institutional relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
            <p className="label-caps mb-4 text-accent">Philosophy</p>
            <blockquote className="heading-section mb-6 italic">
              "Pain-Free Dentistry is not a promise."
            </blockquote>
            <p className="body-large text-primary-foreground/80">
              It is a repeatable clinical outcome achieved through technology,
              discipline, and experience.
            </p>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Dental Tourism Preview */}
      <section className="section-padding">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="label-caps mb-4">
                Dental Tourism
              </p>
              <h2 className="heading-section mb-6">
                Patients travel from across the world to <span className="text-accent italic">Thanjavur</span>
              </h2>
              <p className="body-editorial mb-8">
                Advanced dental care delivered with global precision and cultural
                depth. Experience world-class treatment in a city steeped in heritage.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Europe", "Australia", "New Zealand", "India"].map((country) => (
                  <span key={country} className="px-4 py-2 bg-muted rounded-full text-sm">
                    {country}
                  </span>
                ))}
              </div>
              <Link to="/dental-tourism">
                <Button variant="institution" size="xl" className="shadow-soft hover:shadow-gold magnetic">
                  Explore Dental Tourism
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-elevated">
                <img
                  src={thanjavurTemple}
                  alt="Thanjavur Temple - Cultural heritage of Tamil Nadu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent/20 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="heading-section mb-6">
              Begin Your Journey to <span className="text-accent italic">Precision Care</span>
            </h2>
            <p className="body-editorial mb-8">
              Schedule a consultation with Dr. Baskaran to discuss your dental health goals.
            </p>
            <Link to="/contact">
              <Button variant="institution" size="xl" className="shadow-soft hover:shadow-gold magnetic">
                Request a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
