import { Globe2, Headphones, FileText, Video } from "lucide-react";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Globe2,
    key: "translation"
  },
  {
    icon: Headphones,
    key: "interpreting"
  },
  {
    icon: FileText,
    key: "transcription"
  },
  {
    icon: Video,
    key: "audiovisual"
  }
];

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm mx-auto md:max-w-none">
          {services.map((service) => (
            <div key={service.key} className="service-card text-center">
              <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`services.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};