"use client";
import React from "react";
export default function NewAppointment({ onClose }) {
  return (
    <>
      <section className="w-190 bg-white mx-auto pb-9 rounded-[5px] my-10">
        <div className="flex justify-between items-center px-6 bg-[#0000AC] rounded-t-[5px] h-20.5">
          <span className="text-[22px] font-bold text-white">
            New Appointment
          </span>
          <span onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7 font-bold text-white cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

        <div className="p-8 flex justify-around items-start text-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mb-2 mx-auto text-[#2F80ED]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <h3 className="text-[#2F80ED] text-[18px]">PRACTITIONER</h3>
            <p className={"text-[#1D1D1D] text-[16px] py-3"}>John Doe</p>
            <p className={"text-[#1D1D1D] text-bold text-[16px] py-3"}>
              General Doctor
            </p>{" "}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mb-2 mx-auto text-[#2F80ED]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-[#2F80ED] text-[18px]">DATE AND TIME</h3>
            <p className={"text-[#1D1D1D] text-[16px] py-3"}>Tue, 26 October</p>
            <p className="text-bold text-[16px] py-3">9:00</p>
            <span className="text-[#2F80ED] text-[13px] cursor-pointer">
              Change
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-7 mb-2 mx-auto text-[#2F80ED]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <h3 className="text-[#2F80ED] text-[18px]">LOCATION</h3>
            <p className={"text-[#1D1D1D] text-[16px] py-3"}>General clinic</p>
            <p className={"text-[#1D1D1D] text-bold text-[16px] py-3"}>
              Room 1
            </p>{" "}
            <span className="text-[#2F80ED] text-[13px] cursor-pointer">
              Change
            </span>
          </div>
        </div>
        <section className="p-8">
          <div className="flex justify-between items-center">
            <label
              htmlFor="surname"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Patients
            </label>
            <input
              className="border border-[#E0E0E0] w-115.5 h-10.25 my-4 rounded-[5px]"
              type="text"
              name="patients"
            />
          </div>
          <div className="flex justify-between items-center ">
            <label
              htmlFor="notes"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              purpose of visit
            </label>
            <textarea
              name="visit"
              id=""
              className="border border-[#E0E0E0] w-115.5 h-35.25 my-4 rounded-[5px]"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Appointment Status
            </label>
            <div className="w-115.5  my-8">
              <span className="w-20.74 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                Confirmation required
              </span>
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                Confirmed
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Duration
            </label>
            <div className="w-115.5 my-8">
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                10
              </span>
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                30
              </span>
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                45
              </span>
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                60
              </span>
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                90
              </span>
              <span className="w-20.25 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                120
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Appointment type
            </label>
            <div className="w-115.5 my-8">
              <span className="w-20.75 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                first time
              </span>
              <span className="w-20.75 h-11 cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                follow up visit
              </span>
            </div>
          </div>
          <div className="flex justify-start gap-22 items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Online consultation
            </label>
            <div className="flex items-center gap-2 border border-[#eb5757] rounded-[5px] px-4 py-2 cursor-pointer bg-[#FAFAFA] text-[#EB5757] my-8 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-8 rounded-[5px] h-8 bg-[#eb5757] text-white font-bold p-1 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <span className="text-[26px] font-medium capitalize">No</span>
            </div>
          </div>
        </section>

        <div className="p-8">
          <div className="flex items-center gap-2 pb-2.5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-7 font-bold text-[#828282]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </span>
            <span className="font-bold text-[18px]">Send notifications</span>
          </div>
          <p className="text-16 text-[#333333] w-162.5">
            Appointment confirmation and reminder messages will be automatically
            sent to clinic SMS notification settings.
          </p>
        </div>
        <div className="flex justify-end gap-4 me-16 ">
          <button className="font-semibold capitalize cursor-pointer">
            cancel
          </button>
          <button className="w-44 h-11 cursor-pointer bg-[#0000AC]  text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
            begin Appointment
          </button>
          <button className="w-16.75 px-auto h-11 cursor-pointer border border-[#0000AC]  text-[#0000ac] rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
            save
          </button>
        </div>
      </section>
    </>
  );
}
