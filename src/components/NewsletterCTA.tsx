'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(207, 61%, 44%) 0%, hsl(207, 61%, 35%) 100%)',
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <svg
              width="64"
              height="64"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="mx-auto mb-4"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>

          <h2 className="text-white mb-4">Get Exclusive Travel Deals</h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Join over 50,000 subscribers and receive weekly deals, travel tips, and exclusive offers directly to your inbox.
            Save up to 40% on your next family vacation!
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border-0 h-12 px-4 text-base"
                style={{ borderRadius: '6px' }}
              />
              <Button
                type="submit"
                className="h-12 px-8 text-white font-medium whitespace-nowrap"
                style={{
                  background: 'hsl(38, 92%, 50%)',
                  borderRadius: '6px',
                }}
              >
                Subscribe Now
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </form>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="mb-3">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className="text-white font-medium">Weekly Destination Highlights</div>
            </div>
            <div className="flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="mb-3">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <div className="text-white font-medium">Flash Deal Alerts</div>
            </div>
            <div className="flex flex-col items-center">
              <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="mb-3">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <div className="text-white font-medium">Exclusive Member Deals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
