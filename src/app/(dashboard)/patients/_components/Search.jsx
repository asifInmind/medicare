import { motion } from "framer-motion";
import React from "react";

export default function Search() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        //   className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center"
        className=" h-auto  py-5 md:h-14 w-full border border-gray-200 bg-white z-50  flex-col items-start md:flex-row gap-4 flex md:justify-between  rounded-[5px] shadow my-2 md:items-center"
      >
        <div className="w-full">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search here..."
            className="py-3.5 px-3 w-full bg-white outline-none text-[15px]  "
          />
        </div>
        {/* <div className="flex gap-2 md:gap-5 items-center">
          <span className="w-9 h-9 md:w-12 md:h-12 cursor-pointer border border-[#E0E0E0] rounded-[5px] flex justify-center items-center">
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
        </div> */}
      </motion.div>
    </>
  );
}
