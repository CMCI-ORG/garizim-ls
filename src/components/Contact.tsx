import { Button } from "./ui/button";
import { Phone, Mail, MapPin, MessageSquare, Linkedin, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone & WhatsApp</h3>
                <p className="text-muted-foreground">+237 693101312</p>
                <p className="text-muted-foreground">+237 676530199</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">ngo.juliette@garizimls.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Yaounde, Cameroon</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/garizim-language-solutions" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/garizimls" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/garizimls" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              Your satisfaction is our priority. Contact us for a free consultation.
            </p>
            <Button className="w-full gap-2">
              <MessageSquare className="w-4 h-4" /> Start Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};