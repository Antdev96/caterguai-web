import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import siteConfig from '../siteConfig'

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={siteConfig.heroImage}
          alt="Comida saludable escolar"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#0066CC] hover:bg-[#0052A3] text-lg px-6 py-3 sm:px-8 sm:py-6"
            onClick={() => scrollToSection('#menu')}
          >
            {t('hero.cta1')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-6 py-3 sm:px-8 sm:py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            onClick={() => scrollToSection('#contacto')}
          >
            {t('hero.cta2')}
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-2">{t('hero.stat1')}</div>
            <div className="text-sm text-gray-200">{t('hero.stat1.label')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-2">{t('hero.stat2')}</div>
            <div className="text-sm text-gray-200">{t('hero.stat2.label')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-2">{t('hero.stat3')}</div>
            <div className="text-sm text-gray-200">{t('hero.stat3.label')}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#servicios" 
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#servicios');
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
