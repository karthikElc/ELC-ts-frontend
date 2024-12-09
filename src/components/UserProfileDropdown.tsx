import { User, Lock, LogOut } from "lucide-react";
import userprofle from "../assets/userprofile.png";
// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export function UserProfileDropdown() {
    const navigate=useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <div>
            <img src={userprofle} className="w-full h-12 rounded-full" alt="" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2" />
          <span
            onClick={() => navigate("/profile")}
            className="text-base font-semibold"
          >
            Profile
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lock className="w-4 h-4 mr-2" />
          <span
            onClick={() => navigate("/changepassword")}
            className="text-base font-semibold"
          >
            Change Password
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2 text-red-500" />
          <span className="text-base font-semibold text-red-500">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
