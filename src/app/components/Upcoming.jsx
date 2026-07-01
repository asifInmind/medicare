"use client";

import React, { useState } from "react";

export default function Upcoming() {
  const [isOpen, setIsOpen] = useState(true);

  const scheduleData = [
    {
      hour: "8 : 00",
      items: [
        { time: "8 : 00", title: "Rice Kotlin", status: "past" },
        { time: "8 : 20", title: "Maya Adamu", status: "past" },
        {
          time: "8 : 30",
          title: "Bolaji Abdulraheem",
          status: "active",
          details: {
            patient: "Bolaji Abdulraheem",
            timeRange: "8:30 - 9:00",
            purpose: "General check-up",
          },
        },
      ],
    },
    {
      hour: "9 : 00",
      items: [
        { time: "9 : 00", title: "Abayomi Johnson", status: "upcoming" },
        { time: "9 : 30", title: "Rebecca Gifts", status: "upcoming" },
      ],
    },
    {
      hour: "10 : 00",
      items: [
        { time: "10 : 00", title: "ERC Report", status: "upcoming" },
        { time: "10 : 30", title: "Consulation meeting", status: "upcoming" },
      ],
    },
    {
      hour: "11 : 00",
      items: [
        { time: "11 : 00", title: "Victory Jones", status: "upcoming" },
        { time: "11 : 30", title: "Board meeting", status: "upcoming" },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h2 className="font-bold text-[15px]">Upcoming schedule</h2>
        <button className="text-[12px] cursor-pointer font-semibold text-[#0000AC] flex justify-between gap-2 items-center">
          New appointment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 border border-[#d2cccc] w-5 rounded-md h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-8">
        {/* Continuous Vertical Line */}
        <div className="absolute left-8.75 top-3 bottom-3 w-px bg-gray-200" />

        {scheduleData.map((group, groupIdx) => (
          <div key={groupIdx} className="relative mb-6 last:mb-0">
            {/* Hour Block Node Indicator */}
            <div className="absolute -left-0.5 top-1.5 w-2.5 h-2.5 rounded-full bg-black z-10" />

            {/* Main Hour Label */}
            <div className="absolute -left-13.5 top-0 text-sm font-normal text-gray-400 w-12 text-right">
              {group.hour}
            </div>

            {/* Appointments Block under this hour */}
            <div className="space-y-3 pt-3 ps-3">
              {group.items.map((item, itemIdx) => {
                if (item.status === "active") {
                  return (
                    <div key={itemIdx} className="w-full">
                      {/* Active Main Header Row */}
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-4 py-2.5  cursor-pointer hover:border-gray-300 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <span className="text-[10px] font-bold text-gray-800">
                            {item.time}
                          </span>
                          <span className="text-[10px] font-medium text-gray-700">
                            {item.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                            Upcoming
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className={`w-4 h-4 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Dropdown Card Details */}
                      {isOpen && item.details && (
                        <div className="mt-2 ml-1 bg-white border border-gray-200 rounded-xl p-4 text-sm space-y-3">
                          <div className="grid grid-cols-[80px_1fr] text-gray-700">
                            <span className="font-semibold text-gray-500">
                              Patient
                            </span>
                            <span className="font-medium text-gray-800">
                              {item.details.patient}
                            </span>
                          </div>
                          <div className="grid grid-cols-[80px_1fr] text-gray-700">
                            <span className="font-semibold text-gray-500">
                              Time
                            </span>
                            <span className="font-medium text-gray-800">
                              {item.details.timeRange}
                            </span>
                          </div>
                          <div className="grid grid-cols-[80px_1fr] text-gray-700">
                            <span className="font-semibold text-gray-500">
                              Purpose
                            </span>
                            <span className="font-medium text-gray-800">
                              {item.details.purpose}
                            </span>
                          </div>

                          {/* Detail Action Buttons */}
                          <div className="pt-2 flex justify-between items-center border-t border-gray-100">
                            <div className="flex gap-2">
                              {/* Delete Button */}
                              <button className="p-2 text-rose-500 border border-rose-100 rounded-lg bg-rose-50/30 hover:bg-rose-50 transition cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.34 9m-4.78 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </button>
                              {/* Profile/User Button */}
                              <button className="p-2 text-blue-500 border border-blue-100 rounded-lg bg-blue-50/30 hover:bg-blue-50 transition cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                  />
                                </svg>
                              </button>
                              {/* Edit Button */}
                              <button className="p-2 text-blue-500 border border-blue-100 rounded-lg bg-blue-50/30 hover:bg-blue-50 transition cursor-pointer">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-3 h-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                  />
                                </svg>
                              </button>
                            </div>
                            <button className="bg-[#0000AC] text-white px-2 py-1.5 rounded-lg font-medium text-xs hover:bg-opacity-95 transition cursor-pointer">
                              Begin appointment
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                {
                  /* Default Row Structure (Past / Upcoming Standard Rows) */
                }
                return (
                  <div
                    key={itemIdx}
                    className="flex items-center gap-3 pl-2 py-0.5"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.status === "past" ? "bg-gray-300" : "bg-blue-500"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold w-12 ${item.status === "past" ? "text-gray-400" : "text-gray-700"}`}
                    >
                      {item.time}
                    </span>
                    <span
                      className={`text-xs font-medium ${item.status === "past" ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Dynamic Bottom Ending Line Cap Point */}
        <div className="absolute left-7.5 bottom-0 w-2.5 h-2.5 rounded-full bg-black z-10" />
      </div>

      {/* Footer view link */}
    </div>
  );
}
