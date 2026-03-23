import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StructuredData } from "@/components/SEO";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
      <Header />
      <main className="flex-1" itemScope itemType="https://schema.org/WebPage">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
