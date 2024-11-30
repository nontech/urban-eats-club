"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WaitingListCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the email submission here
    console.log("Email submitted:", email);
  };

  return (
    <Card className="w-full max-w-2xl rounded-xl bg-gray-50 border-0 shadow-sm">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Join Our Waiting List
          </h3>
          <p className="text-sm text-gray-600">
            Be the first to know when we launch in your area
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 h-11 bg-white border-gray-200"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
          />
          <Button
            type="submit"
            className="h-11 px-6 bg-black text-white hover:bg-gray-900 transition-colors"
          >
            Join Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
