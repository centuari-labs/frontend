"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { date: "May 23", rate: 5.25, timestamp: "2024-05-23" },
  { date: "May 23", rate: 5.35, timestamp: "2024-05-23T06:00" },
  { date: "May 24", rate: 5.35, timestamp: "2024-05-24" },
  { date: "May 24", rate: 5.15, timestamp: "2024-05-24T12:00" },
  { date: "May 25", rate: 5.15, timestamp: "2024-05-25" },
  { date: "May 25", rate: 5.45, timestamp: "2024-05-25T09:00" },
  { date: "May 26", rate: 5.45, timestamp: "2024-05-26" },
  { date: "May 26", rate: 5.65, timestamp: "2024-05-26T15:00" },
  { date: "May 27", rate: 5.65, timestamp: "2024-05-27" },
  { date: "May 27", rate: 5.85, timestamp: "2024-05-27T11:00" },
  { date: "May 28", rate: 5.85, timestamp: "2024-05-28" },
  { date: "May 28", rate: 5.75, timestamp: "2024-05-28T14:00" },
  { date: "May 29", rate: 5.75, timestamp: "2024-05-29" },
  { date: "May 29", rate: 5.45, timestamp: "2024-05-29T16:00" },
];

export default function MarketChart() {
  const [activeView, setActiveView] = useState("rate-history");
  const [activePeriod, setActivePeriod] = useState("1W");

  return (
    <div className="w-full h-[500px] bg-background text-white p-6">
      {/* Header Controls */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2">
          <Button
            variant={activeView === "rate-history" ? "default" : "outline"}
            onClick={() => setActiveView("rate-history")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              activeView === "rate-history"
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-gray-500"
            }`}
          >
            Rate history
          </Button>
          <Button
            variant={activeView === "yield-curve" ? "default" : "outline"}
            onClick={() => setActiveView("yield-curve")}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              activeView === "yield-curve"
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-gray-500"
            }`}
          >
            Yield curve
          </Button>
        </div>

        <div className="flex gap-4 text-sm">
          {["1D", "1W", "1M"].map((period) => (
            <button
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`transition-colors ${
                activePeriod === period
                  ? "text-white font-medium"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-[350px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#1e40af" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickFormatter={(value) => value}
              interval="preserveStartEnd"
            />

            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              tickFormatter={(value) => `${value}%`}
              domain={[4.5, 6.5]}
              ticks={[5.0, 5.5, 6.0]}
            />

            <Area
              type="stepAfter"
              dataKey="rate"
              stroke="#9ca3af"
              strokeWidth={2}
              fill="url(#rateGradient)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Grid Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div
                key={percent}
                className="absolute w-full border-t border-gray-700"
                style={{ top: `${percent}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
