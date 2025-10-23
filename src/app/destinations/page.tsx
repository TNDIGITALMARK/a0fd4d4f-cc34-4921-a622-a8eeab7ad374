'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Smoky Mountains',
    state: 'Tennessee',
    description: 'Experience majestic mountain views, hiking trails, and cozy cabins perfect for family adventures.',
    image: '/generated/property-mountain-escape.jpg',
    properties: 156,
    startingPrice: '$89',
    highlights: ['Hiking', 'Wildlife', 'Scenic Views', 'National Park'],
    season: 'Year-round',
  },
  {
    id: 2,
    name: 'Virginia Beach',
    state: 'Virginia',
    description: 'Miles of pristine beaches, oceanfront resorts, and endless family-friendly activities.',
    image: '/generated/property-beach-paradise.jpg',
    properties: 203,
    startingPrice: '$120',
    highlights: ['Beach', 'Swimming', 'Boardwalk', 'Water Sports'],
    season: 'May - September',
  },
  {
    id: 3,
    name: 'Charleston',
    state: 'South Carolina',
    description: 'Historic charm meets Southern hospitality with cobblestone streets and waterfront dining.',
    image: '/generated/property-city-explorer.jpg',
    properties: 134,
    startingPrice: '$95',
    highlights: ['History', 'Culture', 'Dining', 'Architecture'],
    season: 'Year-round',
  },
  {
    id: 4,
    name: 'Lake Tahoe',
    state: 'California',
    description: 'Crystal-clear alpine lake surrounded by stunning mountains, perfect for outdoor enthusiasts.',
    image: '/generated/property-mountain-escape.jpg',
    properties: 187,
    startingPrice: '$135',
    highlights: ['Skiing', 'Boating', 'Hiking', 'Lake Views'],
    season: 'Year-round',
  },
  {
    id: 5,
    name: 'Sedona',
    state: 'Arizona',
    description: 'Red rock formations, spiritual energy, and breathtaking desert landscapes.',
    image: '/generated/property-city-explorer.jpg',
    properties: 98,
    startingPrice: '$115',
    highlights: ['Hiking', 'Red Rocks', 'Art Galleries', 'Vortexes'],
    season: 'Year-round',
  },
  {
    id: 6,
    name: 'Cape Cod',
    state: 'Massachusetts',
    description: 'Charming coastal towns, lighthouses, and classic New England beach experiences.',
    image: '/generated/property-beach-paradise.jpg',
    properties: 167,
    startingPrice: '$105',
    highlights: ['Beaches', 'Lighthouses', 'Seafood', 'Biking'],
    season: 'May - October',
  },
  {
    id: 7,
    name: 'Yellowstone',
    state: 'Wyoming',
    description: 'America\'s first national park with geysers, wildlife, and natural wonders.',
    image: '/generated/property-mountain-escape.jpg',
    properties: 78,
    startingPrice: '$125',
    highlights: ['Geysers', 'Wildlife', 'Hot Springs', 'Hiking'],
    season: 'May - September',
  },
  {
    id: 8,
    name: 'Outer Banks',
    state: 'North Carolina',
    description: 'Barrier islands with pristine beaches, water sports, and coastal charm.',
    image: '/generated/property-beach-paradise.jpg',
    properties: 189,
    startingPrice: '$110',
    highlights: ['Beaches', 'Surfing', 'Fishing', 'History'],
    season: 'April - October',
  },
  {
    id: 9,
    name: 'Asheville',
    state: 'North Carolina',
    description: 'Mountain city with arts scene, craft breweries, and the Biltmore Estate.',
    image: '/generated/property-city-explorer.jpg',
    properties: 142,
    startingPrice: '$100',
    highlights: ['Arts', 'Mountains', 'Food Scene', 'Biltmore'],
    season: 'Year-round',
  },
];

const regions = [
  { name: 'All Regions', value: 'all' },
  { name: 'East Coast', value: 'east' },
  { name: 'West Coast', value: 'west' },
  { name: 'South', value: 'south' },
  { name: 'Mountain West', value: 'mountain' },
];

const activities = [
  'Beach',
  'Hiking',
  'Skiing',
  'Water Sports',
  'History',
  'Culture',
  'Wildlife',
  'National Parks',
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const toggleActivity = (activity: string) => {
    setSelectedActivities(prev =>
      prev.includes(activity)
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20 overflow-hidden">
        {/* Faded Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-family-vacation.jpg"
            alt="Family Vacation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <h1 className="text-white mb-6">Explore Our Destinations</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Discover family-friendly destinations across the United States. From beaches to mountains,
            historic cities to natural wonders—find your perfect getaway.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="flex gap-3">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white/95 border-0 h-12 text-foreground placeholder:text-muted-foreground"
              />
              <Button
                className="bg-accent text-white hover:bg-accent/90 font-medium px-8"
                style={{ borderRadius: '6px' }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/30 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Region Filter */}
            <div className="flex items-center gap-3">
              <span className="font-medium text-sm">Region:</span>
              <div className="flex gap-2">
                {regions.map((region) => (
                  <button
                    key={region.value}
                    onClick={() => setSelectedRegion(region.value)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedRegion === region.value
                        ? 'bg-primary text-white'
                        : 'bg-white text-foreground hover:bg-muted'
                    }`}
                    style={{ borderRadius: '6px' }}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Filter */}
          <div className="mt-6">
            <span className="font-medium text-sm mb-3 block">Activities:</span>
            <div className="flex flex-wrap gap-2">
              {activities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => toggleActivity(activity)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    selectedActivities.includes(activity)
                      ? 'bg-accent text-white'
                      : 'bg-white text-foreground hover:bg-muted border border-border'
                  }`}
                  style={{ borderRadius: '6px' }}
                >
                  {activity}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50,000+</div>
              <div className="text-sm text-muted-foreground">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">$89</div>
              <div className="text-sm text-muted-foreground">Starting Price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden shadow-card hover:shadow-lg transition-all hover:-translate-y-2 group cursor-pointer"
                style={{ borderRadius: '8px' }}
              >
                <Link href={`/destinations/${destination.id}`}>
                  {/* Destination Image */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-white/90 text-sm">{destination.state}</p>
                    </div>

                    {/* Season Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 text-foreground px-3 py-1 rounded-md text-xs font-medium">
                      {destination.season}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span>{destination.properties} properties</span>
                      </div>
                      <div className="text-primary font-bold text-lg">
                        {destination.startingPrice}
                        <span className="text-sm font-normal text-muted-foreground">/night</span>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium group-hover:bg-accent group-hover:text-white transition-colors"
                      style={{ borderRadius: '6px' }}
                    >
                      Explore {destination.name}
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Activities Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Plan by Activity</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find destinations perfect for your favorite activities and interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Beach Vacations', 'Mountain Getaways', 'City Escapes', 'National Parks', 'Lake Resorts', 'Desert Adventures', 'Coastal Towns', 'Historic Sites'].map((activity, idx) => (
              <Card
                key={idx}
                className="p-6 text-center shadow-card hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group"
                style={{ borderRadius: '8px' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {activity}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Can't Find Your Destination?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're constantly adding new destinations. Tell us where you'd like to go,
            and we'll notify you when it becomes available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/95 border-0 h-12 text-foreground"
            />
            <Button
              className="bg-accent text-white hover:bg-accent/90 font-medium px-8"
              style={{ borderRadius: '6px' }}
            >
              Notify Me
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
