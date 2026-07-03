"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import StatusModal from "../../components/StatusModel";
import AuthUI from "../_components/AuthUI";

// 1. IMPORT YOUR LOADING COMPONENT (Ensure the path matches your project structure)
import Loading from "../../components/Loading";

// 2. DEFINE YOUR API URL (Ideally from environment variables)

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success",
    message: "",
    subMessage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = inputs;

    if (!email?.trim() || !password?.trim()) {
      setModal({
        isOpen: true,
        type: "error",
        message: "Validation Error",
        subMessage: "Please fill all input fields.",
      });
      return;
    }

    setLoading(true);

    try {
      const API_URL = "https://3000/api/login";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setModal({
          isOpen: true,
          type: "error",
          message: "Login Failed",
          subMessage: data.message || "An error occurred on the server.",
        });
        return;
      }

      // e.g., localStorage.setItem("token", data.token); or cookie management

      setModal({
        isOpen: true,
        type: "success",
        message: "SUCCESS",
        subMessage: "LoggedIn successfully.",
      });

      // 4. OPTIONAL: Redirect your user after a successful login
      // router.push("/dashboard"); (requires import from 'next/navigation')
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
    setInputs((prev) => ({
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
        <div className="w-full lg:max-w-136 bg-white p-8">
          <h1 className="text-[38px] font-normal capitalize">Welcome back</h1>
          <p className="font-medium text-[22px] text-[#4F4F4F] pb-3">
            Please enter your credentials
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-[16px] font-medium text-[#4F4F4F] pt-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="email address"
              value={inputs.email}
              onChange={handleChange}
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
              id="password"
              autoComplete="current-password"
              placeholder="**********"
              value={inputs.password}
              onChange={handleChange}
              className="w-full py-4 px-1 border-b border-[#828282] bg-none outline-0"
            />

            <p className="text-right pt-5">
              <Link href={"/forgotpassword"} className="text-blue-800">
                Forgot Password ?
              </Link>
            </p>

            <button
              className="font-normal text-[16px] bg-[#0000AC] text-white py-3.75 px-10.25 w-full rounded-[10px] mt-6 cursor-pointer disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loading
                  width="24px"
                  borderWidth="2px"
                  color="white"
                  text="logging In..."
                  textSize="text-sm"
                  textColor="text-white"
                />
              ) : (
                "login"
              )}
            </button>

            <p className="text-center pt-5">
              Don't have an account?{" "}
              <Link href={"/signup"} className="text-blue-800">
                signup
              </Link>
            </p>
          </form>
        </div>
        <AuthUI />
      </section>
    </>
  );
}
