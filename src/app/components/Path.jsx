import React from "react";
import Link from "next/link";
export default function Path({ path }) {
  return (
    <>
      <div className="h-14.25 w-full  flex justify-start gap-3 items-center">
        <p className="text-[17px] text-[#1D1D1D]">
          <Link href={path}>{path}</Link>{" "}
        </p>
      </div>
    </>
  );
}
