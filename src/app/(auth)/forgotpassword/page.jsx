import ForgotPassword from "../_components/ForgotPassword";
import OTPVerify from "../_components/OTPVerify";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import AuthUI from "../_components/AuthUI";
export default function Forgot() {
  const active = true;
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center items-start gap-0">
        <div className="w-full lg:max-w-136 bg-white p-8 ">
          {active ? <ForgotPassword /> : <OTPVerify />}
        </div>
        <AuthUI />
      </section>
    </>
  );
}
