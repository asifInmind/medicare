"use client";
import React from "react";
import Path from "../../../components/Path";
import { usePathname } from "next/navigation";
export default function Addpatients() {
  const pathname = usePathname();
  return (
    <>
      <Path path={pathname} />
      <div className="h-auto md:h-18 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-0 bg-white rounded-[5px] px-4 py-4 md:py-0 my-2 mb-10 items-start md:items-center">
        <div>
          <p className="font-medium text-[21px] capitalize">add new patients</p>
        </div>
        <div className="flex gap-5 items-center w-full md:w-auto">
          <button className="flex-1 md:flex-none md:w-19.25 h-10.25 px-5 flex justify-center items-center py-1 cursor-pointer text-center border border-[#0000AC] rounded-[5px] font-medium text-[16px]">
            cancel
          </button>
          <button className="flex-1 md:flex-none md:w-19.25 h-10.25 px-5 flex justify-center items-center py-1 cursor-pointer text-center text-white bg-[#0000AC] rounded-[5px] font-medium text-[16px]">
            save
          </button>
        </div>
      </div>
      <section className="w-full lg:w-195.75 mx-auto bg-white py-6 px-5 md:py-11 md:px-14.5">
        <form action="" method="">
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <label
              htmlFor="recordnumber"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Record number
            </label>
            <div>
              <p className="text-[18px] text-[#333333]">
                Record number will be assigned automatically when you save.
              </p>
              <button className="w-38 h-11 py-1.75 px-2.75 border text-[#333333] font-bold text-[18px] rounded-[5px] mt-2 border-[#E0E0E0]">
                assign manually
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="forename"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Forename
            </label>
            <input
              className="border border-[#E0E0E0] w-full md:w-115.5 h-10.25 px-3 my-2 md:my-4 rounded-[5px]"
              type="text"
              name="forename"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="surname"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Surname
            </label>
            <input
              className="border border-[#E0E0E0] px-3 w-full md:w-115.5 h-10.25 my-2 md:my-4 rounded-[5px]"
              type="text"
              name="surname"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="surname"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Date of birth
            </label>
            <input
              className="border border-[#E0E0E0] rounded-[5px] w-full md:w-115.5 h-10.25 my-2 md:my-4 px-4"
              type="date"
              name="date"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Sex
            </label>
            <div className="w-full md:w-115.5 my-2 md:my-8">
              <span className="inline-block w-20.75 h-11 cursor-pointer hover:bg-[#0000AC] hover:text-white rounded-[5px] bg-[#E0E0E0] text-[16px] py-3 px-4 capitalize me-4 text-center">
                male
              </span>
              <span className="inline-block w-20.75 h-11 cursor-pointer hover:bg-[#0000AC] hover:text-white rounded-[5px] bg-[#E0E0E0] text-[16px] py-3 px-4 capitalize me-4 text-center">
                Female
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="diagnosis"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Diagnosis
            </label>
            <input
              className="border px-3 border-[#E0E0E0] w-full md:w-115.5 h-10.25 my-2 md:my-4 rounded-[5px]"
              type="text"
              name="diagnosis"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <label
              htmlFor="notes"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Notes
            </label>
            <textarea
              name="notes"
              id=""
              className="border p-3 border-[#E0E0E0] w-full md:w-115.5 h-35.25 my-2 md:my-4 rounded-[5px]"
            ></textarea>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="phone"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Phone Number
            </label>
            <input
              className="border px-3 border-[#E0E0E0] w-full md:w-115.5 h-10.25 my-2 md:my-4 rounded-[5px]"
              type="tel"
              name="phone"
            />
          </div>
        </form>
      </section>
    </>
  );
}
