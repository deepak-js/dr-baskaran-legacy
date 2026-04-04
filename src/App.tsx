import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "@/components/ui/loading-screen";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Institution from "./pages/Institution";
import Implantology from "./pages/Implantology";
import LaserDentistry from "./pages/LaserDentistry";
import DigitalDentistry from "./pages/DigitalDentistry";
import DentalTourism from "./pages/DentalTourism";
import Outcomes from "./pages/Outcomes";
import Insights from "./pages/Insights";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/institution" element={<Institution />} />
            <Route path="/implantology" element={<Implantology />} />
            <Route path="/laser-dentistry" element={<LaserDentistry />} />
            <Route path="/digital-dentistry" element={<DigitalDentistry />} />
            <Route path="/dental-tourism" element={<DentalTourism />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
