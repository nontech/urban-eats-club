import { Card, CardContent } from "@/components/ui/card";

interface SavingsDisplayProps {
  mealPrice: number;
  mealsPerWeek: number;
  monthlyPrice: number;
}

export default function SavingsDisplay({
  mealPrice,
  mealsPerWeek,
  monthlyPrice,
}: SavingsDisplayProps) {
  const monthlyMealCost = mealPrice * mealsPerWeek * 4; // 4 weeks per month
  const savings = monthlyMealCost - monthlyPrice;

  return (
    <Card className="w-full max-w-md rounded-xl bg-gray-50 border-0 shadow-sm">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="p-2 rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-green-800"
          >
            <path
              fillRule="evenodd"
              d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042.815a.75.75 0 01-.919-.53z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium text-gray-700">
            Save{" "}
            <span className="text-green-700 font-semibold">
              {savings} EUR
            </span>{" "}
            per employee monthly
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
