'use client';

import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    rating: 5,
    text: 'BudgetStay made planning our family vacation so easy! We found an amazing beachfront property at a price we could actually afford. The kids had the time of their lives!',
    avatar: '👩‍🦰',
  },
  {
    name: 'Michael Chen',
    location: 'Seattle, WA',
    rating: 5,
    text: 'I was skeptical at first, but the quality of properties exceeded my expectations. Great customer service and transparent pricing. We\'ll definitely be using BudgetStay again.',
    avatar: '👨',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Miami, FL',
    rating: 5,
    text: 'As a single mom, finding affordable family vacations was always a challenge. BudgetStay changed that! The verified properties give me peace of mind, and the prices are unbeatable.',
    avatar: '👩',
  },
  {
    name: 'David & Lisa Thompson',
    location: 'Denver, CO',
    rating: 5,
    text: 'We\'ve booked three vacations through BudgetStay this year alone! The mountain cabin was perfect for our family of five, and we saved over $1,000 compared to hotels.',
    avatar: '👨‍👩‍👧‍👦',
  },
  {
    name: 'Jennifer Martinez',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'The search filters helped us find exactly what we needed - pet-friendly, budget-friendly, and close to attractions. The whole booking process was smooth and hassle-free.',
    avatar: '👩‍🦱',
  },
  {
    name: 'Robert Williams',
    location: 'Chicago, IL',
    rating: 5,
    text: 'Great platform for family travel! We appreciated the detailed property descriptions and honest reviews. Everything was exactly as advertised. Highly recommend!',
    avatar: '👨‍🦲',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20"
      style={{
        background: 'hsl(214, 89%, 88%)',
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">What Families Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real families who have experienced unforgettable vacations through BudgetStay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-white shadow-card hover:shadow-md transition-shadow"
              style={{ borderRadius: '8px' }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    fill="hsl(38, 92%, 50%)"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
