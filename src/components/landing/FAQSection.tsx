import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can attend this event?",
    answer:
      "This event is designed for Grade 12 students, recent pass-outs, and anyone interested in studying abroad in China. Parents are also warmly welcome to accompany their children and learn about opportunities together.",
  },
  {
    question: "Is the event free to attend?",
    answer:
      "Yes! The event is completely free to attend. However, registration is required to secure your spot as we have limited capacity.",
  },
  {
    question: "What is the 5-minute scholarship assessment?",
    answer:
      "Our expert counselors will evaluate your profile, academic background, and preferences in just 5 minutes to identify scholarship opportunities that match your profile. You'll receive personalized recommendations on the spot.",
  },
  // {
  //   question: "Can parents attend with their children?",
  //   answer:
  //     "Absolutely! We encourage parents to attend. There will be dedicated sessions and information designed specifically for parents to understand the study abroad process, safety measures, and support systems available for students in China.",
  // },
  // {
  //   question: "How does the drone giveaway work?",
  //   answer:
  //     "To participate: 1) Follow WiseAdmit on Instagram, 2) Share the event post, 3) Comment on our giveaway post. The winner will be announced live at the event on February 14. You must be present to win!",
  // },
  {
    question: "What should I bring to the event?",
    answer:
      "Bring your academic documents (mark sheets, certificates) for the scholarship assessment. Also bring your enthusiasm and curiosity!",
  },
  // {
  //   question: "Will there be food available?",
  //   answer: "Yes, refreshments will be provided during the event. You'll also get to experience some traditional Chinese snacks as part of our cultural showcase!",
  // },
  // {
  //   question: "How do I become an Event Ambassador?",
  //   answer: "Event Ambassadors help spread the word about WiseAdmit events and receive exclusive benefits. Click 'Become an Event Ambassador' to apply. Ambassadors get priority access, special recognition, and additional giveaway entries.",
  // },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm font-semibold mb-3 sm:mb-4 opacity-0-initial animate-fade-up">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground opacity-0-initial animate-fade-up delay-100">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl sm:rounded-2xl border border-border/50 px-4 sm:px-5 md:px-6 data-[state=open]:shadow-card transition-shadow duration-300 opacity-0-initial animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 50}ms` }}
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-4 sm:py-5 md:py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 sm:pb-5 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <p className="text-center mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base text-muted-foreground opacity-0-initial animate-fade-up delay-500">
          Still have questions?{" "}
          <a
            target="_blank"
            href="https://www.wiseadmit.io/help-center"
            className="text-primary font-medium hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
