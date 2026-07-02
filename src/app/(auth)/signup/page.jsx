import Image from "next/image";
import React from "react";
import Link from "next/link";
import AuthUI from "../_components/AuthUI";

export default function Signup() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-start gap-0">
        <div className="w-full lg:max-w-136 bg-white p-8 ">
          <h1 className="text-[38px] font-normal capitalize">
            create an account
          </h1>
          <p className="font-medium text-[22px] text-[#4F4F4F] pb-3">
            Please enter your credentials
          </p>
          <form action="">
            <label
              htmlFor="username"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              User Name
            </label>
            <input
              type="text"
              name="username"
              placeholder="your name "
              autoComplete="off"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />
            <label
              htmlFor="email"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id=""
              autoComplete="off"
              placeholder="email address"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />
            <label
              htmlFor="designation"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Designation
            </label>
            <input
              type="text"
              name="designation"
              autoComplete="off"
              placeholder="e.g General Doctor"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />
            <label
              htmlFor="password"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id=""
              autoComplete="off"
              placeholder="**********"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />
            <label
              htmlFor="confirmPassword"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              {" "}
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="off"
              placeholder="**********"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />
            <button className="font-normal text-[16px] bg-[#0000AC] text-white py-3.75 px-10.25 w-full rounded-[10px] mt-6 cursor-pointer">
              submit
            </button>
            <p className="text-center pt-5">
              Already have an account?
              <Link href={"/login"} className="text-blue-800">
                {" "}
                login
              </Link>
            </p>
          </form>
        </div>
        <AuthUI />
      </section>
    </>
  );
}
