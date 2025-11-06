import { Card } from "./ui/card";
import { UtensilsCrossed, Apple, Heart, Leaf, Users, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: UtensilsCrossed, num: '1' },
    { icon: Apple, num: '2' },
    { icon: Heart, num: '3' },
    { icon: Leaf, num: '4' },
    { icon: Users, num: '5' },
    { icon: Clock, num: '6' },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 bg-white border-t-4 border-t-[#0066CC]">
                <div className="w-14 h-14 bg-[#0066CC]/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#0066CC]" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{t(`services.${service.num}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`services.${service.num}.desc`)}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0066CC] rounded-full"></span>
                      {t(`services.${service.num}.f${idx}`)}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
