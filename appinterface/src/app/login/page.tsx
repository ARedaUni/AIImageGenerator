"use client";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<{ message: string } | null>(null);
  const router = useRouter();

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const { data, token } = await response.json();
      localStorage.setItem("userData", JSON.stringify(data));
      Cookies.set("jwtToken", token, { expires: 8});
      router.push("/albums");
    } catch (error: any) {
      setError(error.message);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl">Login</h1>

        <form
          onSubmit={signIn}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <h6 color="blue-gray" className="-mb-3 text-base">
              Your Email<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              placeholder="name@mail.com"
              onChange={handleChange}
              className="border border-black focus:border-black rounded-md px-3 py-2"
              name="email"
              required
            />

            <h6 color="blue-gray" className="-mb-3 text-base">
              Password<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              onChange={handleChange}
              type="password"
              placeholder="********"
              className="border border-black focus:border-black rounded-md px-3 py-2"
              name="password"
              required
            />
          </div>
          <button type="submit" className="mt-6 justify-end items-end">
          Sign Up
        </button>
        </form>
       
        <p color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/signup" className="font-medium text-gray-900">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
