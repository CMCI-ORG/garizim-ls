import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export const Quote = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    const mailtoLink = `mailto:contact@garizim.com?subject=Quote Request from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0AProject Details:%0D%0A${message}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Quote Request Ready",
      description: "Opening your email client to send the request.",
    });
    
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <section className="py-20 px-4 bg-muted" id="quote">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input id="email" name="email" type="email" required placeholder="Your email" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="block mb-2">Service Required</label>
            <select
              id="service"
              name="service"
              required
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
            >
              <option value="">Select a service</option>
              <option value="translation">Translation</option>
              <option value="interpreting">Interpreting</option>
              <option value="transcription">Transcription</option>
              <option value="audiovisual">Audiovisual Translation</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Project Details</label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Please describe your project and requirements"
              className="min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Quote Request"}
          </Button>
        </form>
      </div>
    </section>
  );
};