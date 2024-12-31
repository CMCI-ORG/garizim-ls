import { Award, Users, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-muted" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About GLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">15+ Years Experience</h3>
            <p className="text-muted-foreground">
              Led by senior translators and interpreters with extensive expertise
            </p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-muted-foreground">
              Network of renowned consultant translators and interpreters
            </p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-muted-foreground">
              Serving clients both nationally and internationally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};