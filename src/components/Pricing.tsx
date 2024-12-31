import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Basic Translation",
      price: "0.12",
      unit: "per word",
      features: [
        "Document Translation",
        "Basic Quality Check",
        "Standard Delivery",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "0.15",
      unit: "per word",
      features: [
        "Document Translation",
        "Expert Review",
        "Fast Delivery",
        "Priority Support",
        "Terminology Management",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      unit: "contact us",
      features: [
        "All Professional Features",
        "Dedicated Project Manager",
        "24/7 Support",
        "Custom Solutions",
        "Volume Discounts",
      ],
    },
  ];

  return (
    <section className="py-20 px-4" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`service-card flex flex-col ${
                plan.popular ? "border-primary" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-bl-xl rounded-tr-xl">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="mt-auto"
                onClick={() => window.location.href = "#quote"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};