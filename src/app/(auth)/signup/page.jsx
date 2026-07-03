"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import AuthUI from "../_components/AuthUI";
import Loading from "../../components/Loading";
import StatusModal from "../../components/StatusModel";
const bcrypt = require("bcryptjs");

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    message: "",
    subMessage: "",
  });

  const [inputs, setInput] = useState({
    username: "",
    email: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, designation, password, confirmPassword } = inputs;

    if (
      !username?.trim() ||
      !email?.trim() ||
      !designation?.trim() ||
      !password?.trim() ||
      !confirmPassword?.trim()
    ) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Validation Error",
        subMessage: "Please fill all input fields.",
      });
      return;
    }

    if (password !== confirmPassword) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Password Mismatch",
        subMessage: "Password and Confirm Password are not identical.",
      });

      // setModal({
      //   isOpen: true,
      //   type: "success",
      //   message: "SUCCESS",
      //   subMessage: "Your account has been successfully created.",
      // });
      return;
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log("hashpassword ", hashedPassword);

    setLoading(true);

    const API_URL = "http://localhost:3000/user";
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          designation,
          password: hashedPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setModal({
          isOpen: true,
          type: "error",
          message: "Registration Failed",
          subMessage: data.message || "An error occurred on the server.",
        });

        return;
      }

      setModal({
        isOpen: true,
        type: "success",
        message: "SUCCESS",
        subMessage: "Your account has been successfully created.",
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
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

      <section className="flex flex-col lg:flex-row justify-center items-start gap-0">
        <div className="w-full lg:max-w-136 bg-white p-8 ">
          <h1 className="text-[38px] font-normal capitalize">
            create an account
          </h1>
          <p className="font-medium text-[22px] text-[#4F4F4F] pb-3">
            Please enter your credentials
          </p>
          <form action="" onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              User Name
            </label>
            <input
              type="text"
              name="username"
              placeholder="your name "
              autoComplete="off"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              autoComplete="off"
              placeholder="email address"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />

            <label
              htmlFor="designation"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Designation
            </label>
            <input
              type="text"
              name="designation"
              autoComplete="off"
              onChange={handleChange}
              placeholder="e.g General Doctor"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />

            <label
              htmlFor="password"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              autoComplete="off"
              placeholder="**********"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />

            <label
              htmlFor="confirmPassword"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              autoComplete="off"
              placeholder="**********"
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />

            <button
              className="font-normal text-center text-[16px] bg-[#0000AC] text-white py-3.75 px-10.25 w-full rounded-[10px] mt-6 cursor-pointer flex justify-center items-center"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loading
                  width="24px"
                  borderWidth="2px"
                  color="white"
                  text="Creating Account..."
                  textSize="text-sm"
                  textColor="text-white"
                />
              ) : (
                "Signup"
              )}
            </button>
            <p className="text-center pt-5">
              Already have an account?
              <Link href={"/login"} className="text-blue-800">
                {" "}
                login
              </Link>
            </p>
          </form>
        </div>
        <AuthUI />
      </section>
    </>
  );
}
