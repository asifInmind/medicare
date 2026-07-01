"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Female", value: 110, color: "#3182ce" },
  { name: "Male", value: 87, color: "#e53e3e" },
];

const totalPatients = data.reduce((sum, item) => sum + item.value, 0);

export default function PatientStatsCard() {
  return (
    <div className="relative w-full  bg-white rounded-xl p-4 md:p-6  select-none">
      <div className="flex justify-between ">
        <div className="flex flex-col space-y-4">
          <span className="text-gray-900 font-medium text-[22px]">
            Total Patients
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>

      <div className="relative w-full h-36 flex items-center justify-between">
        <span className="text-gray-950 font-bold text-[37px] tracking-tight">
          {totalPatients}
        </span>

        {/* Wrap the chart and its text inside a dedicated relative container */}
        <div className="relative w-36 h-36 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                // Using percentages scales the donut size relative to container bounds!
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* This is now perfectly relative to the circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-xs font-medium space-y-0.5 pointer-events-none">
            <div className="flex items-center space-x-1">
              <span className="text-gray-900 font-semibold">110</span>
              <span className="text-blue-500">Female</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-900 font-semibold">87</span>
              <span className="text-red-500">Male</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
