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

export default function MembershipComparisonCard() {
  return (
    <Card className="w-[500px]">
      <CardContent className="pt-6">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="border-b-0">
              <TableHead className="w-[180px]"></TableHead>
              <TableHead>With Membership</TableHead>
              <TableHead>Without Membership</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b-0">
              <TableCell className="font-medium">
                Price of meal
              </TableCell>
              <TableCell>€ 10</TableCell>
              <TableCell>€ 10</TableCell>
            </TableRow>
            <TableRow className="border-b-0">
              <TableCell className="font-medium">
                Employee pay
              </TableCell>
              <TableCell>
                <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  free
                </span>
              </TableCell>
              <TableCell>€ 10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
