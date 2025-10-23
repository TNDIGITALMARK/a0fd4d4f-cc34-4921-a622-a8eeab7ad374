'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: '/generated/property-mountain-escape.jpg',
    bio: 'Passionate about making travel accessible to every family.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: '/generated/property-city-explorer.jpg',
    bio: 'Expert in hospitality with 15 years of experience.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Experience Lead',
    image: '/generated/property-beach-paradise.jpg',
    bio: 'Dedicated to ensuring every family has a perfect stay.',
  },
];

const values = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      </svg>
    ),
    title: 'Trust & Safety',
    description: 'Every property is verified and meets our high standards for cleanliness and security.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Best Value',
    description: 'We negotiate the best rates so families can enjoy quality accommodations on any budget.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Family First',
    description: 'Our platform is designed with families in mind, from kid-friendly amenities to flexible policies.',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Curated Selection',
    description: 'Hand-picked properties that offer the perfect blend of comfort, location, and value.',
  },
];

const stats = [
  { value: '50,000+', label: 'Happy Families' },
  { value: '2,500+', label: 'Properties' },
  { value: '150+', label: 'Destinations' },
  { value: '4.8/5', label: 'Average Rating' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container-custom">
          <h1 className="text-white mb-6">About Family Travels</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            We're on a mission to make family travel accessible, affordable, and unforgettable.
            Every family deserves to create lasting memories together.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Family Travels was born from a simple idea: every family should be able to afford
                  quality vacations without breaking the bank. Founded in 2018, we started with a
                  handful of properties and a big dream.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 families annually, connecting them with
                  carefully vetted accommodations in destinations across the United States. Our team
                  personally reviews every property to ensure it meets our standards for quality,
                  safety, and family-friendliness.
                </p>
                <p>
                  We believe travel is more than just a vacation—it's about creating connections,
                  experiencing new places, and building memories that last a lifetime. That's why
                  we work tirelessly to find the best deals and negotiate exclusive rates with property
                  owners who share our values.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/generated/property-mountain-escape.jpg"
                alt="Family Travel Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do, from selecting properties to
              supporting our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="p-6 text-center shadow-card hover:shadow-md transition-shadow"
                style={{ borderRadius: '8px' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're a passionate group of travelers, parents, and hospitality experts
              dedicated to making your family vacation dreams come true.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <Card
                key={idx}
                className="overflow-hidden shadow-card hover:shadow-md transition-shadow text-center"
                style={{ borderRadius: '8px' }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card
              className="p-12 text-center shadow-lg"
              style={{ borderRadius: '8px' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-6">
                <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower families to explore the world together by providing access to
                affordable, high-quality accommodations. We believe that financial constraints
                shouldn't prevent families from experiencing the joy of travel and creating
                lifelong memories. Through our platform, we're making family travel accessible
                to everyone, one trip at a time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Start Your Family Adventure?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust us to make their travel dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-accent text-white hover:bg-accent/90 font-medium px-8 py-3 rounded-md transition-colors"
              style={{ borderRadius: '6px' }}
            >
              Browse Destinations
            </button>
            <button
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-3 rounded-md transition-colors"
              style={{ borderRadius: '6px' }}
            >
              View Deals
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
