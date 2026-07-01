"use client";
import React, { useState } from "react";
import Path from "../../components/Path";
import { usePathname } from "next/navigation";

export default function Settings() {
  const pathname = usePathname();

  const [passwordForm, setPasswordForm] = useState(false);
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
            className="size-6 p-2 rounded-md w-11.25 h-11.25  border border-[#E0E0E0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white rounded-[5px] p-4">
        <h1 className="text-xl font-bold mb-3">Reset your password</h1>
        <button
          className="flex justify-center gap-2 items-center cursor-pointer text-blue-400"
          onClick={() => setPasswordForm(true)}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </span>{" "}
          <span> Change password</span>
        </button>
      </div>

      {passwordForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
          {/* onClick={() => setPasswordForm(false)} */}

          <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl p-6 border border-[#E0E0E0] z-10 transform transition-all flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-[18px] text-[#1D1D1D]">
                Change Password
              </h3>
              <button
                onClick={() => setPasswordForm(false)}
                className="text-[#828282] hover:text-[#1D1D1D] p-1 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="currentPassword"
                  className="text-[14px] font-medium text-[#828282]"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  placeholder="••••••••"
                  className="w-full px-3 h-10.25 border border-[#E0E0E0] rounded-md outline-none text-[15px] text-[#1D1D1D] focus:border-[#0000AC] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="newPassword"
                  className="text-[14px] font-medium text-[#828282]"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="••••••••"
                  className="w-full px-3 h-10.25 border border-[#E0E0E0] rounded-md outline-none text-[15px] text-[#1D1D1D] focus:border-[#0000AC] transition-colors"
                />
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setPasswordForm(false)}
                  className="px-4 py-2 border border-[#E0E0E0] rounded-md text-[14px] font-medium text-[#828282] hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0000AC] text-white rounded-md text-[14px] font-medium hover:bg-opacity-90 cursor-pointer transition-colors"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
