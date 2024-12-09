import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";


interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
   const [showPassword, setShowPassword] = useState<boolean>(false);
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
   } = useForm<FormData>();
   const navigate = useNavigate()
    
    const Handlelogin :SubmitHandler<FormData>= (data:FormData) => { 
        console.log(data)
        reset()
        navigate("/overview")
    }
    
//   const validateForm = (): boolean => {
//     const newErrors: Errors = {};

//     if (!email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Enter a valid email.";
//     }

//     if (!password) {
//       newErrors.password = "Password is required.";
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent): void => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", { email, password });
//     }
//   };

  return (
    <div className="flex items-center justify-center mt-8 h-[95%] ">
      <form
        onSubmit={handleSubmit(Handlelogin)}
        className="w-full max-w-md p-6 rounded"
      >
        <h2 className="mb-4 text-3xl font-semibold">Log in</h2>
        <p className="mb-6 text-gray-600">
          Welcome back! Please enter your details.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Enter your email "
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="relative mt-4">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
          </div>
          <input
            {...register("password", {
              required: "Password is required.",
            })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
          />
          <div
            className="absolute font-bold text-black right-4 top-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <PiEyeClosedFill /> : <FaRegEye />}
          </div>
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2 border-gray-300 rounded" />
            Remember Me
          </label>
          <Link
            to={"/forgotpassword"}
            className="text-sm text-red-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Sign in
        </button>

        {/* Terms and Conditions */}
        <p className="mt-4 text-sm text-gray-500">
          By clicking on Sign in, you agree to Talisma’s{" "}
          <a href="#" className="text-red-500 hover:underline">
            Terms and Conditions of use
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
