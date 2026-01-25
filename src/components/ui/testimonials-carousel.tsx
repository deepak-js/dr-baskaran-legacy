import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  treatment?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Australia",
    text: "Dr. Baskaran transformed my smile with dental implants. The precision and care were exceptional. I traveled from Australia specifically for his expertise, and it was worth every mile.",
    rating: 5,
    treatment: "Dental Implants",
  },
  {
    id: 2,
    name: "James Thompson",
    location: "United Kingdom",
    text: "The laser dentistry procedure was painless and the recovery was incredibly fast. Dr. Baskaran's international training really shows in his approach. Highly recommend Raga Dental.",
    rating: 5,
    treatment: "Laser Dentistry",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Chennai, India",
    text: "As someone who's always been afraid of dental procedures, Dr. Baskaran made the entire experience comfortable. The digital dentistry technology is world-class. Best dentist in Thanjavur!",
    rating: 5,
    treatment: "Digital Dentistry",
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "New Zealand",
    text: "I've had dental work done in multiple countries, but Dr. Baskaran's expertise in implantology is unmatched. The navigation-guided system ensures perfect placement. Outstanding results.",
    rating: 5,
    treatment: "Dental Implants",
  },
  {
    id: 5,
    name: "Anita Reddy",
    location: "Bangalore, India",
    text: "The entire team at Raga Dental is professional and caring. Dr. Baskaran's 25+ years of experience is evident in every aspect of treatment. Truly the best implantologist in Thanjavur.",
    rating: 5,
    treatment: "Dental Implants",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-institutional">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-caps mb-4">Patient Testimonials</p>
          <h2 className="heading-section">
            Trusted by Patients from <span className="text-accent italic">Around the World</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="bg-card rounded-lg shadow-elevated p-8 md:p-12 h-full flex flex-col">
                  <Quote className="w-12 h-12 text-accent/30 mb-6" />
                  <p className="body-large text-muted-foreground mb-8 flex-grow">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-xl font-medium mb-1">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].location}
                        </p>
                        {testimonials[currentIndex].treatment && (
                          <p className="text-xs text-accent mt-2">
                            {testimonials[currentIndex].treatment}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <span key={i} className="text-accent text-xl">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-12 h-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-12 h-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

