import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Testimonials() {
  const { t, language } = useLanguage();

  const testimonialsData = language === 'val' ? [
    {
      name: "CEIP Sant Jordi",
      role: "Directora del Centre",
      rating: 5,
      comment: "Treballem amb Caterguai des de fa més de 5 anys. El servei és excel·lent, els menús són variats i saludables, i els xiquets estan encantats. El personal és molt professional i atent.",
    },
    {
      name: "Maria González",
      role: "Mare d'alumne",
      rating: 5,
      comment: "Com a mare, em quede molt tranquil·la sabent que el meu fill menja de forma saludable al col·legi. Els menús són equilibrats i es nota que utilitzen productes de qualitat.",
    },
    {
      name: "Col·legi Nostra Senyora",
      role: "Coordinador de Menjador",
      rating: 5,
      comment: "L'adaptació a les necessitats especials dels nostres alumnes amb al·lèrgies i intoleràncies és perfecta. Caterguai sempre està disposat a col·laborar i millorar el servei.",
    },
    {
      name: "Carles Martínez",
      role: "AMPA",
      rating: 5,
      comment: "Des de l'AMPA valorem molt positivament el servei de Caterguai. Són transparents, escolten els nostres suggeriments i la relació qualitat-preu és excel·lent.",
    },
    {
      name: "CEIP Les Roses",
      role: "Direcció",
      rating: 5,
      comment: "El canvi a Caterguai ha sigut molt positiu. Els xiquets mengen millor, les famílies estan contentes i el servei de monitors és impecable. Totalment recomanable.",
    },
    {
      name: "Ana López",
      role: "Mare de 2 alumnes",
      rating: 5,
      comment: "Els meus fills estan encantats amb el menjar del cole. Em conten tots els dies el que han menjat i han provat aliments nous gràcies a la varietat dels menús.",
    },
  ] : [
    {
      name: "CEIP Sant Jordi",
      role: "Directora del Centro",
      rating: 5,
      comment: "Trabajamos con Caterguai desde hace más de 5 años. El servicio es excelente, los menús son variados y saludables, y los niños están encantados. El personal es muy profesional y atento.",
    },
    {
      name: "María González",
      role: "Madre de alumno",
      rating: 5,
      comment: "Como madre, me quedo muy tranquila sabiendo que mi hijo come de forma saludable en el colegio. Los menús son equilibrados y se nota que utilizan productos de calidad.",
    },
    {
      name: "Colegio Nuestra Señora",
      role: "Coordinador de Comedor",
      rating: 5,
      comment: "La adaptación a las necesidades especiales de nuestros alumnos con alergias e intolerancias es perfecta. Caterguai siempre está dispuesto a colaborar y mejorar el servicio.",
    },
    {
      name: "Carlos Martínez",
      role: "AMPA",
      rating: 5,
      comment: "Desde la AMPA valoramos muy positivamente el servicio de Caterguai. Son transparentes, escuchan nuestras sugerencias y la relación calidad-precio es excelente.",
    },
    {
      name: "CEIP Les Roses",
      role: "Dirección",
      rating: 5,
      comment: "El cambio a Caterguai ha sido muy positivo. Los niños comen mejor, las familias están contentas y el servicio de monitores es impecable. Totalmente recomendable.",
    },
    {
      name: "Ana López",
      role: "Madre de 2 alumnos",
      rating: 5,
      comment: "Mis hijos están encantados con la comida del cole. Me cuentan todos los días lo que han comido y han probado alimentos nuevos gracias a la variedad de los menús.",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="w-10 h-10 text-[#0066CC]/20 absolute top-4 right-4" />
              <div className="mb-4">
                <h4 className="text-lg text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0066CC] text-[#0066CC]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic">"{testimonial.comment}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
