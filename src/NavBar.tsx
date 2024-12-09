import { useState } from "react";
import { Button } from "./components/ui/button"; // Adjust the import path for your Button component
import {UserProfileDropdown} from "./components/UserProfileDropdown"; // Adjust the import path for your UserProfileDropdown component
import { useLocation, useNavigate } from "react-router-dom";
import  ELC_logo   from "./assets/ELC_NEW_LOGO.png"
const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 shadow-sm backdrop-blur-sm bg-slate-50 lg:px-8">
      {/* Container for alignment */}
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={ELC_logo} className="w-24 h-16" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}

        <div
          className={`absolute md:static top-16 left-0 w-full h-full md:w-auto bg-slate-50 md:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row md:w-auto md:gap-4">
            <Button
              onClick={() => navigate("/overview")}
              variant="ghost"
              className={`w-full max-w-[200px] px-4 py-2 text-lg font-bold outline-none md:w-auto md:px-6 md:py-3 md:text-lg hover:bg-purple-100 ${
                isActive("/overview") ? "bg-purple-300" : "bg-transparent"
              }`}
            >
              Overview
            </Button>
            <Button
              onClick={() => navigate("/employability")}
              variant="ghost"
              className={`w-full max-w-[200px] px-4 py-2 text-lg font-bold outline-none md:w-auto md:px-6 md:py-3 md:text-lg hover:bg-purple-100 ${
                isActive("/employability") ? "bg-purple-300" : "bg-transparent"
              }`}
            >
              My Employability
            </Button>
            <Button
              onClick={() => navigate("/skills")}
              variant="ghost"
              className={`w-full max-w-[200px] px-4 py-2 text-lg font-bold outline-none md:w-auto md:px-6 md:py-3 md:text-lg hover:bg-purple-100 ${
                isActive("/skills") ? "bg-purple-300" : "bg-transparent"
              }`}
            >
              My Skills
            </Button>
            <Button
              onClick={() => navigate("/knowledge")}
              variant="ghost"
              className={`w-full max-w-[200px] px-4 py-2 text-lg font-bold outline-none md:w-auto md:px-6 md:py-3 md:text-lg hover:bg-purple-100 ${
                isActive("/knowledge") ? "bg-purple-300" : "bg-transparent"
              }`}
            >
              My Knowledge
            </Button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="justify-end hidden md:flex">
          <UserProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
