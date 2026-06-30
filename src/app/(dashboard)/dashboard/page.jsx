import React from "react";
import Path from "../../components/Path";
import Upcoming from "../../components/Upcoming";
import PatientStatsCard from "../../components/PatientStatsCard";
import Onlineconsultation from "../../components/Onlineconsultation";
import OfflineConsultationsCard from "../../components/OfflineConsultationsCard";

export default function Dashboard() {
  return (
    <>
      <div className="">
        <Path path={"Dashboard > summery"} />
      </div>
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg h-57">
          <OfflineConsultationsCard />
        </div>
        <div className="bg-white rounded-lg h-57">
          <Onlineconsultation />
        </div>
        <div className="bg-white rounded-lg h-57">
          <PatientStatsCard />
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4  py-4">
        <div className="col-span-2 bg-white rounded-lg h-152 p-4 relative ">
          <div className="flex justify-between">
            <h2 className="font-bold text-[15px]">Task</h2>
            <button className="text-[12px] cursor-pointer font-semibold text-[#0000AC] flex justify-between gap-2 items-center">
              New Task
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 border border-[#d2cccc] w-[20px] rounded-md h-[20px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between p-6 bg-[#FBFBFB] rounded-md my-[19px]">
            <div className="flex items-start gap-4">
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  id=""
                  className="w-[30px] cursor-pointer h-[30px]"
                />
              </div>
              <div>
                <h1 className="font-semibold mb-3 text-[15px]">
                  Task completed successfully
                </h1>
                <p className="text-[12px] font-normal">
                  Sign up for Covid - 19 training course for medicians
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <span className="pt-4 capitalize">23 oct 2025</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 border border-[#d2cccc] cursor-pointer w-[30px] rounded-md text-[#2F80ED] h-[30px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>

          <p className="flex justify-center items-center gap-1.5 cursor-pointer absolute bottom-5 text-[#0000AC] text-[12px] right-5">
            view all{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
        </div>

        <div className="col-span-1 bg-white rounded-lg h-152 p-6 overflow-y-scroll scrollbar-none relative">
          <Upcoming />
          <p className="flex justify-center items-center gap-1.5 cursor-pointer absolute bottom-5 text-[#0000AC] text-[12px] right-5">
            view all{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
