"use client";

import { useState } from "react";
import ComparisonTable from "./components/ComparisonTable";
import PlanSelector from "./components/PlanSelector";
import WaitingListCard from "./components/WaitingListCard";

type Plan = "S" | "M" | "L";

const PLAN_PRICES = {
  S: { mealPrice: 10, costPerMonth: 56 },
  M: { mealPrice: 12, costPerMonth: 120 },
  L: { mealPrice: 15, costPerMonth: 200 },
};

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>("M");

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Optimize Your Meal Plans
        </h1>
        <p className="text-xl text-gray-600">
          Calculate and compare costs per employee with our
          subscription
        </p>
      </div>

      {/* Plans and Comparison Section */}
      <div className="flex items-start gap-8 mb-16">
        {/* Plan Selector */}
        <div className="flex-1">
          <PlanSelector
            selectedPlan={selectedPlan}
            onPlanChange={setSelectedPlan}
            planPrices={PLAN_PRICES}
          />
        </div>

        {/* Comparison Table */}
        <div className="flex-1">
          <ComparisonTable
            mealPrice={PLAN_PRICES[selectedPlan].mealPrice}
            mealsPerWeek={
              selectedPlan === "S" ? 2 : selectedPlan === "M" ? 3 : 5
            }
            monthlyPrice={PLAN_PRICES[selectedPlan].costPerMonth}
          />
        </div>
      </div>

      {/* Waiting List Section */}
      <div className="flex justify-center">
        <WaitingListCard />
      </div>
    </main>
  );
}
