import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Global Tech Solutions",
      content: "Exceptional translation services! The team at GLS delivered our marketing materials in multiple languages with perfect accuracy and cultural sensitivity.",
      rating: 5,
    },
    {
      name: "Jean-Pierre Dubois",
      role: "Conference Organizer",
      company: "International Summit Group",
      content: "Their interpreting services were crucial to the success of our international conference. Professional, reliable, and highly skilled.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Content Manager",
      company: "Digital Media Corp",
      content: "Fast, accurate, and professional. GLS has been instrumental in helping us reach our global audience.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="service-card flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};