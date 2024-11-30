import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ComparisonTableProps {
  mealPrice: number;
  mealsPerWeek: number;
}

export default function ComparisonTable({
  mealPrice,
  mealsPerWeek,
}: ComparisonTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <Card className="w-[500px] rounded-xl bg-gray-50 border-0 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6 text-center">
            Benefit
          </h3>
          <Table className="border-collapse">
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="w-[180px] text-gray-500 font-medium"></TableHead>
                <TableHead className="text-gray-500 font-medium py-4">
                  With Membership
                </TableHead>
                <TableHead className="text-gray-500 font-medium py-4">
                  Without Membership
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200">
                <TableCell className="font-medium text-gray-700 py-4">
                  Price of meal
                </TableCell>
                <TableCell className="text-gray-900 font-semibold py-4">
                  € {mealPrice}
                </TableCell>
                <TableCell className="text-gray-900 font-semibold py-4">
                  € {mealPrice}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-700 py-4">
                  Employee pay
                </TableCell>
                <TableCell className="py-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                    free
                  </span>
                </TableCell>
                <TableCell className="text-gray-900 font-semibold py-4">
                  € {mealPrice}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="w-[500px] rounded-xl bg-gray-50 border-0 shadow-sm">
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
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">
            An Employee gets {mealsPerWeek} free meals per week
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
