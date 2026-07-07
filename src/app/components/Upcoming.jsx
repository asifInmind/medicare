"use client";

import React, { useState } from "react";
import NewAppointment from "../(dashboard)/schedule/newappointment/page";

export default function Upcoming() {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scheduleData = [
    {
      hour: "8 : 00",
      items: [
        { time: "8 : 00", title: "Rice Kotlin", status: "past" },
        { time: "8 : 20", title: "Maya Adamu", status: "past" },
        {
          time: "8 : 30",
          title: " Ali",
          status: "active",
          details: {
            patient: " Ali",
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
    <>
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
          <h2 className="font-bold text-[12px] md:text-[15px]">
            Upcoming schedule
          </h2>
          <button
            className="text-[10px] md:text-[12px] cursor-pointer font-semibold text-[#0000AC] flex justify-between gap-2 items-center shrink-0"
            onClick={() => setIsModalOpen(true)}
          >
            New appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 border border-[#d2cccc] w-5 rounded-md h-5 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        {/* Timeline Wrapper - single continuous line behind all groups */}
        <div className="w-full relative  mb-8 ">
          {/* Continuous vertical connecting line */}
          <div className="absolute left-12.25 sm:left-16.25 top-2.25 bottom-2.25 w-px bg-gray-200" />

          {scheduleData.map((group, groupIdx) => {
            const hasActiveItem = group.items.some(
              (item) => item.status === "active",
            );

            return (
              <div
                key={groupIdx}
                className="flex gap-2 sm:gap-3 mb-6 last:mb-0 relative z-10"
              >
                {/* Hour Label */}
                <div className="w-9 sm:w-12 text-right text-xs sm:text-sm font-normal text-gray-400 shrink-0 pt-0.5">
                  {group.hour}
                </div>

                {/* Dot (line now lives in the continuous background layer above) */}
                <div className="flex flex-col items-center shrink-0">
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-black shrink-0 mt-1 ${
                      hasActiveItem ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (hasActiveItem) setIsOpen(!isOpen);
                    }}
                  />
                </div>

                {/* Appointments Block under this hour */}
                <div className="flex-1 min-w-0 space-y-3 pb-1">
                  {group.items.map((item, itemIdx) => {
                    if (item.status === "active") {
                      return (
                        <div key={itemIdx} className="w-full">
                          {/* Active Main Header Row */}
                          <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 cursor-pointer hover:border-gray-300 transition"
                          >
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                              <span className="text-[10px] font-bold text-gray-800 shrink-0">
                                {item.time}
                              </span>
                              <span className="text-[10px] font-medium text-gray-700 truncate">
                                {item.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded whitespace-nowrap">
                                Upcoming
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className={`w-4 h-4 text-blue-600 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
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
                            <div className="mt-2 bg-white border border-gray-200 rounded-xl p-3 sm:p-4 text-sm space-y-3">
                              <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[80px_1fr] text-gray-700 gap-y-1">
                                <span className="font-semibold text-gray-500 text-xs sm:text-sm">
                                  Patient
                                </span>
                                <span className="font-medium text-gray-800 text-xs sm:text-sm wrap-break-words">
                                  {item.details.patient}
                                </span>
                              </div>
                              <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[80px_1fr] text-gray-700 gap-y-1">
                                <span className="font-semibold text-gray-500 text-xs sm:text-sm">
                                  Time
                                </span>
                                <span className="font-medium text-gray-800 text-xs sm:text-sm wrap-break-words">
                                  {item.details.timeRange}
                                </span>
                              </div>
                              <div className="grid grid-cols-[70px_1fr] sm:grid-cols-[80px_1fr] text-gray-700 gap-y-1">
                                <span className="font-semibold text-gray-500 text-xs sm:text-sm">
                                  Purpose
                                </span>
                                <span className="font-medium text-gray-800 text-xs sm:text-sm wrap-break-words">
                                  {item.details.purpose}
                                </span>
                              </div>

                              {/* Detail Action Buttons */}
                              <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-t border-gray-100">
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
                                <button className="bg-[#0000AC] text-white px-2 py-1.5 rounded-sm  text-[9px] hover:bg-opacity-95 transition cursor-pointer w-full sm:w-auto">
                                  Begin appointment
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-3 py-0.5"
                      >
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            item.status === "past"
                              ? "bg-gray-300"
                              : "bg-blue-500"
                          }`}
                        />
                        <span
                          className={`text-xs font-semibold w-11 sm:w-12 shrink-0 ${item.status === "past" ? "text-gray-400" : "text-gray-700"}`}
                        >
                          {item.time}
                        </span>
                        <span
                          className={`text-xs font-medium truncate ${item.status === "past" ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* End-of-line closing dot */}
          <div className="flex gap-2 sm:gap-3 relative z-10">
            <div className="w-9 sm:w-12 shrink-0" />
            <div className="flex flex-col items-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
            </div>
          </div>
        </div>

        {/* Footer view link */}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-[1px] p-4 sm:p-6 md:p-10 flex justify-center items-start">
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="my-auto max-w-full">
            <NewAppointment onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
