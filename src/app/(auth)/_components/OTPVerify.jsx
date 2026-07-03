"use client";
import React, { useRef, useState } from "react";

export default function OTPVerify() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value)) return false;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);

      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length < 6) return;

    console.log("Submitting Verified OTP Token:", finalOtp);
    // Execute your auth verify endpoints here
  };

  return (
    <>
      <div className=" z-50 flex justify-center items-center  p-4 ">
        <div className="relative w-full max-w-md bg-white rounded-xl  p-6  z-10 transform transition-all flex flex-col">
          <div className=" flex justify-center items-center mb-5">
            <h3 className="font-semibold  text-[14px] md:text-[26px] uppercase text-[#1D1D1D] tracking-wide">
              otp verification
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-[#828282] text-center">
                Enter your 6 digit OTP here
              </label>

              <div
                className="flex justify-center items-center gap-2 px-2"
                onPaste={handlePaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-10 h-10 md:w-12 md:h-12 text-center text-xl font-bold border border-[#E0E0E0] rounded-lg outline-none text-[#1D1D1D] bg-[#F9F9F9] focus:bg-white focus:border-[#0000AC] focus:ring-1 focus:ring-[#0000AC] transition-all duration-150 shadow-sm"
                  />
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-3">
              <button
                type="submit"
                disabled={otp.join("").length < 6}
                className="px-4 w-full h-11 bg-[#0000AC] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md text-[15px] uppercase font-semibold tracking-wider hover:bg-opacity-90 cursor-pointer transition-all active:scale-[0.99]"
              >
                verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
