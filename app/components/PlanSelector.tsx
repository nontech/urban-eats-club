"use client";

import PlanCost from "./PlanCost";

type Plan = "S" | "M" | "L";

interface PlanPrices {
  [key: string]: {
    mealPrice: number;
    costPerMonth: number;
  };
}

interface PlanDetails {
  id: Plan;
  name: string;
  description: string;
  mealsPerWeek: number;
}

interface PlanSelectorProps {
  selectedPlan: Plan;
  onPlanChange: (plan: Plan) => void;
  planPrices: PlanPrices;
}

export default function PlanSelector({
  selectedPlan,
  onPlanChange,
  planPrices,
}: PlanSelectorProps) {
  const plans: PlanDetails[] = [
    {
      id: "S",
      name: "Small",
      description: "Perfect for small teams",
      mealsPerWeek: 2,
    },
    {
      id: "M",
      name: "Medium",
      description: "Growing businesses",
      mealsPerWeek: 3,
    },
    {
      id: "L",
      name: "Large",
      description: "Enterprise scale",
      mealsPerWeek: 5,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        Select a Plan
      </h3>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex gap-2">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => onPlanChange(plan.id)}
              className={`flex-1 rounded-xl p-4 transition-all duration-200 ${
                selectedPlan === plan.id
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="text-2xl font-bold mb-1">{plan.id}</div>
              <div
                className={`text-sm ${
                  selectedPlan === plan.id
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {plan.name}
              </div>
              <div
                className={`text-sm font-medium mt-2 ${
                  selectedPlan === plan.id
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >
                {plan.mealsPerWeek} meals/week
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <PlanCost cost={planPrices[selectedPlan].costPerMonth} />
      </div>
    </div>
  );
}
