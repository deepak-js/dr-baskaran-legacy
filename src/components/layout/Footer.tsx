import { Link } from "react-router-dom";

const navigation = {
  expertise: [
    { name: "Implantology", href: "/implantology" },
    { name: "Laser Dentistry", href: "/laser-dentistry" },
    { name: "Digital Dentistry", href: "/digital-dentistry" },
  ],
  institution: [
    { name: "The Doctor", href: "/doctor" },
    { name: "The Institution", href: "/institution" },
    { name: "Dental Tourism", href: "/dental-tourism" },
  ],
  resources: [
    { name: "Outcomes", href: "/outcomes" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-institutional section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-xl font-medium tracking-tight">
                Dr. Baskaran
              </span>
              <span className="text-xs tracking-widest uppercase text-background/60">
                Raga Dental, Thanjavur
              </span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Precision dentistry delivered with global standards, rooted in South India.
            </p>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="label-caps text-background/60 mb-6">Expertise</h4>
            <ul className="space-y-3">
              {navigation.expertise.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution */}
          <div>
            <h4 className="label-caps text-background/60 mb-6">Institution</h4>
            <ul className="space-y-3">
              {navigation.institution.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="label-caps text-background/60 mb-6">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/50">
              © {new Date().getFullYear()} Dr. Baskaran, Raga Dental. All rights reserved.
            </p>
            <p className="text-xs text-background/50">
              Thanjavur, Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
