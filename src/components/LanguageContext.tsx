import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "val" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type TranslationsMap = Record<string, string>;

const translations: Record<Language, TranslationsMap> = {
  val: {
    // Header
    "nav.inicio": "Inici",
    "nav.servicios": "Serveis",
    "nav.menu": "Els nostres menús",
    "nav.otros": "Altres serveis",
    "nav.compromiso": "Compromís",
    "nav.contacto": "Contacte",
    "header.phone": "962 801 028",
    "header.cta": "Sol·licitar Informació",
    "header.subtitle": "Menjadors Escolars",

    // Hero
    "hero.title": "Menjadors Escolars Saludables",
    "hero.subtitle":
      "Més de 20 anys oferint alimentació equilibrada i de qualitat per als col·legis",
    "hero.cta1": "Veure els nostres menús",
    "hero.cta2": "Sol·licitar Pressupost",
    "hero.stat1": "+20",
    "hero.stat1.label": "Anys d'experiència",
    "hero.stat2": "50+",
    "hero.stat2.label": "Col·legis atesos",
    "hero.stat3": "100%",
    "hero.stat3.label": "Productes frescos",

    // Services
    "services.title": "Els nostres serveis",
    "services.subtitle":
      "Oferim un servei integral de menjador escolar amb la màxima qualitat i dedicació",
    "services.1.title": "Menjador Escolar",
    "services.1.desc":
      "Servei complet de menjador amb menús equilibrats, supervisats per nutricionistes especialitzats en alimentació infantil.",
    "services.1.f1": "Menús mensuals",
    "services.1.f2": "Supervisió nutricional",
    "services.1.f3": "Personal qualificat",
    "services.2.title": "Alimentació Saludable",
    "services.2.desc":
      "Productes frescos i de temporada, elaborats diàriament a les nostres cuines seguint els més alts estàndards de qualitat.",
    "services.2.f1": "Ingredients frescos",
    "services.2.f2": "Cuina pròpia",
    "services.2.f3": "Sense precuinats",
    "services.3.title": "Menús Adaptats",
    "services.3.desc":
      "Menús especials per a al·lèrgies, intoleràncies i necessitats dietètiques específiques, garantint la seguretat alimentària.",
    "services.3.f1": "Sense al·lèrgens",
    "services.3.f2": "Dietes especials",
    "services.3.f3": "Celíacs",
    "services.4.title": "Sostenibilitat",
    "services.4.desc":
      "Compromís amb el medi ambient utilitzant productes locals, envasos biodegradables i reduint el malbaratament alimentari.",
    "services.4.f1": "Productes km 0",
    "services.4.f2": "Eco-friendly",
    "services.4.f3": "Zero malbaratament",
    "services.5.title": "Educació Nutricional",
    "services.5.desc":
      "Tallers i activitats per fomentar hàbits saludables en els xiquets, ensenyant-los la importància d'una bona alimentació.",
    "services.5.f1": "Tallers infantils",
    "services.5.f2": "Xerrades pares",
    "services.5.f3": "Material educatiu",
    "services.6.title": "Flexibilitat",
    "services.6.desc":
      "Ens adaptem a les necessitats de cada col·legi amb diferents modalitats de servei i horaris flexibles.",
    "services.6.f1": "Diversos torns",
    "services.6.f2": "Servei a la carta",
    "services.6.f3": "Esmorzars i berenars",

    // Menu Section
    "menu.title": "Els nostres menús",
    "menu.subtitle":
      "Menús dissenyats específicament per a les necessitats nutricionals dels xiquets en edat escolar",
    "menu.section.title": "Alimentació Saludable i Equilibrada",
    "menu.section.desc":
      "Els nostres menús són elaborats per nutricionistes especialitzats en alimentació infantil, garantint l'aportació adequada de nutrients essencials per al creixement i desenvolupament dels xiquets.",
    "menu.feature.1": "Menús elaborats per nutricionistes",
    "menu.feature.2": "Productes frescos i de temporada",
    "menu.feature.3": "Adaptats a al·lèrgies i intoleràncies",
    "menu.feature.4": "Receptes casolanes i saludables",
    "menu.feature.5": "Control de qualitat diari",
    "menu.feature.6": "Varietat i equilibri nutricional",
    "menu.card1.title": "Menú Equilibrat",
    "menu.card1.desc": "Primer plat, segon plat, postre i pa",
    "menu.card2.title": "Ingredients Frescos",
    "menu.card2.desc": "Verdures i hortalisses de proximitat",
    "menu.card3.title": "Plats Saborosos",
    "menu.card3.desc": "Receptes que agraden als xiquets",
    "menu.download.title": "Menús Mensuals Disponibles",
    "menu.download.desc":
      "Consulta els nostres menús mensuals actualitzats amb tota la informació nutricional i al·lèrgens. Disponibles per descarregar en format PDF.",
    "menu.download.cta": "Descarregar Menú del Mes",

    // Other Services
    "other.title": "Altres serveis",
    "other.subtitle":
      "A més del servei de menjador escolar, oferim solucions complementàries per cobrir totes les necessitats",
    "other.1.title": "Esdeveniments Especials",
    "other.1.desc":
      "Si vols celebrar algun esdeveniment amb gran nombre de comensals, si t'encarregues d'organitzar una festa al teu poble, barri, empresa, etc. o senzillament gaudir d'un bon dinar multitudinari sense preocupar-te de res, confia en nosaltres i et farem una proposta personalitzada per l'ocasió.",
    "other.1.f1": "Celebracions populars",
    "other.1.f2": "Festes de barri o poble",
    "other.1.f3": "Dinars multitudinaris",
    "other.1.f4": "Servei seguts o a peu dret",
    "other.2.title": "Càterings",
    "other.2.desc":
      "Les teues celebracions poden resultar molt fàcils de muntar si ens permets que t'assessorem en la planificació del menjar. Som especialistes en abastir de bon menjar reunions i festes que requereixen un acompanyament sense complicacions.",
    "other.2.f1": "Menús per menjar seguts",
    "other.2.f2": "Picoteig a peu dret",
    "other.2.f3": "Càtering servit o en punts fixos",
    "other.2.f4": "Cuina popular i senzilla",
    "other.3.title": "Paelles i Fideuades",
    "other.3.desc":
      'A CATERGUAI tenim experiència i capacitat per a la preparació de menjars en celebracions populars, i estem especialitzats en l\'elaboració de paelles i fideuades. El nostre objectiu és que "popular" no siga sinònim de baixa qualitat.',
    "other.3.f1": "Productes de qualitat",
    "other.3.f2": "Mercats de proximitat",
    "other.3.f3": "Experiència demostrada",
    "other.3.f4": "Preus molt assequibles",
    "other.4.title": "Menjadors d'Empreses",
    "other.4.desc":
      "En CATERGUAI ens esforcem per crear espais i entorns adaptats a les necessitats de cada empresa, de manera que l'empleat trobe en ells un lloc de convivència agradable i acollidor on poder gaudir de la qualitat dels menús.",
    "other.4.f1": "Menús variats i equilibrats",
    "other.4.f2": "Cuina tradicional i sana",
    "other.4.f3": "Matèria primera de qualitat",
    "other.4.f4": "Servei atès per professionals",
    "other.5.title": "Menjar a Domicili",
    "other.5.desc":
      "Servei destinat a prestar atenció personalitzada a persones o famílies amb dificultats que necessiten rebre una alimentació convenient i adequada. Facilitem que les persones grans puguen viure en el seu entorn habitual amb la seguretat de menjar diàriament amb totes les garanties.",
    "other.5.f1": "Control i planificació nutricional",
    "other.5.f2": "Menús adaptats a necessitats",
    "other.5.f3": "Transport a domicili",
    "other.5.f4": "Menjar del dia, recent fet",
    "other.6.title": "Menjar per Endur",
    "other.6.desc":
      "En les èpoques extraescolars, oferim diàriament menjar per endur a casa. Aquest servei el realitzem a través dels establiments de temporada que obrim en algunes zones de platja. Menús casolans amb la garantia CATERGUAI de qualitat/preu.",
    "other.6.f1": "Menús casolans diaris",
    "other.6.f2": "Garantia qualitat/preu",
    "other.6.f3": "Control higiènic i sanitari",
    "other.6.f4": "Establiments de temporada",
    "other.cta.title": "Necessites una solució integral?",
    "other.cta.desc":
      "Podem personalitzar un paquet de serveis adaptat a les necessitats específiques del teu centre o empresa",
    "other.cta.button": "Sol·licitar Informació Personalitzada",

    // Commitment
    "commitment.title": "El nostre compromís",
    "commitment.subtitle":
      "La salut i benestar dels xiquets és la nostra prioritat. Per això treballem amb els més alts estàndards de qualitat",
    "commitment.1.title": "Seguretat Alimentària",
    "commitment.1.desc":
      "Complim estrictament amb totes les normatives de seguretat i higiene alimentària. Les nostres instal·lacions compten amb les certificacions necessàries i realitzem controls de qualitat diaris.",
    "commitment.2.title": "Qualitat Certificada",
    "commitment.2.desc":
      "Estem certificats amb ISO 9001 i seguim protocols APPCC. Treballem únicament amb proveïdors homologats que garanteixen la màxima qualitat dels productes.",
    "commitment.3.title": "Equip Professional",
    "commitment.3.desc":
      "El nostre equip està format per cuiners professionals, nutricionistes, monitors de menjador titulats i personal especialitzat en el tracte amb xiquets.",
    "commitment.4.title": "Responsabilitat Social",
    "commitment.4.desc":
      "Compromís amb la sostenibilitat, utilitzant productes locals i de temporada. Eduquem en hàbits saludables i col·laborem amb bancs d'aliments.",

    // Testimonials
    "testimonials.title": "Opinions de Col·legis i Famílies",
    "testimonials.subtitle":
      "La confiança dels centres educatius i les famílies és la nostra millor recompensa",

    // Contact
    "contact.title": "Sol·licita Informació",
    "contact.subtitle":
      "Vols que gestionem el menjador del teu col·legi? Contacta amb nosaltres i t'informarem sense compromís",
    "contact.info.title": "Informació de Contacte",
    "contact.phone": "Telèfon",
    "contact.email": "Email",
    "contact.address": "Adreça",
    "contact.address.value":
      "C/ xaloc, nº3, 46716 Rafelcofer (València)",
    "contact.hours": "Horari d'Atenció",
    "contact.hours.value": "Dilluns - Divendres\n9:00 - 18:00",
    "contact.help.title": "Necessites assessorament?",
    "contact.help.desc":
      "El nostre equip d'experts està a la teua disposició per resoldre qualsevol dubte sobre els nostres serveis.",
    "contact.help.cta": "Truca'ns Ara",
    "contact.form.name": "Nom i Cognoms *",
    "contact.form.name.placeholder": "El teu nom complet",
    "contact.form.email": "Email *",
    "contact.form.email.placeholder": "el.teu@email.com",
    "contact.form.phone": "Telèfon *",
    "contact.form.phone.placeholder": "123 456 789",
    /* 'contact.form.school': 'Nom del Col·legi *',
    'contact.form.school.placeholder': 'CEIP / Col·legi...',
    'contact.form.students': 'Nombre Aproximat de Comensals',
    'contact.form.students.placeholder': 'Ex: 150 alumnes',
    */ "contact.form.message": "Missatge *",
    "contact.form.message.placeholder":
      "Conta'ns què necessites i ens posarem en contacte amb tu...",
    "contact.form.submit": "Enviar Sol·licitud d'Informació",
    "contact.form.privacy":
      "En enviar aquest formulari acceptes la nostra política de privacitat i protecció de dades",
    "contact.success":
      "Gràcies pel teu interés! Ens posarem en contacte amb tu en breu.",

    // Footer
    "footer.desc":
      "Més de 20 anys oferint serveis de menjador escolar de qualitat en els col·legis de Catalunya.",
    "footer.links": "Enllaços Ràpids",
    "footer.services": "Els nostres serveis",
    "footer.contact": "Contacte",
    "footer.privacy": "Política de Privacitat",
    "footer.legal": "Avís Legal",
    "footer.cookies": "Cookies",
    "footer.rights": "Tots els drets reservats.",
  },
  es: {
    // Header
    "nav.inicio": "Inicio",
    "nav.servicios": "Servicios",
    "nav.menu": "Nuestros Menús",
    "nav.otros": "Otros Servicios",
    "nav.compromiso": "Compromiso",
    "nav.contacto": "Contacto",
    "header.phone": "933 03 03 29",
    "header.cta": "Solicitar Información",
    "header.subtitle": "Comedores Escolares",

    // Hero
    "hero.title": "Comedores Escolares Saludables",
    "hero.subtitle":
      "Más de 20 años ofreciendo alimentación equilibrada y de calidad para los colegios de Cataluña",
    "hero.cta1": "Ver Nuestros Menús",
    "hero.cta2": "Solicitar Presupuesto",
    "hero.stat1": "+20",
    "hero.stat1.label": "Años de experiencia",
    "hero.stat2": "50+",
    "hero.stat2.label": "Colegios atendidos",
    "hero.stat3": "100%",
    "hero.stat3.label": "Productos frescos",

    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle":
      "Ofrecemos un servicio integral de comedor escolar con la máxima calidad y dedicación",
    "services.1.title": "Comedor Escolar",
    "services.1.desc":
      "Servicio completo de comedor con menús equilibrados, supervisados por nutricionistas especializados en alimentación infantil.",
    "services.1.f1": "Menús mensuales",
    "services.1.f2": "Supervisión nutricional",
    "services.1.f3": "Personal cualificado",
    "services.2.title": "Alimentación Saludable",
    "services.2.desc":
      "Productos frescos y de temporada, elaborados diariamente en nuestras cocinas siguiendo los más altos estándares de calidad.",
    "services.2.f1": "Ingredientes frescos",
    "services.2.f2": "Cocina propia",
    "services.2.f3": "Sin precocinados",
    "services.3.title": "Menús Adaptados",
    "services.3.desc":
      "Menús especiales para alergias, intolerancias y necesidades dietéticas específicas, garantizando la seguridad alimentaria.",
    "services.3.f1": "Sin alérgenos",
    "services.3.f2": "Dietas especiales",
    "services.3.f3": "Celíacos",
    "services.4.title": "Sostenibilidad",
    "services.4.desc":
      "Compromiso con el medio ambiente utilizando productos locales, envases biodegradables y reduciendo el desperdicio alimentario.",
    "services.4.f1": "Productos km 0",
    "services.4.f2": "Eco-friendly",
    "services.4.f3": "Cero desperdicio",
    "services.5.title": "Educación Nutricional",
    "services.5.desc":
      "Talleres y actividades para fomentar hábitos saludables en los niños, enseñándoles la importancia de una buena alimentación.",
    "services.5.f1": "Talleres infantiles",
    "services.5.f2": "Charlas padres",
    "services.5.f3": "Material educativo",
    "services.6.title": "Flexibilidad",
    "services.6.desc":
      "Nos adaptamos a las necesidades de cada colegio con diferentes modalidades de servicio y horarios flexibles.",
    "services.6.f1": "Varios turnos",
    "services.6.f2": "Servicio a la carta",
    "services.6.f3": "Desayunos y meriendas",

    // Menu Section
    "menu.title": "Nuestros Menús",
    "menu.subtitle":
      "Menús diseñados específicamente para las necesidades nutricionales de los niños en edad escolar",
    "menu.section.title":
      "Alimentación Saludable y Equilibrada",
    "menu.section.desc":
      "Nuestros menús son elaborados por nutricionistas especializados en alimentación infantil, garantizando el aporte adecuado de nutrientes esenciales para el crecimiento y desarrollo de los niños.",
    "menu.feature.1": "Menús elaborados por nutricionistas",
    "menu.feature.2": "Productos frescos y de temporada",
    "menu.feature.3": "Adaptados a alergias e intolerancias",
    "menu.feature.4": "Recetas caseras y saludables",
    "menu.feature.5": "Control de calidad diario",
    "menu.feature.6": "Variedad y equilibrio nutricional",
    "menu.card1.title": "Menú Equilibrado",
    "menu.card1.desc":
      "Primer plato, segundo plato, postre y pan",
    "menu.card2.title": "Ingredientes Frescos",
    "menu.card2.desc": "Verduras y hortalizas de proximidad",
    "menu.card3.title": "Platos Sabrosos",
    "menu.card3.desc": "Recetas que gustan a los niños",
    "menu.download.title": "Menús Mensuales Disponibles",
    "menu.download.desc":
      "Consulta nuestros menús mensuales actualizados con toda la información nutricional y alérgenos. Disponibles para descargar en formato PDF.",
    "menu.download.cta": "Descargar Menú del Mes",

    // Other Services
    "other.title": "Otros Servicios",
    "other.subtitle":
      "Además del servicio de comedor escolar, ofrecemos soluciones complementarias para cubrir todas las necesidades",
    "other.1.title": "Eventos Especiales",
    "other.1.desc":
      "Si quieres celebrar algún evento con gran número de comensales, si te encargas de organizar una fiesta en tu pueblo, barrio, empresa, etc. o simplemente disfrutar de una buena comida multitudinaria sin preocuparte de nada, confía en nosotros y te haremos una propuesta personalizada para la ocasión.",
    "other.1.f1": "Celebraciones populares",
    "other.1.f2": "Fiestas de barrio o pueblo",
    "other.1.f3": "Comidas multitudinarias",
    "other.1.f4": "Servicio sentados o de pie",
    "other.2.title": "Caterings",
    "other.2.desc":
      "Tus celebraciones pueden resultar muy fáciles de montar si nos permites que te asesoremos en la planificación de la comida. Somos especialistas en abastecer de buena comida reuniones y fiestas que requieren un acompañamiento sin complicaciones.",
    "other.2.f1": "Menús para comer sentados",
    "other.2.f2": "Picoteo de pie",
    "other.2.f3": "Catering servido o en puntos fijos",
    "other.2.f4": "Cocina popular y sencilla",
    "other.3.title": "Paellas y Fideuás",
    "other.3.desc":
      'En CATERGUAI tenemos experiencia y capacidad para la preparación de comidas en celebraciones populares, y estamos especializados en la elaboración de paellas y fideuás. Nuestro objetivo es que "popular" no sea sinónimo de baja calidad.',
    "other.3.f1": "Productos de calidad",
    "other.3.f2": "Mercados de proximidad",
    "other.3.f3": "Experiencia demostrada",
    "other.3.f4": "Precios muy asequibles",
    "other.4.title": "Comedores de Empresas",
    "other.4.desc":
      "En CATERGUAI nos esforzamos por crear espacios y entornos adaptados a las necesidades de cada empresa, de manera que el empleado encuentre en ellos un lugar de convivencia agradable y acogedor donde poder disfrutar de la calidad de los menús.",
    "other.4.f1": "Menús variados y equilibrados",
    "other.4.f2": "Cocina tradicional y sana",
    "other.4.f3": "Materia prima de calidad",
    "other.4.f4": "Servicio atendido por profesionales",
    "other.5.title": "Comida a Domicilio",
    "other.5.desc":
      "Servicio destinado a prestar atención personalizada a personas o familias con dificultades que necesitan recibir una alimentación conveniente y adecuada. Facilitamos que las personas mayores puedan vivir en su entorno habitual con la seguridad de comer diariamente con todas las garantías.",
    "other.5.f1": "Control y planificación nutricional",
    "other.5.f2": "Menús adaptados a necesidades",
    "other.5.f3": "Transporte a domicilio",
    "other.5.f4": "Comida del día, recién hecha",
    "other.6.title": "Comida para Llevar",
    "other.6.desc":
      "En las épocas extraescolares, ofrecemos diariamente comida para llevar a casa. Este servicio lo realizamos a través de los establecimientos de temporada que abrimos en algunas zonas de playa. Menús caseros con la garantía CATERGUAI de calidad/precio.",
    "other.6.f1": "Menús caseros diarios",
    "other.6.f2": "Garantía calidad/precio",
    "other.6.f3": "Control higiénico y sanitario",
    "other.6.f4": "Establecimientos de temporada",
    "other.cta.title": "¿Necesitas una solución integral?",
    "other.cta.desc":
      "Podemos personalizar un paquete de servicios adaptado a las necesidades específicas de tu centro o empresa",
    "other.cta.button": "Solicitar Información Personalizada",

    // Commitment
    "commitment.title": "Nuestro Compromiso",
    "commitment.subtitle":
      "La salud y bienestar de los niños es nuestra prioridad. Por eso trabajamos con los más altos estándares de calidad",
    "commitment.1.title": "Seguridad Alimentaria",
    "commitment.1.desc":
      "Cumplimos estrictamente con todas las normativas de seguridad e higiene alimentaria. Nuestras instalaciones cuentan con las certificaciones necesarias y realizamos controles de calidad diarios.",
    "commitment.2.title": "Calidad Certificada",
    "commitment.2.desc":
      "Estamos certificados con ISO 9001 y seguimos protocolos APPCC. Trabajamos únicamente con proveedores homologados que garantizan la máxima calidad de los productos.",
    "commitment.3.title": "Equipo Profesional",
    "commitment.3.desc":
      "Nuestro equipo está formado por cocineros profesionales, nutricionistas, monitores de comedor titulados y personal especializado en el trato con niños.",
    "commitment.4.title": "Responsabilidad Social",
    "commitment.4.desc":
      "Compromiso con la sostenibilidad, utilizando productos locales y de temporada. Educamos en hábitos saludables y colaboramos con bancos de alimentos.",

    // Testimonials
    "testimonials.title": "Opiniones de Colegios y Familias",
    "testimonials.subtitle":
      "La confianza de los centros educativos y las familias es nuestra mejor recompensa",

    // Contact
    "contact.title": "Solicita Información",
    "contact.subtitle":
      "¿Quieres que gestionemos el comedor de tu colegio? Contacta con nosotros y te informaremos sin compromiso",
    "contact.info.title": "Información de Contacto",
    "contact.phone": "Teléfono",
    "contact.email": "Email",
    "contact.address": "Dirección",
    "contact.address.value":
      "C/ xaloc, nº3, 46716 Rafelcofer (València)",
    "contact.hours": "Horario de Atención",
    "contact.hours.value": "Lunes - Viernes\n9:00 - 18:00",
    "contact.help.title": "¿Necesitas asesoramiento?",
    "contact.help.desc":
      "Nuestro equipo de expertos está a tu disposición para resolver cualquier duda sobre nuestros servicios.",
    "contact.help.cta": "Llámanos Ahora",
    "contact.form.name": "Nombre y Apellidos *",
    "contact.form.name.placeholder": "Tu nombre completo",
    "contact.form.email": "Email *",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.phone": "Teléfono *",
    "contact.form.phone.placeholder": "123 456 789",
    /*'contact.form.school': 'Nombre del Colegio *',
    'contact.form.school.placeholder': 'CEIP / Colegio...',
    'contact.form.students': 'Número Aproximado de Comensales',
    'contact.form.students.placeholder': 'Ej: 150 alumnos',
    */ "contact.form.message": "Mensaje *",
    "contact.form.message.placeholder":
      "Cuéntanos qué necesitas y nos pondremos en contacto contigo...",
    "contact.form.submit": "Enviar Solicitud de Información",
    "contact.form.privacy":
      "Al enviar este formulario aceptas nuestra política de privacidad y protección de datos",
    "contact.success":
      "¡Gracias por tu interés! Nos pondremos en contacto contigo en breve.",

    // Footer
    "footer.desc":
      "Más de 20 años ofreciendo servicios de comedor escolar de calidad en los colegios de Cataluña.",
    "footer.links": "Enlaces Rápidos",
    "footer.services": "Nuestros Servicios",
    "footer.contact": "Contacto",
    "footer.privacy": "Política de Privacidad",
    "footer.legal": "Aviso Legal",
    "footer.cookies": "Cookies",
    "footer.rights": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("val"); // Valenciano por defecto

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider",
    );
  }
  return context;
}