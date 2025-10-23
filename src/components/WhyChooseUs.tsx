'use client';

import { Button } from '@/components/ui/button';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    ),
    title: 'Trusted Bookings',
    description: 'Verified properties',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    ),
    title: 'Affordable Prices',
    description: 'Best value for families',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
    title: 'Flexible Planning',
    description: 'Book with confidence',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20"
      style={{
        background: 'hsl(214, 89%, 88%)',
      }}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-foreground mb-4">Why Choose Us?</h2>
          <p className="text-xl text-foreground mb-8">
            Ready to Explore?
            <br />
            Find Your Vacation
          </p>

          {/* CTA Button - Accent orange/yellow from design */}
          <Button
            className="mb-12 text-white font-medium text-lg"
            style={{
              background: 'hsl(38, 92%, 50%)',
              borderRadius: '6px',
              padding: '14px 32px',
            }}
          >
            Find Family Vacation
          </Button>

          {/* Feature Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-primary mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
