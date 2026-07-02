"use client";
import React, { useState } from "react";
import Path from "../../components/Path";
import { m } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Filters from "./_components/Filters";
import Actions from "./_components/Actions";
import Search from "./_components/Search";
import { AnimatePresence } from "framer-motion";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 41; // Derived from your design image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [activePatientId, setActivePatientId] = useState(null);
  const viewPatientsActions = (id) => {
    setActivePatientId((prevId) => (prevId === id ? null : id));
  };

  const patientsData = [
    {
      id: 1,
      name: "mary joseph",
      diagnosis: "maleria",
      status: "recovered",
      lastAppointment: "23/12/2023",
      nextAppointment: "25/12/2023",
      options: (
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
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      name: "mary joseph",
      diagnosis: "maleria",
      status: "on treatment",
      lastAppointment: "23/12/2023",
      nextAppointment: "25/12/2023",
      options: (
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
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      name: "mary joseph",
      diagnosis: "maleria",
      status: "awating surgery",
      lastAppointment: "23/12/2023",
      nextAppointment: "25/12/2023",
      options: (
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
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      ),
    },
  ];

  const pathname = usePathname();

  // Helper to handle page changing logic safely
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Path path={pathname} />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-[1px] p-4 sm:p-6 md:p-10 flex justify-center items-start">
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="my-auto max-w-full">
            <Filters onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
      <div className=" h-auto  py-5 md:h-18 w-full flex-col items-start md:flex-row gap-4 flex md:justify-between bg-white rounded-[5px] px-4 my-2 md:items-center">
        <div>
          <p className="font-medium text-[21px]">
            Total patients <span>({patientsData.length})</span>
          </p>
        </div>
        <div className="flex gap-2 md:gap-5 items-center">
          <Link
            className="w-9 h-9 md:w-12 md:h-12 border border-[#E0E0E0] rounded-[5px] flex justify-center items-center"
            href={"/patients/addpatients"}
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
          </Link>

          <span
            className="w-9 h-9 md:w-12 md:h-12 cursor-pointer border border-[#E0E0E0] rounded-[5px] flex justify-center items-center"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <span
            className="w-9 h-9 md:w-12 md:h-12 border cursor-pointer border-[#E0E0E0] rounded-[5px] flex justify-center items-center"
            onClick={() => setIsModalOpen(true)}
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
          <span className="w-9 h-9 md:w-12 md:h-12 cursor-pointer border border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
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

      <AnimatePresence>
        {isSearchOpen && <Search onClose={() => setIsSearchOpen(false)} />}
      </AnimatePresence>
      <div className="w-full overflow-x-auto">
        <table className="min-w-175 w-full text-center bg-white">
          <thead className="h-16 border-b border-[#E0E0E0]">
            <tr>
              <th className="text-[17px] text-[#828282] font-normal capitalize">
                name
              </th>
              <th className="text-[17px] text-[#828282] font-normal capitalize">
                diagnosis
              </th>
              <th className="text-[17px] text-[#828282] font-normal capitalize">
                status
              </th>
              <th className="text-[17px] text-[#828282] font-normal capitalize">
                last appointment
              </th>
              <th className="text-[17px] text-[#828282] font-normal capitalize">
                next appointment
              </th>
              <th className="text-[17px] text-[#828282] font-normal capitalize">
                options
              </th>
            </tr>
          </thead>
          <tbody>
            {patientsData.map((patients) => (
              <tr key={patients.id} className="h-16 text-center relative">
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.name}
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.diagnosis}
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  <span
                    className={`${
                      patients.status === "recovered"
                        ? "bg-[#27AE60BF] text-[#005f28]"
                        : patients.status === "on treatment"
                          ? "bg-[#EB5757A6] text-[#730404]"
                          : "bg-[#2F80EDA6] text-[#002453]"
                    } rounded-full w-full block py-1 px-3 `}
                  >
                    {patients.status}
                  </span>
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.lastAppointment}
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.nextAppointment}
                </td>
                <td
                  className="flex justify-center items-center h-16 cursor-pointer"
                  onClick={() => viewPatientsActions(patients.id)}
                >
                  {patients.options}
                </td>
                <span className="absolute z-10 right-18 top-6">
                  {activePatientId === patients.id && <Actions />}
                </span>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION SECTION */}
      <div className=" w-full flex justify-end items-center mx-auto mt-6 mb-4">
        <div className="flex items-center gap-6 text-[16px] text-[#828282] select-none bg-transparent px-4 py-3 rounded-[5px]">
          {/* Prev Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 font-normal transition-colors ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:text-[#1D1D1D]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Prev
          </button>

          {/* Number Track */}
          <div className="flex items-center gap-4 font-normal">
            <button
              onClick={() => handlePageChange(1)}
              className={`${currentPage === 1 ? "text-[#1D1D1D] font-medium" : "hover:text-[#1D1D1D]"}`}
            >
              1
            </button>
            <button
              onClick={() => handlePageChange(2)}
              className={`${currentPage === 2 ? "text-[#1D1D1D] font-medium" : "hover:text-[#1D1D1D]"}`}
            >
              2
            </button>
            <button
              onClick={() => handlePageChange(3)}
              className={`${currentPage === 3 ? "text-[#1D1D1D] font-medium" : "hover:text-[#1D1D1D]"}`}
            >
              3
            </button>

            {/* Ellipsis mimicking your asset layout */}
            <span className="tracking-widest text-[#828282]">. . .</span>

            <button
              onClick={() => handlePageChange(totalPages)}
              className={`${currentPage === totalPages ? "text-[#1D1D1D] font-medium" : "hover:text-[#1D1D1D]"}`}
            >
              {totalPages}
            </button>
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 font-normal transition-colors ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:text-[#1D1D1D]"
            }`}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
