import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import laserHero from "@/assets/laser-dentistry-hero.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LaserDentistry() {
  return (
    <Layout>
      {/* Hero with Image */}
      <section className="pt-24 relative overflow-hidden">
        <div className="absolute inset-0 h-[60vh]">
          <img
            src={laserHero}
            alt="Laser Dentistry Technology"
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
            <div className="divider-accent mb-6" />
            <p className="label-caps mb-4">Benefits</p>
            <h2 className="heading-section">
              Redefining <span className="text-accent italic">Patient Comfort</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Minimal Pain", description: "Significantly reduced discomfort during procedures.", icon: "✦" },
              { title: "Bloodless", description: "Clean procedures with minimal bleeding.", icon: "◆" },
              { title: "Faster Healing", description: "Accelerated recovery times.", icon: "◈" },
              { title: "Reduced Anxiety", description: "A calmer, more comfortable experience.", icon: "◎" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-6 rounded-sm"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-xl text-accent">{benefit.icon}</span>
                </div>
                <h3 className="heading-subsection mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTYgMGgtNnY2aDZ2LTZ6bTAgMHYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-institutional relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
            <blockquote className="heading-section italic mb-6">
              "The precision of laser technology allows us to perform procedures that were once impossible."
            </blockquote>
            <p className="label-caps text-accent">— Dr. Baskaran</p>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="label-caps mb-4">Applications</p>
            <h2 className="heading-section mb-6">Versatile <span className="text-accent italic">Precision</span></h2>
            <p className="body-large text-muted-foreground mb-10">
              Used across surgical, periodontal, and soft tissue procedures to
              enhance comfort and precision.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Surgical Procedures", "Periodontal Treatment", "Soft Tissue", "Whitening"].map((app) => (
                <span key={app} className="px-5 py-2.5 bg-muted rounded-full text-sm hover:bg-accent/10 transition-colors cursor-default">
                  {app}
                </span>
              ))}
            </div>
            
            <Link to="/contact">
              <Button variant="institution" size="xl" className="shadow-soft hover:shadow-gold magnetic">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
