'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does BudgetStay work?',
    answer: 'BudgetStay connects families with verified, affordable vacation properties. Simply search for your destination, browse available properties, and book directly through our platform. We handle the payment securely and provide 24/7 customer support.',
  },
  {
    question: 'Are the properties verified and safe?',
    answer: 'Yes! Every property on BudgetStay goes through a rigorous verification process. We inspect properties, verify ownership, and collect reviews from real guests. Your family\'s safety and comfort are our top priorities.',
  },
  {
    question: 'What if I need to cancel my booking?',
    answer: 'We offer flexible cancellation policies depending on the property. Most bookings can be cancelled up to 7 days before check-in for a full refund. Check the specific cancellation policy for each property before booking.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees! The price you see is the price you pay. We believe in transparent pricing, so all taxes and service fees are clearly displayed before you complete your booking.',
  },
  {
    question: 'Can I bring my pet?',
    answer: 'Many of our properties are pet-friendly! Use the "Pet-Friendly" filter when searching to find accommodations that welcome your furry family members. Pet policies and any associated fees are clearly stated in each property listing.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All payments are processed securely through our encrypted payment system.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'Our customer support team is available 24/7! You can reach us via phone, email, or live chat. Contact information is available on every page, and we typically respond within minutes.',
  },
  {
    question: 'Do you offer deals for longer stays?',
    answer: 'Yes! Many property owners offer discounts for weekly or monthly stays. Look for the "Long Stay Discount" badge on property listings, and you\'ll see the reduced rates automatically applied when you select longer dates.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers. Find everything you need to know about booking with BudgetStay.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg shadow-sm overflow-hidden transition-all"
                style={{ borderRadius: '8px' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/10 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-8">{faq.question}</span>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`flex-shrink-0 text-primary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-secondary/20 rounded-lg" style={{ borderRadius: '8px' }}>
            <h3 className="text-xl font-semibold text-foreground mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our friendly support team is here to help 24/7
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              style={{ borderRadius: '6px' }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
