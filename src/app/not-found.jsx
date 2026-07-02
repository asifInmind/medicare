"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen  flex flex-col justify-center items-center px-4 select-none">
      <div className="text-center max-w-md w-full  p-8 rounded-xl  flex flex-col items-center">
        {/* Healthcare Context Icon */}
        <div className="w-16 h-16 bg-blue-50 text-[#0000AC] rounded-full flex justify-center items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        {/* Big Error Code */}
        <h1 className="text-7xl font-bold text-[#0000AC] tracking-tight mb-2">
          404
        </h1>

        {/* Informative Error Message */}
        <h2 className="text-xl font-semibold text-[#1D1D1D] mb-3">
          Medical Record or Page Not Found
        </h2>

        <p className="text-sm text-[#828282] leading-relaxed mb-8">
          The dashboard link or patient URL you are trying to view doesn't
          exist, has been archived, or you may type constraints incorrectly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/dashboard"
            className="flex-1 h-11 flex justify-center items-center rounded-md bg-[#0000AC] text-white text-sm font-medium shadow-sm hover:bg-[#00008b] active:scale-[0.99] transition-all duration-200"
          >
            Return to Dashboard
          </Link>

          <button
            type="button"
            onClick={() => globalThis?.history?.back()}
            className="flex-1 h-11 flex justify-center items-center rounded-md border border-[#E0E0E0] bg-white text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-50 active:scale-[0.99] transition-all duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
