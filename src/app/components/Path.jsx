import React from "react";

export default function Path({ path }) {
  return (
    <>
      <div className="h-14.25 w-full  flex justify-start gap-3 items-center">
        <p className="text-[17px] text-[#1D1D1D]"> {path} </p>
      </div>
    </>
  );
}
