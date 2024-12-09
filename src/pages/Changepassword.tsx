import { FC } from "react";
import login_bg from "../assets/login_bg2.png";
import ECL_logo from "../assets/ELC_NEW_LOGO.png";
import ForgotPasswordForm from "@/auth/forgotpasswordform";
import ChangePasswordfrom from "@/auth/changepasswordform";
const Changepassword: FC = () => {
  return (
    <div className="h-fit w-[90%] mx-auto">
      <div className="flex w-full h-screen ">
        <div className="hidden w-2/3 h-full md:block">
          <img src={login_bg} className="w-full h-full" alt="" />
        </div>
        <div className="flex items-center justify-center w-full h-full md:w-1/3">
          <div className="flex flex-col justify-start w-full gap-8">
            <div className="flex items-center justify-end ">
              <img src={ECL_logo} alt="" className="w-1/3 " />
            </div>
            <ChangePasswordfrom />
            <footer className=" text-end">
              <p className="text-sm text-gray-500 ">&copy; Jeevika 2024</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;
