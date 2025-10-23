'use client';

const steps = [
  {
    number: '1',
    title: 'Search & Discover',
    description: 'Browse thousands of verified vacation properties across 500+ destinations. Use our smart filters to find the perfect match for your family.',
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Compare & Choose',
    description: 'Read honest reviews from real families, compare prices, and check availability. Every property is verified and transparent - no hidden fees.',
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Book Securely',
    description: 'Complete your booking with our secure payment system. Instant confirmation and 24/7 customer support ensure peace of mind.',
    icon: (
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    ),
  },
  {
    number: '4',
    title: 'Enjoy Your Vacation',
    description: 'Pack your bags and create unforgettable memories! Our support team is always available if you need anything during your stay.',
    icon: (
      <svg width="48" height="48" fill="currentColor" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planning your dream family vacation is simple with BudgetStay. Follow these four easy steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (visible on large screens) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ top: '3rem' }}></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Step Number Badge */}
              <div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl z-10"
                style={{
                  background: 'hsl(207, 61%, 44%)',
                }}
              >
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center text-primary mb-6 mt-8 border-4 border-white shadow-md">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-16">
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium text-lg rounded-md transition-all hover:scale-105"
            style={{
              background: 'hsl(38, 92%, 50%)',
              borderRadius: '6px',
            }}
          >
            Start Planning Your Vacation
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
