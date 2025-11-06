import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Logo from './Logo'
import siteConfig from '../siteConfig'

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo width={40} height={40} />
              <div>
                <div className="text-xl text-white">Caterguai</div>
                <div className="text-xs text-gray-400">{t('header.subtitle')}</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066CC] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066CC] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066CC] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066CC] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="hover:text-[#0066CC] transition-colors">{t('nav.inicio')}</a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="hover:text-[#0066CC] transition-colors">{t('nav.servicios')}</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => scrollToSection(e, '#menu')} className="hover:text-[#0066CC] transition-colors">{t('nav.menu')}</a>
              </li>
              <li>
                <a href="#otros-servicios" onClick={(e) => scrollToSection(e, '#otros-servicios')} className="hover:text-[#0066CC] transition-colors">{t('nav.otros')}</a>
              </li>
              <li>
                <a href="#compromiso" onClick={(e) => scrollToSection(e, '#compromiso')} className="hover:text-[#0066CC] transition-colors">{t('nav.compromiso')}</a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => scrollToSection(e, '#contacto')} className="hover:text-[#0066CC] transition-colors">{t('nav.contacto')}</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="hover:text-[#0066CC] transition-colors">{t('services.1.title')}</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => scrollToSection(e, '#menu')} className="hover:text-[#0066CC] transition-colors">{t('services.3.title')}</a>
              </li>
              <li>
                <a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="hover:text-[#0066CC] transition-colors">{t('services.5.title')}</a>
              </li>
              <li>
                <a href="#otros-servicios" onClick={(e) => scrollToSection(e, '#otros-servicios')} className="hover:text-[#0066CC] transition-colors">{t('other.2.title')}</a>
              </li>
              <li>
                <a href="#otros-servicios" onClick={(e) => scrollToSection(e, '#otros-servicios')} className="hover:text-[#0066CC] transition-colors">{t('other.3.title')}</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{t('contact.address.value')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0066CC] flex-shrink-0" />
                <a href="tel:+34962801028 " className="hover:text-[#0066CC] transition-colors">
                  962 801 028
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#0066CC] flex-shrink-0" />
                <a href="mailto:info@caterguai.com" className="hover:text-[#0066CC] transition-colors break-all">
                  info@caterguai.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Caterguai. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#0066CC] transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-[#0066CC] transition-colors">{t('footer.legal')}</a>
              <a href="#" className="hover:text-[#0066CC] transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
