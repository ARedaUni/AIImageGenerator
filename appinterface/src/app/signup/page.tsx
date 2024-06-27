"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Signup() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    avatar_url: "",
    username: "",
  });

  async function signUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userData)
    try {
      const response = await fetch("http://localhost:5001/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to sign in");
      }

     const { data, token } = await response.json();
     localStorage.setItem("userData", JSON.stringify(data));
      Cookies.set("jwtToken", token, { expires: 8 });
      router.push("/albums");

    } catch (error) {
      console.error("Sign in error:", error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h2 className="text-4xl" color="blue-gray">
          Sign Up
        </h2>
        <p color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </p>
        <form onSubmit={signUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <h6 color="blue-gray" className="-mb-3 text-base">
              Your Name<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              placeholder=""
              onChange={handleChange}
              className="border border-black focus:border-black rounded-md px-3 py-2"
              required
              name="name"
            />

            <h6 color="blue-gray" className="-mb-3 text-base">
              Username<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              placeholder=""
              onChange={handleChange}
              className="border border-black focus:border-black rounded-md px-3 py-2"
              required
              name="username"
            />

            <h6 color="blue-gray" className="-mb-3 text-base">
              Avatar.url<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              placeholder=""
              onChange={handleChange}
              className="border border-black focus:border-black rounded-md px-3 py-2"
              required
              name="avatar_url"
            />

            <h6 color="blue-gray" className="-mb-3 text-base">
              Your Email<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              placeholder="name@mail.com"
              onChange={handleChange}
              className="border border-black focus:border-black rounded-md px-3 py-2"
              required
              name="email"
            />

            <h6 color="blue-gray" className="-mb-3 text-base">
              Password<span className="text-red-600 ml-1">*</span>
            </h6>
            <input
              onChange={handleChange}
              type="password"
              placeholder="********"
              className="border border-black focus:border-black rounded-md px-3 py-2"
              required
              name="password"
            />
          </div>
          <div className="flex mt-3">
            <input
              type="checkbox"
              className="mr-4"
              id="myCheckbox"
              name="myCheckboxName"
              value="checkboxValue"
              required

            />
            <p color="gray" className="flex items-center mr-1 font-normal">
              I agree the
              <a
                href="#"
                className="font-medium ml-1 text-blue-600 hover:text-gray-900"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
          <button type="submit" className="mt-6 justify-end items-end">Sign Up</button>
          <p color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-gray-900">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
