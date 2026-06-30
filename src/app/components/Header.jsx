"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/signup");
  };

  return (
    <>
      <header className="h-23.5 border-b bg-white border-[#E0E0E0] flex justify-start items-center gap-2">
        {/* CHANGED: Swapped w-[16%] for w-[216px] and added shrink-0 */}
        <section className="border-r border-b border-[#E0E0E0] w-54 shrink-0 h-23.5 flex justify-center items-center">
          <Image
            src={"/icons/logo.svg"}
            alt="website logo"
            width={100}
            height={100}
            className="w-[88%]"
          />
        </section>

        <section className="flex justify-between  w-full px-5 gap-3">
          <div className="w-138 my-auto">
            <div className="border border-[#E0E0E0] rounded-md flex justify-between items-center px-2 h-[41px]">
              <input
                type="search"
                className="w-full py-2 border-0 outline-0"
                placeholder="Search..."
              />
              <span>
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
          </div>
          <div className="flex justify-evenly gap-8 items-center">
            <div className="flex flex-col items-end">
              <span className="text-[16px] font-normal">Jhon</span>
              <span className="font-semibold text-[16px]">General doctor</span>
            </div>
            <div className="h-[41px] border border-[#E0E0E0] rounded-lg flex justify-center items-center p-2">
              <input type="date" name="date" id="" className="text-[16px]" />
            </div>
            <div className="flex gap-6">
              <span className="cursor-pointer">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <span className="cursor-pointer">
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
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </span>
              <span className="cursor-pointer" onClick={handleNavigation}>
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
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
