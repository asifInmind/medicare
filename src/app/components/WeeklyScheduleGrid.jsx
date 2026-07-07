"use client";

import React from "react";
import {
  DAYS,
  TIME_SLOTS,
  STATUS_STYLES,
  APPOINTMENTS,
} from "../../config/constents";
import {
  UserIcon,
  DocumentTextIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function WeeklyScheduleGrid() {
  return (
    <div className="w-full h-[calc(100vh-100px)] max-h-200 bg-white rounded-xl border border-gray-100  flex flex-col overflow-scroll hide-scrollbar">
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <div className="flex-1 overflow-auto hide-scrollbar">
        <div className="grid grid-cols-[80px_repeat(6,minmax(220px,1fr))] min-w-350  relative">
          <div className="sticky top-0 left-0 bg-white z-30 border-b border-r border-gray-100 h-16" />

          {DAYS.map((day) => (
            <div
              key={day.id}
              className="sticky top-0 bg-white z-20 border-b border-r border-gray-100 h-16 flex items-center justify-center font-semibold text-gray-800 text-sm"
            >
              {day.label}
            </div>
          ))}

          {TIME_SLOTS.map((time) => (
            <React.Fragment key={time}>
              <div className="sticky w-8 md:w-full left-0 bg-white z-10 border-b border-r border-gray-100 h-44 flex items-start  justify-start md:justify-center pt-4 text-xs font-semibold text-gray-500">
                {time}
              </div>

              {DAYS.map((day) => {
                const appointment = APPOINTMENTS.find(
                  (appt) => appt.day === day.id && appt.time === time,
                );

                const style = appointment
                  ? STATUS_STYLES[appointment.status]
                  : null;

                return (
                  <div
                    key={`${day.id}-${time}`}
                    className=" p-3 h-44 bg-white relative"
                  >
                    {appointment && style && (
                      <div
                        className={`w-full h-full rounded-lg   py-2  flex flex-col justify-between text-xs font-medium tracking-tight ${style.bg} relative overflow-hidden `}
                      >
                        <div className={`absolute left-0 top-0 bottom-0 `} />

                        <div className="space-y-1.5 ">
                          <div
                            className={`flex items-center  ps-1 border-s-3 border-${style.pill}`}
                          >
                            <span
                              className={` py-1.5 rounded text-[10px] font-bold tracking-wide w-full uppercase ${style.pill}`}
                            >
                              {appointment.status}
                            </span>
                          </div>

                          <div
                            className={`flex items-center ps-2 space-x-1.5 font-semibold text-${style.icons}`}
                          >
                            <UserIcon
                              className={`w-3.5 h-3.5 ${style.icons}`}
                            />
                            <span className="truncate">{appointment.name}</span>
                          </div>

                          <div
                            className={`flex items-center ps-2 space-x-1.5 text-${style.icons}`}
                          >
                            <DocumentTextIcon
                              className={`w-3.5 h-3.5 ${style.icons}`}
                            />
                            <span className="truncate">{appointment.type}</span>
                          </div>
                        </div>

                        <div className="space-y-1 pl-1 ">
                          <div
                            className={`flex items-center ps-2 space-x-1.5 text-${style.icons}`}
                          >
                            <ClockIcon
                              className={`w-3.5 h-3.5 ${style.icons}`}
                            />
                            <span>{appointment.duration}</span>
                          </div>
                          <div
                            className={`flex items-center ps-2 space-x-1.5 text-${style.icons}`}
                          >
                            <MapPinIcon
                              className={`w-3.5 h-3.5 ${style.icons}`}
                            />
                            <span className="truncate">
                              {appointment.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
