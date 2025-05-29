"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseToAmount, parseToRate } from "@/lib/helper";

const orderBookData = [
  {
    amount: 9000000,
    apy: "0.10%",
  },
  {
    amount: 100800000,
    apy: "1.0%",
  },
];

export default function OrderBook() {
  const [selectedRate, setSelectedRate] = useState("0.10%");
  const [selectedRow, setSelectedRow] = useState(0);

  const maxAmountLend = useMemo(
    () => Math.max(...orderBookData.map((order) => order.amount)),
    [orderBookData]
  );

  return (
    <div className="w-full max-w-md bg-background text-white px-4 py-3 rounded-lg">
      <div className="space-y-0">
        <div className="flex justify-between items-center mb-4 text-gray-400 text-sm">
          <span className="text-muted-foreground text-sm">APY</span>
          <span className="text-muted-foreground text-sm">Amount</span>
        </div>

        <div className="space-y-1">
          {orderBookData.map((item, index) => (
            <div
              key={item.apy}
              className="relative flex items-center h-8 group cursor-pointer"
              //   onClick={() => handleFixRated(order.rate)}
            >
              <div
                className="absolute right-0 h-full order-book-sell transition-all duration-200 group-hover:opacity-80 bg-gradient-to-br from-[#06294c] to-[#043363]"
                style={{ width: `${(item.amount / maxAmountLend) * 100}%` }}
              />
              <div className="relative flex justify-between w-full px-2 text-sm">
                <span className="font-medium">{item.apy.toLocaleString()}</span>
                <span className="font-medium text-xs">{item.amount} MUSDC</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
