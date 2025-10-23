'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const properties = [
  {
    id: 1,
    name: 'Mountain Escape',
    location: 'Smoky Mountains, TN',
    price: '$89/night',
    image: '/generated/property-mountain-escape.jpg',
    features: ['Budget-Friendly', 'Pet-Friendly'],
  },
  {
    id: 2,
    name: 'City Explorer',
    location: 'Historic District',
    price: '$95/night',
    image: '/generated/property-city-explorer.jpg',
    features: ['Family-Friendly', 'City Views'],
  },
  {
    id: 3,
    name: 'Beach Paradise',
    location: 'Virginia Beach, VA',
    price: '$120/night',
    image: '/generated/property-beach-paradise.jpg',
    features: ['Pool Access', 'Beach Front'],
  },
];

export default function FeaturedDeals() {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="text-foreground mb-8">Featured Family Deals</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Filter</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="budget" />
                  <label
                    htmlFor="budget"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Budget-Friendly
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="foreign" />
                  <label
                    htmlFor="foreign"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Foreign-Friendly
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Property Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Link key={property.id} href={`/property/${property.id}`}>
                  <Card
                    className="overflow-hidden shadow-card hover:shadow-md transition-shadow cursor-pointer"
                    style={{ borderRadius: '8px' }}
                  >
                    {/* Property Image */}
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover"
                        style={{ borderRadius: '8px 8px 0 0' }}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{property.location}</span>
                      </div>

                      {/* Price */}
                      <div className="text-primary font-semibold text-lg mb-3">
                        {property.price}
                      </div>

                      {/* Features */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                          </svg>
                          <span>Verified</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          <span>No Fees</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
