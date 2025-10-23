'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const properties: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Mountain Escape',
    location: 'Smoky Mountains, TN',
    price: 89,
    rating: 4.8,
    reviews: 234,
    image: '/generated/property-mountain-escape.jpg',
    description:
      'Experience the beauty of the Smoky Mountains in this family-friendly cabin. Perfect for nature lovers, this property offers hiking trails, game rooms, and stunning mountain views. Kitchen facilities help you save on dining costs.',
    amenities: [
      'Full Kitchen',
      'Game Room',
      'Hiking Trails',
      'Pet-Friendly',
      'Free Parking',
      'WiFi',
    ],
    totalCost: 623,
    breakdown: {
      accommodation: 445,
      cleaning: 75,
      serviceFee: 53,
      taxes: 50,
    },
    savings: 280,
    guestReview: {
      name: 'Sarah M.',
      text: 'Kids loved the bunk bed room and we saved money cooking breakfast. The trails were perfect for our family hikes!',
      rating: 5,
    },
  },
  '2': {
    id: 2,
    name: 'City Explorer',
    location: 'Historic District',
    price: 95,
    rating: 4.6,
    reviews: 187,
    image: '/generated/property-city-explorer.jpg',
    description:
      'Immerse your family in history with this centrally-located property in the historic district. Walking distance to free museums, cultural sites, and family-friendly restaurants.',
    amenities: [
      'Central Location',
      'Kitchen Access',
      'Near Public Transit',
      'Family Rooms',
      'Free WiFi',
      'Air Conditioning',
    ],
    totalCost: 665,
    breakdown: {
      accommodation: 475,
      cleaning: 80,
      serviceFee: 60,
      taxes: 50,
    },
    savings: 220,
    guestReview: {
      name: 'Michael T.',
      text: 'Perfect location for exploring the city. Kids loved being able to walk everywhere. Great value for a family vacation!',
      rating: 5,
    },
  },
  '3': {
    id: 3,
    name: 'Beach Paradise',
    location: 'Virginia Beach, VA',
    price: 120,
    rating: 4.9,
    reviews: 312,
    image: '/generated/property-beach-paradise.jpg',
    description:
      'Beachfront paradise with pool access and free breakfast. This property offers the perfect blend of relaxation and family fun, with beach toys provided and lifeguard-supervised swimming areas.',
    amenities: [
      'Pool Access',
      'Beach Front',
      'Free Breakfast',
      'Beach Toys Included',
      'Laundry Facilities',
      'BBQ Area',
    ],
    totalCost: 840,
    breakdown: {
      accommodation: 600,
      cleaning: 100,
      serviceFee: 80,
      taxes: 60,
    },
    savings: 340,
    guestReview: {
      name: 'Jennifer L.',
      text: 'The free breakfast saved us so much money! Pool and beach access meant the kids were entertained all week. Highly recommend!',
      rating: 5,
    },
  },
};

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = properties[id] || properties['1'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <span>/</span>
                <span className="text-foreground">{property.name}</span>
              </div>

              <h1 className="mb-2">{property.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted-foreground"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-muted-foreground">{property.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-accent"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="font-medium">{property.rating}</span>
                  <span className="text-muted-foreground">
                    ({property.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">{property.description}</p>

              {/* Amenities */}
              <Card className="p-6 mb-8">
                <h3 className="mb-4">Family-Friendly Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-primary"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Guest Review */}
              <Card className="p-6 mb-8" style={{ background: 'hsl(214, 89%, 95%)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{property.guestReview.name}</span>
                      <div className="flex">
                        {[...Array(property.guestReview.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="14"
                            height="14"
                            fill="currentColor"
                            className="text-accent"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        Verified Family Traveler
                      </span>
                    </div>
                    <p className="text-muted-foreground italic">
                      &ldquo;{property.guestReview.text}&rdquo;
                    </p>
                  </div>
                </div>
              </Card>

              {/* Money-Saving Tips */}
              <Card className="p-6">
                <h3 className="mb-4">Money-Saving Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="text-accent flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-sm">
                      Use the full kitchen to prepare breakfast and save $30-50/day on dining
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="text-accent flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-sm">
                      Book mid-week arrivals for better rates (average 20% savings)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="text-accent flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-sm">
                      Free parking saves $15-25/day compared to hotels in the area
                    </span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-1">
                    ${property.price}
                    <span className="text-base font-normal text-muted-foreground">
                      /night
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total: ${property.totalCost} for 7 nights
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3 text-sm">Cost Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accommodation (7 nights)</span>
                      <span>${property.breakdown.accommodation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cleaning fee</span>
                      <span>${property.breakdown.cleaning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span>${property.breakdown.serviceFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Taxes</span>
                      <span>${property.breakdown.taxes}</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${property.totalCost}</span>
                    </div>
                  </div>
                </div>

                {/* Savings Counter */}
                <div
                  className="mb-6 p-4 rounded-lg text-center"
                  style={{ background: 'hsl(38, 92%, 95%)' }}
                >
                  <div className="text-sm font-medium mb-1">You Save</div>
                  <div className="text-2xl font-bold text-accent">
                    ${property.savings}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    vs. booking directly
                  </div>
                </div>

                <Button
                  className="w-full mb-3"
                  style={{
                    background: 'hsl(38, 92%, 50%)',
                    color: 'white',
                    borderRadius: '6px',
                    padding: '12px',
                  }}
                >
                  Book Now
                </Button>
                <Button variant="outline" className="w-full">
                  Save for Later
                </Button>

                <div className="mt-4 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                  <span>No Hidden Fees Guarantee</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
