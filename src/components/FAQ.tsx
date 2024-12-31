import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What languages do you support?",
      answer: "We provide translation and interpreting services in English, French, Spanish, and German. Our team of expert linguists ensures high-quality translations across these language pairs.",
    },
    {
      question: "How do you ensure quality in translations?",
      answer: "Our quality assurance process includes translation by expert linguists, review by senior translators, and final quality checks. We also use specialized terminology management tools to ensure consistency.",
    },
    {
      question: "What are your typical turnaround times?",
      answer: "Turnaround times vary depending on the project scope, language pair, and service level selected. Standard translations typically take 2-3 business days for every 1000 words. Rush services are available upon request.",
    },
    {
      question: "Do you provide certified translations?",
      answer: "Yes, we provide certified translations for official documents. Our certified translations are accepted by government agencies, academic institutions, and legal authorities.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including legal, medical, technical, marketing, academic, healthcare, and IT sectors. Our translators are specialized in various fields to ensure accurate terminology usage and domain-specific knowledge.",
    },
  ];

  return (
    <section className="py-20 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};