import React, { useState } from "react";
import { API_ROUTES } from "../../config/api";
import StatusModal from "./StatusModel";
export default function AddNewTask({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    title: "",
    description: "",
    status: "pending",
    date: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    message: "",
    subMessage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description, status, date } = input;

    if (
      !title?.trim() ||
      !description?.trim() ||
      !status?.trim() ||
      !date?.trim()
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
      const response = await fetch(API_ROUTES.TASK.ADD_NEW_TASK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          status,
          date,
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
        subMessage: "New Task has been successfully added.",
      });
    } catch (error) {
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
    console.log("input values from add new task ", input);
  };

  return (
    <>
      <StatusModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.message}
        message={modal.subMessage}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
      <section className="bg-white w-full rounded-md">
        <div className="flex justify-between items-center px-4 md:px-6 bg-[#0000AC] rounded-t-[5px] h-20.5">
          <span className="text-[18px] md:text-[22px] font-bold text-white">
            Add New Task
          </span>
          <span onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 font-bold text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="p-6 w-180">
            <label
              htmlFor="date"
              className="text-[#585757] font-semibold block my-2"
            >
              Pick a Date
            </label>
            <input
              type="date"
              name="date"
              value={input.date}
              id=""
              className="w-full border border-gray-200 p-3 rounded-md"
              onChange={handleChange}
            />
            <label
              htmlFor="title"
              className="text-[#585757] font-semibold block my-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={input.title}
              placeholder="Task heading..."
              className="w-full border border-gray-200 p-3 rounded-md"
              onChange={handleChange}
            />

            <label
              htmlFor="description"
              className="text-[#585757] font-semibold block my-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id=""
              value={input.description}
              className="w-full border border-gray-200 p-3 rounded-md"
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className=" bg-[#0000AC] text-white my-5 cursor-pointer py-3 px-6 rounded-md"
            >
              Add new task
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
