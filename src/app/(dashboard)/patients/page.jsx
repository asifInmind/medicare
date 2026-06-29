import React from "react";
import Path from "../../components/Path";
import { m } from "framer-motion";

export default function page() {
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
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
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
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
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
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <Path path={"Patient register"} />
      <div className="h-18 w-full flex justify-between bg-white rounded-[5px] px-4 my-2  items-center">
        <div>
          <p className="font-medium text-[21px]">
            Total patients <span>(349)</span>
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <span className="w-12 h-12 border border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>

          <span className="w-12 h-12 border border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <span className="w-12 h-12 border border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </span>
          <span className="w-12 h-12 border border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <table className="w-full text-center bg-white">
          <thead className="h-16 border-b border-[#E0E0E0]">
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
          </thead>
          <tbody>
            {patientsData.map((patients) => (
              <tr key={patients.id} className="h-16 text-center">
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.name}
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.diagnosis}
                </td>
                <td
                  className={`text-[17px]  font-normal text-[#1D1D1D] capitalize`}
                >
                  <span
                    className={`${patients.status === "recovered" ? "bg-[#27AE60] text-[#005f28]" : patients.status === "on treatment" ? "bg-[#EB5757] text-[#730404]" : "bg-[#2F80ED] text-[#002453]"}  rounded-full w-full block py-0.5 px-3`}
                  >
                    {" "}
                    {patients.status}
                  </span>
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.lastAppointment}
                </td>
                <td className="text-[17px] font-normal text-[#1D1D1D] capitalize">
                  {patients.nextAppointment}
                </td>
                <td className="flex justify-center items-center h-16 cursor-pointer">
                  {patients.options}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
