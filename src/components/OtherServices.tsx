import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, ChefHat, Utensils, Briefcase, Home, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function OtherServices() {
  const { t } = useLanguage();

  const otherServices = [
    {
      icon: Calendar,
      number: '1',
      image: ""
    },
    {
      icon: ChefHat,
      number: '2',
      image: ""
    },
    {
      icon: Utensils,
      number: '3',
      image: "https://images.unsplash.com/photo-1752654976426-f0de0cbf8bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWVsbGElMjBjb29raW5nJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzYyMzMwODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Briefcase,
      number: '4',
      image: "https://images.unsplash.com/photo-1708901141722-d5b0583407b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGx1bmNoJTIwY2FmZXRlcmlhfGVufDF8fHx8MTc2MjMzMDgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Home,
      number: '5',
      image: "https://images.unsplash.com/photo-1752070182361-9fa562ed7f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVsaXZlcnklMjBtZWFsfGVufDF8fHx8MTc2MjMzMDgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: ShoppingBag,
      number: '6',
      image: "https://images.unsplash.com/photo-1597514402413-17eac2b501c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWtlYXdheSUyMGZvb2QlMjBjb250YWluZXJ8ZW58MXx8fHwxNzYyMjUxMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="otros-servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t('other.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('other.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            const serviceNum = service.number;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white group">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={t(`other.${serviceNum}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#0066CC]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#0066CC]" />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{t(`other.${serviceNum}.title`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`other.${serviceNum}.desc`)}</p>
                  <ul className="space-y-2 mb-4">
                    {[1, 2, 3, 4].map((idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{t(`other.${serviceNum}.f${idx}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0066CC]/10 to-[#0052A3]/10 rounded-2xl p-10">
            <h3 className="text-3xl mb-4 text-gray-900">
              {t('other.cta.title')}
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              {t('other.cta.desc')}
            </p>
            <Button 
              size="lg" 
              className="bg-[#0066CC] hover:bg-[#0052A3] text-lg px-10 py-6"
              onClick={scrollToContact}
            >
              {t('other.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
