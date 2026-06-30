"use client";

import React from "react";
import {
  UserIcon,
  DocumentTextIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const DAYS = [
  { id: "mon", label: "Mon(25)" },
  { id: "tue", label: "Tue(26)" },
  { id: "wed", label: "Wed(27)" },
  { id: "thu", label: "Thurs(28)" },
  { id: "fri", label: "Fri(29)" },
  { id: "sat", label: "Sat(30)" },
];

const TIME_SLOTS = ["9:00", "10:00", "11:00", "12:00", "13:00"];

const STATUS_STYLES = {
  Pending: {
    bg: "bg-red-100 border-red-200 text-red-700",
    accent: "bg-[#EB5757]",
    pill: "bg-red-200/50 text-red-700",
    icons: "text-red-400",
  },
  Approved: {
    bg: "bg-emerald-50 border-emerald-200 text-emerald-700",
    accent: "bg-emerald-500",
    pill: "bg-emerald-200/50 text-emerald-700",
    icons: "text-emerald-400",
  },
  Ongoing: {
    bg: "bg-blue-50 border-blue-200 text-blue-700",
    accent: "bg-blue-500",
    pill: "bg-blue-200/50 text-blue-700",
    icons: "text-blue-400",
  },
  Tentative: {
    bg: "bg-amber-50 border-amber-200 text-amber-700",
    accent: "bg-amber-500",
    pill: "bg-amber-200/50 text-amber-700",
    icons: "text-amber-400",
  },
};

const APPOINTMENTS = [
  {
    day: "mon",
    time: "9:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "wed",
    time: "9:00",
    status: "Approved",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "fri",
    time: "9:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "mon",
    time: "10:00",
    status: "Ongoing",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "tue",
    time: "10:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "wed",
    time: "10:00",
    status: "Approved",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "thu",
    time: "10:00",
    status: "Ongoing",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "fri",
    time: "10:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "sat",
    time: "10:00",
    status: "Tentative",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "tue",
    time: "11:00",
    status: "Approved",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "thu",
    time: "11:00",
    status: "Ongoing",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "sat",
    time: "11:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "mon",
    time: "13:00",
    status: "Pending",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
  {
    day: "sat",
    time: "13:00",
    status: "Tentative",
    name: "John Adebeye",
    type: "Medical appointment",
    duration: "9:00 - 9:45",
    location: "General clinic",
  },
];

export default function WeeklyScheduleGrid() {
  return (
    <div className="w-full h-[calc(100vh-100px)] max-h-[800px] bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-[80px_repeat(6,minmax(220px,1fr))] min-w-[1400px] relative">
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
              <div className="sticky left-0 bg-white z-10 border-b border-r border-gray-100 h-44 flex items-start justify-center pt-4 text-xs font-semibold text-gray-500">
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
