import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "The Doctor", href: "/doctor" },
  { name: "The Institution", href: "/institution" },
  { 
    name: "Centers of Excellence", 
    href: "#",
    children: [
      { name: "Implantology", href: "/implantology" },
      { name: "Laser Dentistry", href: "/laser-dentistry" },
      { name: "Digital Dentistry", href: "/digital-dentistry" },
    ]
  },
  { name: "Dental Tourism", href: "/dental-tourism" },
  { name: "Outcomes", href: "/outcomes" },
  { name: "Insights", href: "/insights" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", optimizedScroll, { passive: true });
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md shadow-soft py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* Top accent line with animation */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isScrolled ? 0.8 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="container-institutional">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <span className="text-primary-foreground font-serif text-lg md:text-xl font-semibold">R</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-primary">
                  Dr. Baskaran
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Raga Dental
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 flex items-center gap-1 rounded-md hover:bg-muted ${
                        item.children.some(c => location.pathname === c.href)
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm tracking-wide transition-all duration-300 block rounded-md hover:bg-muted ${
                        location.pathname === item.href
                          ? "text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 min-w-[220px]"
                      >
                        <div className="bg-card rounded-md shadow-elevated border border-border overflow-hidden">
                          {item.children.map((child, idx) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`block px-5 py-3 text-sm transition-all duration-300 border-l-2 ${
                                location.pathname === child.href
                                  ? "bg-muted text-foreground border-accent"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted border-transparent hover:border-accent"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:block">
                <Button 
                  variant="institution" 
                  size="default"
                  className="magnetic shadow-soft hover:shadow-gold"
                >
                  <span className="relative z-10">Consultation</span>
                </Button>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2.5 text-foreground rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg pt-28"
          >
            <nav className="container-institutional py-8 overflow-y-auto max-h-[calc(100vh-7rem)]">
              <div className="flex flex-col gap-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <div className="border-b border-border">
                        <p className="py-4 text-lg font-serif text-muted-foreground">
                          {item.name}
                        </p>
                        <div className="pl-4 pb-4 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`py-2 text-base transition-colors flex items-center gap-2 ${
                                location.pathname === child.href
                                  ? "text-foreground font-medium"
                                  : "text-muted-foreground"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <>
                        <Link
                          to={item.href}
                          className={`block py-4 text-lg font-serif transition-colors ${
                            location.pathname === item.href
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <div className="divider-thin" />
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link to="/contact">
                  <Button variant="institution" size="xl" className="w-full shadow-soft">
                    Request Consultation
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
