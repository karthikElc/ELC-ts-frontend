import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const ForgotPasswordForm: React.FC = () => {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const navigate = useNavigate();

  const Handlelogin: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
    reset();
    navigate("/overview");
  };


  return (
    <div className="flex  justify-center mt-8  min-h-[95%] ">
      <form
        onSubmit={handleSubmit(Handlelogin)}
        className="w-full max-w-md p-6 rounded"
      >
        <h2 className="mb-4 text-4xl font-semibold">Forgot Password?</h2>
        <p className="mb-6 text-gray-600 me-6">
          Enter the email address associated with your account.
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
        {/* <div className="relative mt-4">
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
        </div> */}
        {/* Remember Me and Forgot Password */}
        {/* <div className="flex items-center justify-between mb-4">
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
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Send Email
        </button>

        {/* Terms and Conditions */}
        <p className="mt-4 text-sm text-center text-gray-500">
          <Link
            to={"/"}
            className="mx-1 text-center text-red-500 hover:underline"
          >
            Sign in
          </Link>
          with email and password
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
