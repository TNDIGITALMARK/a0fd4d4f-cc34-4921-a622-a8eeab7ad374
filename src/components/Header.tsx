'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/generated/budgetstay-logo.png"
              alt="BudgetStay"
              width={50}
              height={15}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/destinations"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/deals"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Deals
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Login Button */}
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md px-6"
            style={{ borderRadius: '6px', padding: '12px 24px' }}
          >
            Log In
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
