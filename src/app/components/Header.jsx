"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/signup");
  };

  const d = new Date();
  const formattedDate = `${d.getDate()} ${d.toLocaleString("en-US", { month: "long" })}, ${d.getFullYear()}`;

  return (
    <>
      <header className="h-23.5 border-b bg-white border-[#E0E0E0] flex justify-between md:justify-start items-center gap-2 px-4 md:px-0">
        {/* LOGO SECTION - Always visible, handles shrinking on mobile */}
        <section className="md:border-r md:border-b border-[#E0E0E0] w-40 md:w-54 shrink-0 h-23.5 flex justify-center items-center">
          <Image
            src={"/icons/logo.svg"}
            alt="website logo"
            width={100}
            height={100}
            className="w-[88%]"
          />
        </section>

        {/* DESKTOP CONTAINER - Hidden on mobile screens (`hidden md:flex`) */}
        <section className="hidden md:flex justify-between w-full px-5 gap-3">
          <div className="w-138 my-auto">
            <div className="border border-[#E0E0E0] rounded-md flex justify-between items-center px-2 h-10.25">
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
            <div className="h-10.25 border border-[#E0E0E0] rounded-lg text-[16px] flex justify-center items-center p-2">
              {formattedDate}
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

        {/* MOBILE HAMBURGER BUTTON - Visible only on small devices */}
        <button
          onClick={() => setIsOpen(true)}
          className="block md:hidden p-2 text-[#1D1D1D] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      {/* MOBILE SLIDE-OUT DRAWER FROM RIGHT SIDE */}
      <div
        className={`fixed inset-0 z-50 transition-visibility duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-40" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Panel Trigger */}
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsOpen(false)} className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Profile Context Info */}
          <div className="flex flex-col items-start border-b border-[#E0E0E0] pb-4 mb-4">
            <span className="text-[16px] font-normal text-gray-600">Jhon</span>
            <span className="font-semibold text-[18px]">General doctor</span>
          </div>

          {/* Date display formatted inside the drawer */}
          <div className="border border-[#E0E0E0] rounded-lg text-[14px] px-3 py-2 text-center text-gray-700 bg-gray-50 mb-6">
            {formattedDate}
          </div>

          {/* Inline search bar for small screens */}
          <div className="border border-[#E0E0E0] rounded-md flex justify-between items-center px-2 h-10.25 mb-8">
            <input
              type="search"
              className="w-full py-1 text-sm border-0 outline-0"
              placeholder="Search..."
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>

          {/* Icon interaction row */}
          <div className="mt-auto flex justify-around border-t border-[#E0E0E0] pt-6">
            <span className="cursor-pointer text-gray-600 hover:text-black">
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
            <span className="cursor-pointer text-gray-600 hover:text-black">
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
            <span
              className="cursor-pointer text-gray-600 hover:text-black"
              onClick={() => {
                setIsOpen(false);
                handleNavigation();
              }}
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
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
