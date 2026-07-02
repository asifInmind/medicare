"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function AuthUI() {
  const router = useRouter();
  const temporaryNavigate = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <div className="w-full lg:max-w-225 bg-[#0000AC] text-center">
        <h1 className="font-bold text-[25px] text-white mt-8 mb-4">
          ALL IN ONE DASHBOARD
        </h1>
        <Image
          src={"/images/Patients.svg"}
          alt="dashboard image"
          width={100}
          height={100}
          className="w-127.5 h-98.75 mx-auto"
        />
        <p className="text-[25px] text-white font-normal my-3">
          Keep track of all patient information in this section.
        </p>
        <button
          className="w-fit-content cursor-pointer rounded-[5px] h-12 text-center py-3 mb-25 my-2 px-10 text-[#0000AC] bg-white"
          onClick={temporaryNavigate}
        >
          view dashboard
        </button>
      </div>
    </>
  );
}
