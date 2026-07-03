"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
export default function ForgotPassword() {
  const router = useRouter();

  return (
    <>
      <div className=" z-50  p-4">
        <div className="absolute inset-0 " />

        <div className="relative w-full max-w-md bg-white rounded-xl  p-6  z-10 transform transition-all flex flex-col">
          <div className=" mb-5">
            <h3 className="font-semibold text-[26px] text-[#1D1D1D]">
              Forgot Password
            </h3>
            <p className="text-gray-600">
              Provide the email address associated with your account we will
              send you a 6 digit OPT on your email{" "}
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[14px] font-medium text-[#828282]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your registerd email"
                className="w-full px-3 h-15.25 border border-[#E0E0E0] rounded-md outline-none text-[15px] text-[#1D1D1D] focus:border-[#0000AC] transition-colors"
              />
            </div>

            <div className="pt-3 flex justify-center gap-3">
              <button
                type="submit"
                className="px-4  w-full py-2 bg-[#0000AC] text-white rounded-md text-[16px] uppercase font-medium hover:bg-opacity-90 cursor-pointer transition-colors"
              >
                get otp
              </button>
            </div>
            <div className="pt-3">
              <Link
                href={"/login"}
                className="px-4 text-start w-full block py-2  text-blue-400 rounded-md text-[16px]  font-medium hover:bg-opacity-90 cursor-pointer transition-colors"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
