import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { PiEyeClosedFill } from "react-icons/pi";

interface FormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordfrom: FC = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const newPasswordValue = watch("newPassword");

  const handleResetPassword = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center mt-8 min-h-[95%]">
      <form
        onSubmit={handleSubmit(handleResetPassword)}
        className="w-full max-w-md p-6 rounded"
      >
        <h2 className="mb-4 text-3xl font-semibold"><IoMdArrowRoundBack className="inline-flex mb-2 text-3xl font-bold"/> Reset Password</h2>
        

        {/* Old Password Input */}
        <div className="relative mt-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Old Password
          </label>
          <input
            {...register("oldPassword", {
              required: "Old password is required.",
            })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
            type={showOldPassword ? "text" : "password"}
            placeholder="Enter old password"
          />
          <div
            className="absolute font-bold text-black cursor-pointer right-4 top-10"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? <FaRegEye /> : <PiEyeClosedFill />}
          </div>
          {errors.oldPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        {/* New Password Input */}
        <div className="relative mt-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            New Password
          </label>
          <input
            {...register("newPassword", {
              required: "New password is required.",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  "Password must contain at least 8 characters, including one letter, one number, and one special character.",
              },
            })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter new password"
          />
          <div
            className="absolute font-bold text-black cursor-pointer right-4 top-10"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <FaRegEye /> : <PiEyeClosedFill />}
          </div>
          {errors.newPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="relative mt-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: "Confirm password is required.",
              validate: (value) =>
                value === newPasswordValue || "Passwords do not match.",
            })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm new password"
          />
          <div
            className="absolute font-bold text-black cursor-pointer right-4 top-10"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaRegEye /> : <PiEyeClosedFill />}
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Reset Password Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 mt-6 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordfrom;
