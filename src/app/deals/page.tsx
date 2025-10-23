'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const deals = [
  {
    id: 1,
    name: 'Mountain Family Retreat',
    location: 'Smoky Mountains, TN',
    originalPrice: '$150',
    salePrice: '$89',
    discount: '40% OFF',
    image: '/generated/property-mountain-escape.jpg',
    features: ['Budget-Friendly', 'Pet-Friendly', 'Kitchen Included'],
    rating: 4.8,
    reviews: 127,
    duration: '3 nights minimum',
  },
  {
    id: 2,
    name: 'Historic City Stay',
    location: 'Charleston, SC',
    originalPrice: '$140',
    salePrice: '$95',
    discount: '32% OFF',
    image: '/generated/property-city-explorer.jpg',
    features: ['Family-Friendly', 'City Views', 'Free Parking'],
    rating: 4.9,
    reviews: 203,
    duration: '2 nights minimum',
  },
  {
    id: 3,
    name: 'Beachfront Paradise',
    location: 'Virginia Beach, VA',
    originalPrice: '$180',
    salePrice: '$120',
    discount: '33% OFF',
    image: '/generated/property-beach-paradise.jpg',
    features: ['Pool Access', 'Beach Front', 'Ocean Views'],
    rating: 4.7,
    reviews: 156,
    duration: '3 nights minimum',
  },
  {
    id: 4,
    name: 'Lake House Getaway',
    location: 'Lake Tahoe, CA',
    originalPrice: '$200',
    salePrice: '$135',
    discount: '33% OFF',
    image: '/generated/property-mountain-escape.jpg',
    features: ['Lakefront', 'Boat Access', 'Fire Pit'],
    rating: 4.8,
    reviews: 89,
    duration: '2 nights minimum',
  },
  {
    id: 5,
    name: 'Desert Oasis',
    location: 'Sedona, AZ',
    originalPrice: '$175',
    salePrice: '$115',
    discount: '34% OFF',
    image: '/generated/property-city-explorer.jpg',
    features: ['Scenic Views', 'Hot Tub', 'Hiking Trails'],
    rating: 4.9,
    reviews: 178,
    duration: '3 nights minimum',
  },
  {
    id: 6,
    name: 'Coastal Cottage',
    location: 'Cape Cod, MA',
    originalPrice: '$160',
    salePrice: '$105',
    discount: '34% OFF',
    image: '/generated/property-beach-paradise.jpg',
    features: ['Beach Access', 'Bike Rentals', 'BBQ Area'],
    rating: 4.6,
    reviews: 134,
    duration: '3 nights minimum',
  },
];

const filterOptions = [
  { id: 'budget', label: 'Budget-Friendly' },
  { id: 'pet', label: 'Pet-Friendly' },
  { id: 'family', label: 'Family-Friendly' },
  { id: 'pool', label: 'Pool Access' },
  { id: 'beach', label: 'Beach/Lakefront' },
  { id: 'kitchen', label: 'Kitchen Included' },
];

export default function DealsPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container-custom">
          <h1 className="text-white mb-4">Exclusive Travel Deals</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Save up to 40% on family-friendly accommodations. Limited time offers on premium destinations across the United States.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Filter Deals</h3>
                <div className="space-y-4">
                  {filterOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={selectedFilters.includes(option.id)}
                        onCheckedChange={() => handleFilterChange(option.id)}
                      />
                      <label
                        htmlFor={option.id}
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-sm mb-3">Discount Range</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-30" />
                      <label htmlFor="discount-30" className="text-sm cursor-pointer">
                        30% or more
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="discount-40" />
                      <label htmlFor="discount-40" className="text-sm cursor-pointer">
                        40% or more
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={() => setSelectedFilters([])}
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Deals Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {deals.length} exclusive deals
                </p>
                <select className="border border-input rounded-md px-3 py-2 text-sm bg-background">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Discount: Highest First</option>
                  <option>Rating: Highest First</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {deals.map((deal) => (
                  <Link key={deal.id} href={`/property/${deal.id}`}>
                    <Card
                      className="overflow-hidden shadow-card hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
                      style={{ borderRadius: '8px' }}
                    >
                      {/* Deal Image */}
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={deal.image}
                          alt={deal.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ borderRadius: '8px 8px 0 0' }}
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-md font-semibold text-sm">
                          {deal.discount}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {deal.name}
                        </h3>

                        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
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
                          <span>{deal.location}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <svg width="16" height="16" fill="#F59E0B" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="font-semibold text-foreground">{deal.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({deal.reviews} reviews)
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-muted-foreground line-through text-sm">
                            {deal.originalPrice}
                          </span>
                          <span className="text-primary font-bold text-2xl">
                            {deal.salePrice}
                          </span>
                          <span className="text-sm text-muted-foreground">/night</span>
                        </div>

                        {/* Duration */}
                        <p className="text-sm text-muted-foreground mb-3 italic">
                          {deal.duration}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {deal.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <Button
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                          style={{ borderRadius: '6px' }}
                        >
                          View Deal
                        </Button>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
