"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Path from "./Path";
export default function Nodata({ icon, message }) {
  const pathname = usePathname();
  return (
    <>
      <Path path={pathname} />
      <section className="bg-white p-5 rounded-md h-70 flex flex-col justify-center items-center">
        <span>{icon}</span>
        <p className="h-10 font-bold text-gray-300 text-center text-[1rem] md:text-[3rem]">
          {message}
        </p>
      </section>
    </>
  );
}
