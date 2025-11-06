import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    /* school: "",
    students: "",*/
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contact.success"));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-[#0066CC]/10 to-[#0052A3]/5 border-0">
              <h3 className="text-2xl mb-6 text-gray-900">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">
                      {t("contact.phone")}
                    </p>
                    <a
                      href="tel:+34962801028 "
                      className="text-gray-600 hover:text-[#0066CC]"
                    >
                      962 801 028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">
                      {t("contact.email")}
                    </p>
                    <a
                      href="mailto:info@caterguai.com"
                      className="text-gray-600 hover:text-[#0066CC] break-all"
                    >
                      info@caterguai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">
                      {t("contact.address")}
                    </p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contact.address.value")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0066CC] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">
                      {t("contact.hours")}
                    </p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contact.hours.value")}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#0066CC] text-white">
              <h4 className="text-xl mb-3">
                {t("contact.help.title")}
              </h4>
              <p className="text-white/90 mb-4">
                {t("contact.help.desc")}
              </p>
              <a
                href="tel:+34962801028"
                className="inline-block px-6 py-3 bg-white text-[#0066CC] rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t("contact.help.cta")}
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t(
                        "contact.form.name.placeholder",
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t(
                      "contact.form.email.placeholder",
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t(
                      "contact.form.phone.placeholder",
                    )}
                  />
                </div>
                {/*
                  <div>
                    <label htmlFor="school" className="block text-sm mb-2 text-gray-700">
                      {t('contact.form.school')}
                    </label>
                    <Input
                      id="school"
                      name="school"
                      type="text"
                      required
                      value={formData.school}
                      onChange={handleChange}
                      placeholder={t('contact.form.school.placeholder')}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="students" className="block text-sm mb-2 text-gray-700">
                      {t('contact.form.students')}
                    </label>
                    <Input
                      id="students"
                      name="students"
                      type="text"
                      value={formData.students}
                      onChange={handleChange}
                      placeholder={t('contact.form.students.placeholder')}
                    />
                  </div>
                </div>
              */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t(
                      "contact.form.message.placeholder",
                    )}
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] py-6"
                >
                  {t("contact.form.submit")}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  {t("contact.form.privacy")}
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}