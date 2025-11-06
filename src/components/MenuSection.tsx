import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function MenuSection() {
  const { t } = useLanguage();

  const menuExamples = [
    {
      image: "https://images.unsplash.com/photo-1703803968792-35753ef18b21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb3VzJTIwbWVhbCUyMHBsYXRlfGVufDF8fHx8MTc2MjMyOTg4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      num: '1'
    },
    {
      image: "https://images.unsplash.com/photo-1657012784624-c6ecc5031918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmb29kfGVufDF8fHx8MTc2MjI1NDA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      num: '2'
    },
    {
      image: "https://images.unsplash.com/photo-1758874961075-f30645db3966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwa2lkcyUyMG1lYWx8ZW58MXx8fHwxNzYyMzI5ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      num: '3'
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t('menu.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl mb-6 text-gray-900">
              {t('menu.section.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('menu.section.desc')}
            </p>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{t(`menu.feature.${idx}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1588075506728-9faba14208cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVhdGluZyUyMGNhZmV0ZXJpYXxlbnwxfHx8fDE3NjIzMjk4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Niños comiendo en el comedor escolar"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuExamples.map((menu, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={menu.image}
                  alt={t(`menu.card${menu.num}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl mb-2 text-gray-900">{t(`menu.card${menu.num}.title`)}</h4>
                <p className="text-gray-600">{t(`menu.card${menu.num}.desc`)}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-[#0066CC]/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4 text-gray-900">
            {t('menu.download.title')}
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {t('menu.download.desc')}
          </p>
          <Button className="px-8 py-3 bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-lg transition-colors">
            {t('menu.download.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
