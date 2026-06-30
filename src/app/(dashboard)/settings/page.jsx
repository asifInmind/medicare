"use client";
import React from "react";
import Path from "../../components/Path";
import { usePathname } from "next/navigation";

export default function Settings() {
  const pathname = usePathname();
  return (
    <>
      <Path path={pathname} />
      <div className="h-18 w-full flex justify-between  bg-white rounded-[5px] px-4 my-2 mb-10  items-center">
        <div>
          <p className="font-medium text-[21px]">Settings</p>
        </div>
        <div className="flex gap-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 p-2 rounded-md w-[45px] h-[45px]  border border-[#E0E0E0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
