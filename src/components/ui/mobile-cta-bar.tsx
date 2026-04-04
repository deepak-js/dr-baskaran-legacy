import { Phone, Calendar } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href="tel:+919500979886"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border border-primary text-primary font-medium text-sm transition-colors active:bg-primary/10"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm transition-colors active:bg-primary/90"
        >
          <Calendar className="w-4 h-4" />
          Book Appointment
        </a>
      </div>
    </div>
  );
}
