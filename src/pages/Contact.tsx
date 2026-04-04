import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Consultation Request Received",
      description:
        "We will contact you within 24-48 hours to schedule your consultation.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <SEO
        title="Contact Dr. Baskaran - Best Dentist in Thanjavur | Raga Dental"
        description="Contact Dr. Baskaran, the best dentist and implantologist in Thanjavur. Schedule a consultation at Raga Dental for dental implants, laser dentistry, and digital dentistry. Serving patients from India, Europe, Australia, and New Zealand."
        keywords="contact Dr. Baskaran, Raga Dental contact, dentist Thanjavur contact, dental consultation Thanjavur, book appointment Thanjavur"
      />
      {/* Hero */}
      <section className="pt-32 pb-16" itemScope itemType="https://schema.org/ContactPage">
        <div className="container-institutional">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="label-caps mb-4">Contact</p>
            <h1 className="heading-display mb-6" itemProp="headline">Begin with Clarity</h1>
            <p className="body-large text-muted-foreground" itemProp="description">
              Schedule a consultation to discuss your dental health goals with
              Dr. Baskaran, the best dentist and implantologist in Thanjavur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding pt-0">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-subsection mb-8">Request a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country of Residence</Label>
                  <Input
                    id="country"
                    name="country"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Nature of Inquiry</Label>
                  <Textarea
                    id="inquiry"
                    name="inquiry"
                    rows={4}
                    placeholder="Please describe your dental concerns or questions..."
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="institution"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="heading-subsection mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div itemScope itemType="https://schema.org/PostalAddress">
                  <h3 className="label-caps mb-3">Location</h3>
                  <p className="body-editorial">
                    <span itemProp="name">Raga Dental</span>
                    <br />
                    <span itemProp="addressLocality">Thanjavur</span>, <span itemProp="addressRegion">Tamil Nadu</span>
                    <br />
                    <span itemProp="addressCountry">India</span>
                  </p>
                </div>

                <div>
                  <h3 className="label-caps mb-3">International Patients</h3>
                  <p className="body-editorial">
                    For international patient inquiries, please include your
                    country of residence and preferred dates for travel.
                  </p>
                </div>

                <div>
                  <h3 className="label-caps mb-3">Response Time</h3>
                  <p className="body-editorial">
                    We respond to all inquiries within 24-48 hours.
                  </p>
                </div>

                <div className="bg-muted p-8">
                  <h3 className="font-serif text-xl mb-4">Clinic Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
