'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    description: 'Our team typically responds within 24 hours',
    detail: 'support@familytravels.com',
    link: 'mailto:support@familytravels.com',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: 'Call Us',
    description: 'Monday to Friday, 8am to 8pm EST',
    detail: '1-800-FAMILY-TRAVEL',
    link: 'tel:1-800-326-4598',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    detail: 'Available 24/7',
    link: '#',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Visit Us',
    description: 'Stop by our office for in-person assistance',
    detail: '123 Travel Lane, Boston, MA 02110',
    link: '#',
  },
];

const faqs = [
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible cancellation up to 48 hours before check-in for most properties. Full refunds are provided for eligible cancellations.',
  },
  {
    question: 'Are pets allowed at your properties?',
    answer: 'Many of our properties are pet-friendly! Look for the "Pet-Friendly" badge on property listings, or filter your search to show only pet-friendly accommodations.',
  },
  {
    question: 'How do I know properties are verified?',
    answer: 'Every property on our platform undergoes a rigorous verification process, including photo verification, background checks, and regular quality inspections.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer: 'Yes! We partner with leading travel insurance providers to offer comprehensive coverage options. You can add insurance during the booking process.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have questions? We're here to help. Reach out to our friendly support team anytime.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, idx) => (
              <Card
                key={idx}
                className="p-6 text-center shadow-card hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
                style={{ borderRadius: '8px' }}
              >
                <a href={method.link} className="block">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {method.detail}
                  </p>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <Card className="p-8 shadow-card" style={{ borderRadius: '8px' }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject *
                      </Label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="property">Property Question</option>
                        <option value="payment">Payment Issue</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border border-input rounded-md px-3 py-2 text-sm bg-background resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3"
                      style={{ borderRadius: '6px' }}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* FAQs & Info */}
            <div>
              <h2 className="mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <Card
                    key={idx}
                    className="p-6 shadow-card"
                    style={{ borderRadius: '8px' }}
                  >
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>

              <Card
                className="p-6 shadow-card mt-6"
                style={{ borderRadius: '8px' }}
              >
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-center mb-8">Find Us</h2>
          <Card
            className="overflow-hidden shadow-lg"
            style={{ borderRadius: '8px' }}
          >
            <div className="aspect-[21/9] bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Interactive map would be embedded here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Travel Lane, Boston, MA 02110
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-accent/10">
        <div className="container-custom">
          <Card
            className="p-8 text-center max-w-3xl mx-auto shadow-card"
            style={{ borderRadius: '8px' }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full mb-4">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Need Urgent Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              If you're experiencing an emergency during your stay, please contact our 24/7 emergency support line immediately.
            </p>
            <Button
              className="bg-accent text-white hover:bg-accent/90 font-medium px-8"
              style={{ borderRadius: '6px' }}
            >
              Call Emergency Support: 1-800-911-HELP
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
