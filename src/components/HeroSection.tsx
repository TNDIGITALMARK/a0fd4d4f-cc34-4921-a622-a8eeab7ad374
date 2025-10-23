'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/generated/hero-family-vacation.jpg"
          alt="Family enjoying vacation at the beach"
          fill
          className="object-cover"
          priority
        />
        {/* Brown Overlay - Exact from design reference */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(139, 69, 19, 0.5), rgba(139, 69, 19, 0.6))',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Hero Heading - Exact typography from design */}
          <h1 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ lineHeight: '1.1' }}>
            Your Family Adventure
            <br />
            Starts Here
          </h1>
          <p className="text-white text-lg md:text-xl mb-2 font-medium">
            Discover Affordable Family Vacations Nationwide
          </p>
          <p className="text-white/90 text-sm md:text-base lg:text-lg mb-8 font-normal">
            Over 10,000 verified properties • Best price guarantee • Book with confidence
          </p>

          {/* Search Bar - White background with shadow */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Location Search */}
              <div className="flex-1 flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground flex-shrink-0"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <Input
                  type="text"
                  placeholder="Where?"
                  className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Check-in Date */}
              <div className="flex-1 flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground flex-shrink-0"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <Input
                  type="text"
                  placeholder="Check-In/Out"
                  className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Guests */}
              <div className="flex-1 flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-white">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground flex-shrink-0"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <Input
                  type="text"
                  placeholder="Guests"
                  className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Search Button - Primary blue from design */}
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                style={{ borderRadius: '6px', padding: '12px 32px', minWidth: '120px' }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
