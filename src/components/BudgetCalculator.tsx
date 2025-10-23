'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function BudgetCalculator() {
  const [income, setIncome] = useState('65000');
  const [familySize, setFamilySize] = useState('4');
  const [days, setDays] = useState('7');
  const [showResults, setShowResults] = useState(false);

  const calculateBudget = () => {
    setShowResults(true);
  };

  const incomeNum = parseInt(income) || 0;
  const budgetMin = Math.floor((incomeNum * 0.03) / 12);
  const budgetMax = Math.floor((incomeNum * 0.05) / 12);

  return (
    <Card className="p-6 bg-secondary/30">
      <h3 className="text-xl font-semibold mb-4">Family Budget Calculator</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Set a realistic vacation budget based on your family's financial situation
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Annual Household Income
          </label>
          <Input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="65000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Family Size</label>
          <Input
            type="number"
            value={familySize}
            onChange={(e) => setFamilySize(e.target.value)}
            placeholder="4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Vacation Length (days)
          </label>
          <Input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="7"
          />
        </div>

        <Button
          onClick={calculateBudget}
          className="w-full bg-primary text-white hover:bg-primary/90"
        >
          Calculate Budget
        </Button>

        {showResults && (
          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent">
            <div className="text-center">
              <div className="text-sm font-medium mb-2">
                Recommended Vacation Budget
              </div>
              <div className="text-3xl font-bold text-accent mb-1">
                ${budgetMin} - ${budgetMax}
              </div>
              <div className="text-xs text-muted-foreground">
                Based on 3-5% of annual income for {familySize} people
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Accommodation (est.)</span>
                <span className="font-medium">${Math.floor(budgetMin * 0.5)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Food (est.)</span>
                <span className="font-medium">${Math.floor(budgetMin * 0.3)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Activities (est.)</span>
                <span className="font-medium">${Math.floor(budgetMin * 0.2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
