import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How realistic are the AI interviews?",
    answer:
      "The experience is designed to feel conversational and adaptive, with role-specific prompts and follow-up questions that mirror real interview dynamics.",
  },
  {
    question: "Can I practice for technical and non-technical roles?",
    answer:
      "Yes. You can choose from technical, HR, behavioral, coding, and system design scenarios depending on your target role.",
  },
  {
    question: "Do I get feedback after each interview?",
    answer:
      "Every session ends with actionable coaching, suggested improvement areas, and a performance summary you can review.",
  },
  {
    question: "Is this suitable for beginners?",
    answer:
      "Absolutely. The platform supports beginners and experienced professionals alike by adjusting the difficulty and feedback style.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Questions about preparing with AI?
          </h2>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-sm shadow-slate-200/70">
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index + 1}`} className="rounded-2xl border-b border-slate-200 last:border-b-0">
                <AccordionTrigger className="px-4 py-4 text-left text-base font-semibold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
