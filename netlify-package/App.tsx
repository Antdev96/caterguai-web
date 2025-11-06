import { LanguageProvider } from "./components/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { MenuSection } from "./components/MenuSection";
import { OtherServices } from "./components/OtherServices";
import { Commitment } from "./components/Commitment";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <MenuSection />
          <OtherServices />
          <Commitment />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
