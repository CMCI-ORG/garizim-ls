import { Button } from "./ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Phone & WhatsApp</h3>
                <p className="text-muted-foreground text-sm">+237 693101312</p>
                <p className="text-muted-foreground text-sm">+237 676530199</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-muted-foreground text-sm">ngo.juliette@garizimls.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-muted-foreground text-sm">Yaounde, Cameroon</p>
              </div>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <p className="text-muted-foreground text-sm mb-4">
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