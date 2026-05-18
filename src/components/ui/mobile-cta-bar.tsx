import { Phone, Calendar } from "lucide-react";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 px-4 py-3">
        <a
          href="tel:+919500979886"
          className="btn-rainbow-glow flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border-2 bg-background text-primary font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="/contact"
          className="btn-rainbow-glow flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border-2 bg-gradient-to-r from-pink-500 via-amber-500 to-blue-500 text-white font-semibold text-sm"
        >
          <Calendar className="w-4 h-4" />
          Book Appointment
        </a>
      </div>
    </div>
  );
}
