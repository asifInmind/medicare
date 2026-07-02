import React from "react";

export default function Filters({ onClose }) {
  return (
    <>
      {/* Responsive Padding adjustments: p-6 on mobile, p-8 on larger viewports. 
        Added border matching Medicare brand design styles.
      */}
      <section className="w-full bg-white relative p-6 sm:p-8 md:p-10 rounded-xl border border-[#E0E0E0] shadow-sm">
        {/* Switched from flex to grid:
          - grid-cols-1: Mobile (stacks vertically)
          - sm:grid-cols-2: Small tablets / large mobile
          - lg:grid-cols-5: Desktop screens (all fields side-by-side)
        */}
        <form
          action=""
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 items-end"
        >
          {/* Field 1: Diagnosis */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="diagnosis"
              className="block pb-1.5 text-sm font-medium text-gray-500"
            >
              Diagnosis
            </label>
            <select
              name="diagnosis"
              id="diagnosis"
              className="w-full border border-gray-200 h-10.5 py-2 px-3 rounded-md focus:outline-none focus:border-[#0000AC] text-sm bg-white"
            >
              <option value="maleria">Malaria</option>
              <option value="diabetes">Diabetes</option>
              <option value="influenza">Influenza</option>
            </select>
          </div>

          {/* Field 2: Status */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="status"
              className="block pb-1.5 text-sm font-medium text-gray-500"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full border border-gray-200 h-10.5 py-2 px-3 rounded-md focus:outline-none focus:border-[#0000AC] text-sm bg-white"
            >
              <option value="recovered">Recovered</option>
              <option value="ontreatment">On Treatment</option>
              <option value="awatingsurgery">Awaiting Surgery</option>
            </select>
          </div>

          {/* Field 3: Last Appointment */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="lastAppointment"
              className="block pb-1.5 text-sm font-medium text-gray-500"
            >
              Last Appointment
            </label>
            <input
              type="date"
              name="lastAppointment"
              id="lastAppointment"
              className="w-full border border-gray-200 h-10.5 py-2 px-3 rounded-md focus:outline-none focus:border-[#0000AC] text-sm"
            />
          </div>

          {/* Field 4: Next Appointment */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="nextAppointment"
              className="block pb-1.5 text-sm font-medium text-gray-500"
            >
              Next Appointment
            </label>
            <input
              type="date"
              name="nextAppointment"
              id="nextAppointment"
              className="w-full border border-gray-200 h-10.5 py-2 px-3 rounded-md focus:outline-none focus:border-[#0000AC] text-sm"
            />
          </div>

          {/* Field 5: Action Button */}
          {/* sm:col-span-2 ensures the button occupies full container width if layout renders 2 rows */}
          <div className="sm:col-span-2 lg:col-span-1 w-full mt-2 lg:mt-0">
            <button className="w-full h-10.5 py-2 px-4 rounded-md shadow-sm font-medium tracking-wide cursor-pointer bg-[#0000AC] hover:bg-[#00008b] active:scale-[0.99] capitalize text-white text-sm transition-all duration-200">
              apply filters
            </button>
          </div>
        </form>

        {/* Close Button X Layout */}
        <div className="absolute top-3 right-3">
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 group border-0 bg-transparent cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
