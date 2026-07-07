import React, { useState } from "react";
import Actions from "./Actions";
import Path from "../../../components/Path";
import { usePathname } from "next/navigation";
export default function AllTask() {
  const [toggle, setToggle] = useState(false);
  const toggleActions = (id) => {
    setToggle((prev) => (prev === id ? false : id));
  };

  const path = usePathname();
  const tasksData = [
    {
      id: 1,
      title: "Malaria Patients checkups daily",
      description: "Sign up for Covid - 19 training course for medicians",
      date: "23 oct 2025",
      completed: true,
    },
    {
      id: 2,
      title: "Review patient medical histories",
      description:
        "Go through cardiology department incoming files for weekly review.",
      date: "24 oct 2025",
      completed: false,
    },
    {
      id: 3,
      title: "Inventory check needed",
      description:
        "Verify emergency room medical supplies and reorder PPE kits.",
      date: "26 oct 2025",
      completed: false,
    },
    {
      id: 4,
      title: "Staff meeting scheduled",
      description:
        "Attend the quarterly sync up regarding new clinic guidelines.",
      date: "28 oct 2025",
      completed: true,
    },
    {
      id: 5,
      title: "System backup confirmation",
      description:
        "Ensure all patient records are securely uploaded to the cloud server.",
      date: "30 oct 2025",
      completed: false,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Path path={path} />
      <div className="max-h-130 overflow-y-auto rounded-md scrollbar-none pb-20 bg-white p-4">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className=" flex flex-col sm:flex-row justify-between p-4 sm:p-6 bg-[#FBFBFB] rounded-md my-4 gap-4"
          >
            {/* Left Section: Checkbox & Content */}
            <div className="flex items-start gap-4">
              <div>
                <input
                  type="checkbox"
                  name={`checkbox-${task.id}`}
                  id={`task-checkbox-${task.id}`}
                  defaultChecked={task.completed}
                  className="w-5  h-5 cursor-pointer"
                />
              </div>
              <div>
                <h1 className="font-semibold mb-2 sm:mb-3 text-[15px]">
                  {task.title}
                </h1>
                <p className="text-[12px] font-normal text-gray-600">
                  {task.description}
                </p>
              </div>
            </div>

            {/* Right Section: Date & Actions Dropdown */}
            <div className="flex justify-between relative sm:justify-start items-center gap-6 sm:gap-10 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
              <span className="capitalize text-[14px] text-gray-500 whitespace-nowrap">
                {task.date}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 border border-[#d2cccc] cursor-pointer w-7.5 rounded-md text-[#2F80ED] h-7.5"
                onClick={() => toggleActions(task.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              {/* Dropdown Container */}
              {toggle === task.id && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setToggle(false)}
                  />
                  <div className="absolute right-10 top-3 z-50">
                    <Actions />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
