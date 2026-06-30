"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Mock data shaped to match the exact wavy curve profile in your image
const chartData = [
  { value: 55 },
  { value: 20 },
  { value: 85 },
  { value: 40 },
  { value: 80 },
  { value: 25 },
];

export default function Onlineconsultation() {
  return (
    <div className="relative w-full max-w-sm  px-6 py-4 select-none">
      <button className="absolute top-6 right-6 text-gray-900 hover:text-gray-600 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>

      <div className="flex justify-between items-end mt-2">
        <div className="flex flex-col">
          <span className="text-gray-900 font-medium text-[21px] absolute top-6 w-full">
            Online Consultations
          </span>

          <span className="text-gray-950 font-bold text-[37px] tracking-tight">
            96
          </span>

          {/* Indicator Badge */}
          <div className="flex items-center space-x-2 mt-4">
            <div className="w-6 h-6 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-red-500 text-sm font-medium">-20.9%</span>
          </div>
        </div>

        {/* Right Column: Sparkline Area Chart */}
        <div className="w-40 h-34 flex-shrink-0 mb-1 mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                {/* Visual Gradient fade beneath the line stroke */}
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e53e3e" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#e53e3e" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#e53e3e"
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#chartGradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
