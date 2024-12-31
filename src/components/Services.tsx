import { Globe2, Headphones, FileText, Video } from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Translation",
    description: "Professional translation services between English, French, Spanish, and German",
  },
  {
    icon: Headphones,
    title: "Interpreting",
    description: "Expert interpreting services between English and French",
  },
  {
    icon: FileText,
    title: "Transcription",
    description: "Accurate transcription in English, French, Spanish, and German",
  },
  {
    icon: Video,
    title: "Audiovisual Translation",
    description: "Specialized audiovisual translation across multiple languages",
  },
];

export const Services = () => {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm mx-auto md:max-w-none">
          {services.map((service) => (
            <div key={service.title} className="service-card text-center">
              <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};