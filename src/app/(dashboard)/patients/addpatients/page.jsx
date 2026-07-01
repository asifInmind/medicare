"use client";
import React from "react";
import Path from "../../../components/Path";
import { usePathname } from "next/navigation";
export default function Addpatients() {
  const pathname = usePathname();
  return (
    <>
      <Path path={pathname} />
      <div className="h-18 w-full flex justify-between  bg-white rounded-[5px] px-4 my-2 mb-10  items-center">
        <div>
          <p className="font-medium text-[21px] capitalize">add new patients</p>
        </div>
        <div className="flex gap-5 items-center">
          <button className="w-19.25 h-10.25 px-5 flex justify-center items-center py-1 cursor-pointer text-center border border-[#0000AC] rounded-[5px] font-medium text-[16px]">
            cancel
          </button>
          <button className="w-19.25 h-10.25 px-5 flex justify-center items-center py-1 cursor-pointer text-center text-white bg-[#0000AC] rounded-[5px] font-medium text-[16px]">
            save
          </button>
        </div>
      </div>
      <section className="w-full lg:w-195.75 mx-auto bg-white py-11 px-14.5">
        <form action="" method="">
          <div className="flex justify-between ">
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
          <div className="flex justify-between items-center">
            <label
              htmlFor="forename"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Forename
            </label>
            <input
              className="border border-[#E0E0E0] w-115.5 h-10.25 px-3 my-4 rounded-[5px]"
              type="text"
              name="forename"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="surname"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Surname
            </label>
            <input
              className="border border-[#E0E0E0] px-3 w-115.5 h-10.25  my-4 rounded-[5px]"
              type="text"
              name="surname"
            />
          </div>
          <div className="flex justify-between items-center ">
            <label
              htmlFor="surname"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Date of birth
            </label>
            <input
              className="border border-[#E0E0E0] px-3 rounded-[5px] w-115.5 h-10.25  my-4 rounded-[5px]j px-4"
              type="date"
              name="date"
            />
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Sex
            </label>
            <div className="w-115.5 my-8">
              <span className="w-20.75 h-11 cursor-pointer hover:bg-[#0000AC] hover:text-white rounded-[5px] bg-[#E0E0E0] text-[16px] py-3 px-4 capitalize me-4">
                male
              </span>
              <span className="w-20.75 h-11 cursor-pointer hover:bg-[#0000AC] hover:text-white rounded-[5px] bg-[#E0E0E0] text-[16px] py-3 px-4 capitalize me-4">
                Female
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="diagnosis"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Diagnosis
            </label>
            <input
              className="border px-3 border-[#E0E0E0] w-115.5 h-10.25 my-4 rounded-[5px]"
              type="text"
              name="diagnosis"
            />
          </div>
          <div className="flex justify-between ">
            <label
              htmlFor="notes"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Notes
            </label>
            <textarea
              name="notes"
              id=""
              className="border p-3 border-[#E0E0E0] w-115.5 h-35.25 my-4 rounded-[5px]"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="phone"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Phone Number
            </label>
            <input
              className="border px-3 border-[#E0E0E0] w-115.5 h-10.25 my-4 rounded-[5px]"
              type="tel"
              name="phone"
            />
          </div>
        </form>
      </section>
    </>
  );
}
