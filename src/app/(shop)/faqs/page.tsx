
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function FAQsPage() {
    const faqs = [
        {
          question: "What is the estimated delivery time?",
          answer: "Our estimated delivery time is typically 5-7 business days for domestic orders. International shipping times may vary. You will receive a tracking number via email once your order has shipped.",
        },
        {
          question: "What is your return policy?",
          answer: "We offer a 15-day return policy for unused and undamaged sarees with all original tags attached. Please visit our 'Shipping & Returns' page or contact customer service to initiate a return.",
        },
        {
          question: "How do I care for my saree?",
          answer: "Care instructions vary by fabric. Most silk sarees (like Banarasi, Kanjivaram, and Paithani) should be dry cleaned only. Cotton and linen sarees can typically be gently hand-washed in cold water. Always check the product description for specific care instructions.",
        },
        {
          question: "Are your sarees handwoven?",
          answer: "Many of our sarees, especially from the Banarasi, Kanjivaram, and regional craft categories, are handwoven by master artisans. We are committed to supporting traditional craftsmanship. Please check the product description to see details about each saree's make.",
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times will be calculated at checkout based on your location.",
        },
        {
          question: "Can I include a gift message with my order?",
          answer: "Absolutely! During the checkout process, you will have the option to add a personalized gift message to your order. We will ensure it is beautifully presented with your gift.",
        },
    ];

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Find quick answers to common questions.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
