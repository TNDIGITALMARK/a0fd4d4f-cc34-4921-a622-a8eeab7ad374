'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function BookingPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container-custom">
          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s
                        ? 'bg-primary text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > s ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium">Guest Info</span>
              <span className="text-sm font-medium">Trip Planning</span>
              <span className="text-sm font-medium">Payment</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {step === 1 && (
                  <Card className="p-6">
                    <h2 className="mb-6">Guest Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            First Name
                          </label>
                          <Input placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Last Name
                          </label>
                          <Input placeholder="Smith" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="john.smith@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input type="tel" placeholder="(555) 123-4567" />
                      </div>

                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-semibold mb-4">Family Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Number of Adults
                            </label>
                            <Input type="number" defaultValue="2" min="1" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Number of Children
                            </label>
                            <Input type="number" defaultValue="2" min="0" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="save-profile" />
                        <label
                          htmlFor="save-profile"
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          Save my information for faster booking next time
                        </label>
                      </div>
                    </div>
                  </Card>
                )}

                {step === 2 && (
                  <Card className="p-6">
                    <h2 className="mb-6">Plan Your Family Trip</h2>

                    {/* Free Activities */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">
                        Suggested Free Activities Nearby
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            name: 'Free Beach Access',
                            distance: '0.2 miles',
                            savings: '$50/day',
                          },
                          {
                            name: 'Public Hiking Trails',
                            distance: '1.5 miles',
                            savings: '$30/day',
                          },
                          {
                            name: 'Local Farmers Market',
                            distance: '0.8 miles',
                            savings: '$20/visit',
                          },
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-start justify-between p-4 bg-muted/30 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <Checkbox />
                              <div>
                                <div className="font-medium">{activity.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {activity.distance} away
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-accent">
                              Save {activity.savings}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Packing Checklist */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">
                        Family Packing Checklist
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          'Beach Toys',
                          'Sunscreen',
                          'First Aid Kit',
                          'Snacks',
                          'Reusable Water Bottles',
                          'Entertainment',
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox />
                            <label className="text-sm cursor-pointer">{item}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optional Add-ons */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Optional Add-ons</h3>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-start gap-3">
                            <Checkbox />
                            <div>
                              <div className="font-medium">Travel Insurance</div>
                              <div className="text-sm text-muted-foreground">
                                Cancel for any reason coverage
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold">$45</div>
                        </div>
                        <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                          <div className="flex items-start gap-3">
                            <Checkbox />
                            <div>
                              <div className="font-medium">Car Rental</div>
                              <div className="text-sm text-muted-foreground">
                                Group rate: 15% off standard price
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold">$280/week</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}

                {step === 3 && (
                  <Card className="p-6">
                    <h2 className="mb-6">Payment Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Card Number
                        </label>
                        <Input placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Expiry Date
                          </label>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">CVV</label>
                          <Input placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Billing Address
                        </label>
                        <Input placeholder="123 Main St" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <Input placeholder="City" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <Input placeholder="State" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ZIP Code
                          </label>
                          <Input placeholder="12345" />
                        </div>
                      </div>

                      <div className="flex items-start space-x-2 pt-4">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          I agree to the terms and conditions and cancellation policy
                        </label>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-6">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      onClick={() => setStep(step + 1)}
                      className="flex-1 bg-primary"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      className="flex-1"
                      style={{
                        background: 'hsl(38, 92%, 50%)',
                        color: 'white',
                      }}
                    >
                      Complete Booking
                    </Button>
                  )}
                </div>
              </div>

              {/* Booking Summary Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="font-semibold mb-4">Booking Summary</h3>

                  <div className="mb-4 pb-4 border-b">
                    <div className="font-medium">Mountain Escape</div>
                    <div className="text-sm text-muted-foreground">
                      Smoky Mountains, TN
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Check-in</span>
                      <span>Jul 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Check-out</span>
                      <span>Jul 22, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Guests</span>
                      <span>2 adults, 2 children</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4 pb-4 border-b">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accommodation</span>
                      <span>$445</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fees & Taxes</span>
                      <span>$178</span>
                    </div>
                  </div>

                  <div className="flex justify-between font-semibold text-lg mb-4">
                    <span>Total</span>
                    <span className="text-primary">$623</span>
                  </div>

                  {/* Savings Tracker */}
                  <div
                    className="p-4 rounded-lg text-center"
                    style={{ background: 'hsl(38, 92%, 95%)' }}
                  >
                    <div className="text-sm font-medium mb-1">
                      Vacation Savings Tracker
                    </div>
                    <div className="text-2xl font-bold text-accent mb-1">$280</div>
                    <div className="text-xs text-muted-foreground">
                      You're saving compared to premium alternatives
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                    <span>24/7 Family Support</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
