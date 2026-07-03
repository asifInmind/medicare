"use client";
import React from "react";
import Path from "../../../components/Path";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
// Double check if your file is spelled StatusModel or StatusModal
import StatusModal from "../../../components/StatusModel";

// 1. DEFINE YOUR API URL HERE (Or import it from an env/config file)
const API_URL = "https://api.example.com/patients";

export default function Addpatients() {
  const pathname = usePathname();
  const router = useRouter();

  const backToPatients = () => {
    router.push("/patients");
  };
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    message: "",
    subMessage: "",
  });

  const [input, setInput] = useState({
    forename: "",
    surname: "",
    dob: "",
    sex: "",
    diagnosis: "",
    notes: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectSex = (value) => {
    setInput((prev) => ({
      ...prev,
      sex: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { forename, surname, dob, sex, diagnosis, notes, phone } = input;

    if (
      !forename?.trim() ||
      !surname?.trim() ||
      !dob?.trim() ||
      !sex?.trim() ||
      !notes?.trim() ||
      !phone?.trim() ||
      !diagnosis?.trim()
    ) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Error, Input fields missing",
        subMessage: "Please fill all input fields.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          forename,
          surname,
          dob,
          sex,
          diagnosis,
          notes,
          phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setModal({
          isOpen: true,
          type: "error",
          message: "Patients records Failed",
          subMessage: data.message || "An error occurred on the server.",
        });
        return;
      }

      setModal({
        isOpen: true,
        type: "success",
        message: "SUCCESS",
        subMessage: "New Patients has been successfully added.",
      });
    } catch (error) {
      console.error(error); // Good practice to log the actual error for debugging
      setModal({
        isOpen: true,
        type: "error",
        message: "Network Error",
        subMessage:
          "Unable to connect to the server. Please check your network.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Path path={pathname} />

      {/* 2. RENDER THE MODAL COMPONENT HERE SO IT ACTUALLY SHOWS UP */}
      <StatusModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.message}
        message={modal.subMessage}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />

      <form onSubmit={handleSubmit}>
        <div className="h-auto md:h-18 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-0 bg-white rounded-[5px] px-4 py-4 md:py-0 my-2 mb-10 items-start md:items-center">
          <div>
            <p className="font-medium text-[21px] capitalize">
              add new patients
            </p>
          </div>
          <div className="flex gap-5 items-center w-full md:w-auto">
            <button
              type="button"
              className="flex-1 md:flex-none md:w-19.25 h-10.25 px-5 flex justify-center items-center py-1 cursor-pointer text-center border border-[#0000AC] rounded-[5px] font-medium text-[16px]"
              onClick={backToPatients}
            >
              cancel
            </button>
            <button
              className="flex-1 md:flex-none md:w-19.25 h-10.25 px-5 flex justify-center items-center py-1 cursor-pointer text-center text-white bg-[#0000AC] rounded-[5px] font-medium text-[16px] disabled:opacity-50"
              type="submit"
              disabled={loading} // Prevent multiple submissions
            >
              {loading ? "saving..." : "save"}
            </button>
          </div>
        </div>

        {/* Rest of your input form section remains exactly the same */}
        <section className="w-full lg:w-195.75 mx-auto bg-white py-6 px-5 md:py-11 md:px-14.5">
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <label
              htmlFor="recordnumber"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Record number
            </label>
            <div>
              <p className="text-[18px] text-[#333333]">
                Record number will be assigned automatically when you save.
              </p>
              <button
                type="button"
                className="w-38 h-11 py-1.75 px-2.75 border text-[#333333] font-bold text-[18px] rounded-[5px] mt-2 border-[#E0E0E0]"
              >
                assign manually
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="forename"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Forename
            </label>
            <input
              className="border border-[#E0E0E0] w-full md:w-115.5 h-10.25 px-3 my-2 md:my-4 rounded-[5px]"
              type="text"
              name="forename"
              value={input.forename}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="surname"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Surname
            </label>
            <input
              className="border border-[#E0E0E0] px-3 w-full md:w-115.5 h-10.25 my-2 md:my-4 rounded-[5px]"
              type="text"
              name="surname"
              value={input.surname}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="dob"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Date of birth
            </label>
            <input
              className="border border-[#E0E0E0] rounded-[5px] w-full md:w-115.5 h-10.25 my-2 md:my-4 px-4"
              type="date"
              name="dob"
              value={input.dob}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="sex"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Sex
            </label>
            <div className="w-full md:w-115.5 my-2 md:my-8">
              <span
                onClick={() => handleSelectSex("male")}
                className={`inline-block w-20.75 h-11 cursor-pointer rounded-[5px] text-[16px] py-3 px-4 capitalize me-4 text-center select-none transition-colors ${
                  input.sex === "male"
                    ? "bg-[#0000AC] text-white"
                    : "bg-[#E0E0E0] text-black hover:bg-[#0000AC] hover:text-white"
                }`}
              >
                male
              </span>

              <span
                onClick={() => handleSelectSex("female")}
                className={`inline-block w-20.75 h-11 cursor-pointer rounded-[5px] text-[16px] py-3 px-4 capitalize me-4 text-center select-none transition-colors ${
                  input.sex === "female"
                    ? "bg-[#0000AC] text-white"
                    : "bg-[#E0E0E0] text-black hover:bg-[#0000AC] hover:text-white"
                }`}
              >
                Female
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="diagnosis"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Diagnosis
            </label>
            <input
              className="border px-3 border-[#E0E0E0] w-full md:w-115.5 h-10.25 my-2 md:my-4 rounded-[5px]"
              type="text"
              name="diagnosis"
              value={input.diagnosis}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <label
              htmlFor="notes"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Notes
            </label>
            <textarea
              name="notes"
              value={input.notes}
              onChange={handleChange}
              className="border p-3 border-[#E0E0E0] w-full md:w-115.5 h-35.25 my-2 md:my-4 rounded-[5px]"
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <label
              htmlFor="phone"
              className="text-[18px] font-normal text-[#4F4F4F]"
            >
              Phone Number
            </label>
            <input
              className="border px-3 border-[#E0E0E0] w-full md:w-115.5 h-10.25 my-2 md:my-4 rounded-[5px]"
              type="tel"
              name="phone"
              value={input.phone}
              onChange={handleChange}
            />
          </div>
        </section>
      </form>
    </>
  );
}
