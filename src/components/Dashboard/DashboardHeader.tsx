import React from "react";
import {
    Home,
    Search,
    Bell,
    HelpCircle,
    Moon,
    ChevronDown,
} from "lucide-react";

const DashboardHeader: React.FC = () => {
    return (
        <header className=" w-full flex items-center justify-between px-6 py-3 bg-[#0e0e10] text-white shadow-sm">
            {/* Left Section: Logo + Nav */}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-purple-500">
                    CollabSpace
                </span>
                <div className="flex items-center ml-6 gap-1 text-white hover:text-purple-500 cursor-pointer">
                    <Home className="w-5 h-5" />
                    <span className="text-md font-medium">Dashboard</span>
                </div>
            </div>

            {/* Right Section: Icons + Profile */}
            <div className="flex items-center gap-4">
                <Search className="w-5 h-5 hover:text-purple-500 cursor-pointer" />
                <div className="relative">
                    <Bell className="w-5 h-5 hover:text-purple-500 cursor-pointer" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-purple-500 rounded-full"></span>
                </div>
                <HelpCircle className="w-5 h-5 hover:text-purple-500 cursor-pointer" />
                <Moon className="w-5 h-5 hover:text-purple-500 cursor-pointer" />

                {/* Profile Section */}
                <div className="flex items-center gap-2 ml-4 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    <span className="font-medium text-md text-white">
                        John Doe
                    </span>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
