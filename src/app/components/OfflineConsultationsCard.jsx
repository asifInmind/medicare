"use client";

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// Mock data shaped to match the wavy curve profile in the image
const chartData = [
  { value: 30 },
  { value: 65 },
  { value: 45 },
  { value: 95 },
  { value: 15 },
  { value: 60 },
];

export default function OfflineConsultationsCard() {
  return (
    <div className="relative w-full  bg-white rounded-xl border border-gray-100 p-6 select-none">
      {/* Top Options Button */}
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

      {/* Main Content Layout Container */}
      <div className="flex justify-between items-end mt-2">
        {/* Left Column: Title -> Value -> Indicator Badge */}
        <div className="flex flex-col">
          <span className="text-gray-900 font-medium text-[16px] top-6 absolute md:text-[21px]">
            Offline Consultations
          </span>

          <span className="text-gray-950 font-bold  text-[37px] tracking-tight mt-2 leading-none">
            101
          </span>

          {/* Upward Green Indicator Badge */}
          <div className="flex items-center space-x-2 mt-4">
            <div className="w-6 h-6 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4" // Removed the 180deg rotation to keep it pointing up
              >
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-emerald-600 text-sm font-medium">+3.11%</span>
          </div>
        </div>

        {/* Right Column: Sparkline Area Chart with Blue Shading */}
        <div className=" w-25 h-30 md:w-40 md:h-24 shrink-0 mb-1  mt-14">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                {/* Blue gradient fill setup matching image token styles */}
                <linearGradient
                  id="blueChartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#blueChartGradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
