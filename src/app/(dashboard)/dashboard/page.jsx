"use client";
import React, { useState } from "react";
import Path from "../../components/Path";
import Upcoming from "../../components/Upcoming";
import PatientStatsCard from "../../components/PatientStatsCard";
import Onlineconsultation from "../../components/Onlineconsultation";
import OfflineConsultationsCard from "../../components/OfflineConsultationsCard";
import { usePathname } from "next/navigation";
import Actions from "../task/_components/Actions.jsx";
import AddNewTask from "../../components/AddNewTask";
export default function Dashboard() {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleActions = () => {
    setToggle(!toggle);
    console.log("toggle clicked ");
  };
  return (
    <>
      <div className="">
        <Path path={path} />
      </div>

      {/* TOP CARDS GRID - 1 column on mobile, 2 columns on tablet, 3 columns on desktop/laptop */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg h-57">
          <OfflineConsultationsCard />
        </div>
        <div className="bg-white rounded-lg h-57">
          <Onlineconsultation />
        </div>
        {/* Takes up full width on medium screens to keep a balanced 2x2 grid shape before hitting 3 columns */}
        <div className="bg-white rounded-lg h-57 md:col-span-2 lg:col-span-1">
          <PatientStatsCard />
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-[1px] p-4 sm:p-6 md:p-10 flex justify-center items-start">
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="my-auto max-w-full">
            <AddNewTask onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      {/* BOTTOM SECTIONS GRID - Stacks vertically on mobile/tablet, expands side-by-side on lg viewports */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
        {/* Task Box - Full width on small/medium screens, takes 2 columns on wide layouts */}
        <div className="lg:col-span-2 bg-white rounded-lg h-152 p-4 relative">
          <div className="flex justify-between">
            <h2 className="font-bold text-[15px]">Task</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[12px] cursor-pointer font-semibold text-[#0000AC] flex justify-between gap-2 items-center"
            >
              New Task
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 border border-[#d2cccc] w-5 rounded-md h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-6 bg-[#FBFBFB] rounded-md my-4.75 gap-4">
            <div className="flex items-start gap-4">
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="task-checkbox"
                  className="w-7.5 cursor-pointer h-7.5"
                />
              </div>
              <div>
                <h1 className="font-semibold mb-2 sm:mb-3 text-[15px]">
                  Task completed successfully
                </h1>
                <p className="text-[12px] font-normal text-gray-600">
                  Sign up for Covid - 19 training course for medicians
                </p>
              </div>
            </div>
            <div className="flex justify-between relative sm:justify-start items-center gap-6 sm:gap-10 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
              <span className="capitalize text-[14px] text-gray-500 whitespace-nowrap">
                23 oct 2025
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 border border-[#d2cccc] cursor-pointer w-7.5 rounded-md text-[#2F80ED] h-[30px]"
                onClick={toggleActions}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <div className="absolute right-10 top-3">
                {toggle ? <Actions /> : ""}
              </div>
            </div>
          </div>

          <p className="flex justify-center items-center gap-1.5 cursor-pointer absolute bottom-5 text-[#0000AC] text-[12px] right-5">
            view all{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
        </div>

        {/* Upcoming Box - 1 column layout on smaller views */}
        <div className="lg:col-span-1 bg-white rounded-lg h-152 p-6 overflow-y-scroll scrollbar-none relative">
          <Upcoming />
          <p className="flex justify-center items-center gap-1.5 cursor-pointer absolute bottom-5 text-[#0000AC] text-[12px] right-5">
            view all{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
