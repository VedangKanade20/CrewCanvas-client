import React from "react";
import { Home } from "lucide-react";
import { BottomGradient } from "../Auth/ForgotPasswordFormCard";

const DashboardHeader: React.FC = () => {
    return (
        <header className=" w-full flex items-center absolute top-1 justify-between px-6   bg-transparent text-white shadow-sm pt-4 ">
            {/* Left Section: Logo + Nav */}
            <div className="flex items-center gap-2">
                <div className="text-2xl font-custom italic font-semibold bg-gradient-to-l from-purple-300 to-blue-400 bg-clip-text text-transparent ">
                    CrewCanvas
                </div>
                <div className="flex items-center ml-15 gap-1 text-slate-300 p-2 rounded-xl px-3 cursor-pointer  hover:bg-[#131212]  group hover:-translate-y-0.5 duration-300">
                    <Home className="w-5 h-5" />
                    <span className="text-md font-medium">Dashboard</span>
                </div>
            </div>

            {/* Right Section: Icons + Profile */}
            <div className="flex items-center gap-4">
                {/* Profile Section */}
                <a
                    className="flex items-center gap-2 ml-4 cursor-pointer  p-1 rounded-xl px-3   hover:bg-[#0c0c0c]  hover:-translate-y-1 duration-300"
                    href="/"
                >
                    <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Profile"
                        className="size-10 rounded-full object-cover"
                    />
                    <span className="text-lg mt-1 text-slate-200 hover:text-slate-300">
                        John <span className="font-bold">Doe</span>
                    </span>
                    <BottomGradient />
                </a>
            </div>
        </header>
    );
};

export default DashboardHeader;
