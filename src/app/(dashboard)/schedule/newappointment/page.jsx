import React from "react";

export default function NewAppointment() {
  return (
    <>
      <section className="w-190 bg-white mx-auto">
        <div className="flex justify-between items-center px-6 bg-[#0000AC] h-[82px]">
          <span className="text-[22px] font-bold text-white">
            New Appointment
          </span>
          <span>
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
              className="border border-[#E0E0E0] w-[462px] h-[41px] my-4 rounded-[5px]"
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
              className="border border-[#E0E0E0] w-[462px] h-[141px] my-4 rounded-[5px]"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Appointment Status
            </label>
            <div className="w-[462px] my-8">
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                Confirmation required
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
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
            <div className="w-[462px] my-8">
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                10
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                30
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                45
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                60
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                90
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
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
            <div className="w-[462px] my-8">
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                first time
              </span>
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                follow up visit
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Online consultation
            </label>
            <div className="w-[462px] my-8">
              <span className="w-[83px] h-[44px] cursor-pointer hover:bg-[#0000AC] bg-[#FAFAFA] hover:text-white rounded-[5px]  text-[16px] py-3 px-4 capitalize me-4">
                No{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-7 font-bold  cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
