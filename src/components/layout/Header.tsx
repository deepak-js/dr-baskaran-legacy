import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "The Doctor", href: "/doctor" },
  { name: "The Institution", href: "/institution" },
  { name: "Implantology", href: "/implantology" },
  { name: "Laser Dentistry", href: "/laser-dentistry" },
  { name: "Digital Dentistry", href: "/digital-dentistry" },
  { name: "Dental Tourism", href: "/dental-tourism" },
  { name: "Outcomes", href: "/outcomes" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="container-institutional">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-medium tracking-tight">
                Dr. Baskaran
              </span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Raga Dental
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navigation.slice(0, 7).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden md:block">
                <Button variant="institutionOutline" size="default">
                  Consultation
                </Button>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-24"
          >
            <nav className="container-institutional py-8">
              <div className="flex flex-col gap-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      className={`block py-3 text-lg font-serif transition-colors ${
                        location.pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="divider-thin" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="institution" size="xl" className="w-full">
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
