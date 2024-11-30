interface PlanCostProps {
  cost: number;
}

export default function PlanCost({ cost }: PlanCostProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        Cost
      </h3>
      <div className="bg-gray-50 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center gap-8">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            You Pay
          </h3>
          <div className="w-px h-12 bg-gray-200" />
          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
              Per Employee
            </h3>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">{cost}</span>
              <div className="flex flex-col ml-1">
                <span className="text-lg font-medium text-gray-600">
                  EUR
                </span>
                <span className="text-xs text-gray-500">monthly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
