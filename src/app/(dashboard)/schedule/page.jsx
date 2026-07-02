"use client";
import React, { useState } from "react";
import Path from "../../components/Path";
import { usePathname } from "next/navigation";
import WeeklyScheduleGrid from "../../components/WeeklyScheduleGrid";
import NewAppointment from "./newappointment/page";
import Filters from "./_components/Filters";

export default function Schedule() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <Path path={pathname} />
      <div className=" h-auto  py-5 md:h-18 w-full flex-col items-start md:flex-row gap-4 flex md:justify-between bg-white rounded-[5px] px-4 my-2 md:items-center">
        <div>
          <p className="font-medium md:text-[14px] lg:text-[21px]">
            Weekly schedule from 25th to 1st November 2022
          </p>
        </div>
        <div className="flex gap-2 md:gap-5  items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-9 h-9 md:w-12 md:h-12 border border-[#E0E0E0] cursor-pointer rounded-[5px] flex justify-center items-center hover:bg-gray-50 transition-colors"
            aria-label="Open new appointment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>

          <span
            className="w-9 h-9 md:w-12 md:h-12 border cursor-pointer border-[#E0E0E0] rounded-[5px] flex justify-center items-center"
            onClick={() => setIsFilterOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </span>

          <span
            className="w-9 h-9 md:w-12 md:h-12 border cursor-pointer border-[#E0E0E0] rounded-[5px] flex justify-center items-center"
            onClick={() => window.print()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>
          </span>

          <span className="w-9 h-9 md:w-12 md:h-12 border cursor-pointer border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <section className="w-full mx-auto ">
        <WeeklyScheduleGrid />
      </section>

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
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-[1px] p-4 sm:p-6 md:p-10 flex justify-center items-start">
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="my-auto max-w-full">
            <Filters onClose={() => setIsFilterOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
