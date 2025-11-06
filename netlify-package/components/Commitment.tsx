import { Card } from "./ui/card";
import { Shield, Award, Users, Sprout } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Commitment() {
  const { t } = useLanguage();

  const commitments = [
    { icon: Shield, num: '1' },
    { icon: Award, num: '2' },
    { icon: Users, num: '3' },
    { icon: Sprout, num: '4' },
  ];

  return (
    <section id="compromiso" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t('commitment.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('commitment.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            return (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3 text-gray-900">{t(`commitment.${commitment.num}.title`)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(`commitment.${commitment.num}.desc`)}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl text-[#0066CC] mb-2">100%</div>
            <div className="text-gray-700">{t('hero.stat3.label')}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl text-[#0066CC] mb-2">0%</div>
            <div className="text-gray-700">{t('services.2.f3')}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl text-[#0066CC] mb-2">24/7</div>
            <div className="text-gray-700">{t('contact.hours')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
