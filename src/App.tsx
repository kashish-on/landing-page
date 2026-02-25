import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Index from "./pages/Index";
import About from "./pages/About-page"
import Contact from "./pages/Contact-page"
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing-page";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GDPRPage from "./pages/GDPR";
import DPDPPage from "./pages/DPDP";
import CookiePage from "./pages/Cookie";
import DisclaimerPage from "./pages/Disclaimer";
import ScrollToHash from "./components/ScroolToHash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToHash/>
        <Routes>
         <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/dpdp" element={<DPDPPage />} />
          <Route path="/cookie" element={<CookiePage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
