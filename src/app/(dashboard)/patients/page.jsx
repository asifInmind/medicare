"use client";
import React, { useState, useRef, useEffect } from "react";
import Path from "../../components/Path";
import { m } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Filters from "./_components/Filters";
import Actions from "./_components/Actions";
import Search from "./_components/Search";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 41;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [statusSection, setStatusSection] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState({});
  const [activePatientId, setActivePatientId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const statusRefs = useRef({});

  const viewPatientsActions = (id) => {
    setActivePatientId((prevId) => (prevId === id ? null : id));
  };

  const showStatuses = (id) => {
    if (statusSection === id) {
      setStatusSection(null);
      return;
    }

    const el = statusRefs.current[id];
    if (el) {
      const rect = el.getBoundingClientRect();
      const dropdownHeight = 180;
      const spaceBelow = window.innerHeight - rect.bottom;
      setDropdownDirection((prev) => ({
        ...prev,
        [id]: spaceBelow < dropdownHeight ? "up" : "down",
      }));
    }

    setStatusSection(id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusSection === false || statusSection === null) return;
      const currentEl = statusRefs.current[statusSection];
      if (currentEl && !currentEl.contains(event.target)) {
        setStatusSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [statusSection]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const [patientsData, setPatientsData] = useState([
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
      status: "awaiting surgery",
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
      id: 4,
      name: "joseph",
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
      id: 5,
      name: "alex",
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
      id: 6,
      name: "sarah",
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
      id: 7,
      name: "bilal",
      diagnosis: "maleria",
      status: "awaiting surgery",
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
  ]);

  const statusStyles = {
    recovered: "bg-[#27ae5f54] text-[#005f28]",
    "on treatment": "bg-[#eb575754] text-[#730404]",
    "awaiting surgery": "bg-[#2f81ed54] text-[#002453]",
    "under observation": "bg-[#f2c94c54] text-[#7a5c00]",
  };

  const handleStatusChange = (id, newStatus) => {
    setPatientsData((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p)),
    );
  };

  const pathname = usePathname();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const filteredPatients = patientsData.filter((patient) => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return true;

    return (
      patient.name.toLowerCase().includes(term) ||
      patient.diagnosis.toLowerCase().includes(term) ||
      patient.status.toLowerCase().includes(term)
    );
  });

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
      <div className=" h-auto  py-5 md:h-18 w-full relative flex-col items-start md:flex-row gap-4 flex md:justify-between bg-white rounded-[5px] px-4 my-2 md:items-center">
        <div>
          <p className="font-medium text-[21px]">
            Total patients <span>({filteredPatients.length})</span>
          </p>
        </div>
        <div className="flex gap-2 md:gap-5 items-center">
          <div className="flex items-center rounded-[5px] border border-gray-200">
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center
          ${
            isSearchOpen
              ? "w-48 md:w-64 opacity-100 mr-2"
              : "w-0 opacity-0 mr-0"
          }`}
            >
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full h-9 md:h-12 px-3 text-sm   focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Search Icon Button */}
            <span
              className="w-9 h-9 md:w-12 md:h-12 cursor-pointer   flex justify-center items-center shrink-0"
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
          </div>
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

      <div className="w-full overflow-x-auto scrollbar-none max-h-100">
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
            {filteredPatients.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="h-16 text-center text-[15px] text-[#828282]"
                >
                  No patients match your search.
                </td>
              </tr>
            ) : (
              filteredPatients.map((patients) => (
                <tr
                  key={patients.id}
                  className="h-16 text-center relative border-b border-gray-100"
                >
                  <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                    {patients.name}
                  </td>
                  <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                    {patients.diagnosis}
                  </td>

                  <td className="text-[17px] font-normal text-[#1D1D1D] capitalize px-4">
                    <div
                      ref={(el) => (statusRefs.current[patients.id] = el)}
                      className="relative inline-block w-45  mx-auto text-center"
                    >
                      <div
                        className={`${
                          statusStyles[patients.status] ||
                          "bg-[#2f81ed54] text-[#002453]"
                        } rounded-full py-1 px-3 cursor-pointer select-none font-medium flex items-center justify-center gap-1`}
                        onClick={() => showStatuses(patients.id)}
                      >
                        <span>{patients.status}</span>
                        {/* <span className="text-xs opacity-70">▼</span> */}
                      </div>

                      {statusSection === patients.id && (
                        <div
                          className={`absolute left-0 right-0 bg-white border border-gray-200 rounded-xl w-45 shadow-xl z-50 overflow-hidden py-1 animate-fadeIn ${
                            dropdownDirection[patients.id] === "up"
                              ? "bottom-full mb-1"
                              : "top-full mt-1"
                          }`}
                        >
                          <ul className="text-center text-sm text-gray-700">
                            {[
                              { value: "on treatment", label: "On Treatment" },
                              { value: "recovered", label: "Recovered" },
                              {
                                value: "awaiting surgery",
                                label: "Awaiting Surgery",
                              },
                              {
                                value: "under observation",
                                label: "Under Observation",
                              },
                            ].map((option) => (
                              <li
                                key={option.value}
                                className="px-3 py-2 hover:bg-gray-50 cursor-pointer capitalize transition-colors duration-150 border-b border-gray-50 last:border-0"
                                onClick={() => {
                                  handleStatusChange(patients.id, option.value);
                                  showStatuses(null);
                                }}
                              >
                                {option.label}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
                  <td className="absolute z-10 right-18 top-6">
                    {activePatientId === patients.id && (
                      <Actions
                        id={patients.id}
                        onClose={() => setActivePatientId(null)}
                        onDeleteSuccess={(deletedId) => {
                          setPatientsData((prev) =>
                            prev.filter((p) => p.id !== deletedId),
                          );
                          setActivePatientId(null);
                        }}
                      />
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className=" w-full flex justify-end items-center mx-auto mt-6 mb-4">
        <div className="flex items-center gap-6 text-[16px] text-[#828282] select-none bg-transparent px-4 py-3 rounded-[5px]">
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

            <span className="tracking-widest text-[#828282]">. . .</span>

            <button
              onClick={() => handlePageChange(totalPages)}
              className={`${currentPage === totalPages ? "text-[#1D1D1D] font-medium" : "hover:text-[#1D1D1D]"}`}
            >
              {totalPages}
            </button>
          </div>

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
