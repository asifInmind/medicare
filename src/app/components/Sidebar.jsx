"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { topNavLinks, bottomNavLinks } from "../../config/constents";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const navigateRoute = (url) => {
    router.push(url);
  };
  const textVariants = {
    open: {
      opacity: 1,
      width: "auto",
      display: "inline-block",
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
      width: 0,
      transitionEnd: { display: "none" },
      transition: { duration: 0.2 },
    },
  };

  const renderNavLinks = (links) => {
    return links.map((menu) => {
      const isActive = pathname === menu.navPath;
      return (
        <li
          key={menu.id}
          onClick={() => navigateRoute(menu.navPath)}
          className={`${menu.visibilityNone ? "invisible" : ""} relative flex justify-start items-center gap-2 my-1 py-2.5 px-4 -mx-4 cursor-pointer group overflow-hidden whitespace-nowrap transition-colors duration-200`}
        >
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 top-1.5 bottom-1.5 w-1.5 bg-[#0000AC] rounded-r-md"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <span
            className={`font-normal text-[12.69px] shrink-0 transition-colors duration-200 ${isActive ? "text-[#0000AC]" : "text-[#828282] group-hover:text-[#0000AC]"}`}
          >
            {menu.icon}
          </span>

          <motion.div
            variants={textVariants}
            animate={isOpen ? "open" : "closed"}
          >
            <Link
              href={menu.navPath}
              className={` font-normal text-[15.69px] transition-colors duration-200 ${isActive ? "text-[#0000AC] font-medium" : "text-[#828282] group-hover:text-[#0000AC]"}`}
            >
              {menu.navText}
            </Link>
          </motion.div>
        </li>
      );
    });
  };

  return (
    <motion.section
      animate={{ width: isOpen ? "216px" : "70px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative z-20 bg-white px-4 py-6 border-r border-b border-[#E0E0E0] h-full box-border select-none flex flex-col gap-4"
    >
      <div className="flex items-center  justify-between h-15 w-full  overflow-hidden">
        <motion.div
          animate={{ width: isOpen ? "130px" : "32px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden shrink-0 flex items-center   "
        >
          <Image
            src="/icons/logo.svg"
            alt="website logo"
            width={120}
            height={40}
            priority
            className="min-w-30 object-left object-contain"
          />
        </motion.div>
      </div>
      <div className="w-full h-px bg-gray-200 absolute left-0 top-23.25"></div>
      <ul className="border-b border-[#E0E0E0] pb-5   relative">
        <div className="h-5.5 flex w-full pt-5   justify-between items-center ">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-normal text-[12px] text-[#828282] uppercase whitespace-nowrap"
              >
                menu
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-blue-800   p-1 bg-[#F9F9F9] rounded-full transition-colors absolute -right-8 duration-200 shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-6 transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        {renderNavLinks(topNavLinks)}
      </ul>
      <div className="h-6 flex items-center">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-normal text-[12px] text-[#828282] uppercase whitespace-nowrap"
            >
              general
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <ul>{renderNavLinks(bottomNavLinks)}</ul>
    </motion.section>
  );
}
