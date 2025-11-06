import { Menu, X, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";
import Logo from './Logo'
import siteConfig from '../siteConfig'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#inicio", label: t('nav.inicio') },
    { href: "#servicios", label: t('nav.servicios') },
    { href: "#menu", label: t('nav.menu') },
    { href: "#otros-servicios", label: t('nav.otros') },
    { href: "#compromiso", label: t('nav.compromiso') },
    { href: "#contacto", label: t('nav.contacto') },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'val' ? 'es' : 'val');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo width={50} height={50} />
            <div>
              <div className="text-2xl text-[#0066CC]">Caterguai</div>
              <div className="text-xs text-gray-600">{t('header.subtitle')}</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-[#0066CC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & Language */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-700 hover:text-[#0066CC] transition-colors px-3 py-1 rounded-md hover:bg-gray-100"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm uppercase">{language === 'val' ? 'VAL' : 'ES'}</span>
            </button>
            <a href={`tel:+34${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-700 hover:text-[#0066CC] transition-colors">
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <Button 
              className="bg-[#0066CC] hover:bg-[#0052A3]"
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('header.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-[#0066CC] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t space-y-3">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-gray-700 w-full py-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'val' ? 'Valencià' : 'Castellano'}</span>
                </button>
                <a href={`tel:+34${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-700 py-2">
                  <Phone className="w-4 h-4" />
                  <span>{siteConfig.phone}</span>
                </a>
                <Button 
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3]"
                  onClick={() => {
                    const element = document.querySelector('#contacto');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                >
                  {t('header.cta')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
