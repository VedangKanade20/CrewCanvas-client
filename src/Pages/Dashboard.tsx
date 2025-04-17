import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import Sidebar from "@/components/Dashboard/SideBar";

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen h-screen relative">
            <div className="h-[9%] flex items-center justify-center ">
                <DashboardHeader />
            </div>
            <div className="h-[91%] w-full fixed left-0">
                <Sidebar />
            </div>
            <div
                className="min-h-[91%] absolute right-0 bg-gradient-to-br from-indigo-200 to-purple-200 w-[85%] p-10 text-white">
                
            </div>
        </div>
    );
};

export default Dashboard;
