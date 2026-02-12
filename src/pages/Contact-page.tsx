import HeroSection from "@/components/contact/HeroSection";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";


const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ContactCards />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;
