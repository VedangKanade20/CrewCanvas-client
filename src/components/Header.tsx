import { useEffect, useState } from "react";

import { BottomGradient } from "./LoginFormCard";
const Header: React.FC = () => {
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        document.onclick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    return (
        <nav
            className={` pb-5 md:text-sm flex items-center justify-center mt-16 z-50 ${
                state
                    ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 "
                    : ""
            }`}
        >
            <div
                className="fixed gap-x-14 items-center w-full max-w-[75%] border border-[#27272A] bg-transparent/30 backdrop-blur-sm rounded-xl mx-auto md:flex md:px-8"
                style={{
                    WebkitBackdropFilter: "blur(4px)",
                    backdropFilter: "blur(4px)",
                }}
            >
                <div className="flex items-center justify-between py-5 md:block">
                    {/* logo here */}
                    {/* <a href="javascript:void(0)">
                        <img
                            src="https://www.floatui.com/logo.svg"
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a> */}
                    <div className=" text-2xl font-custom italic font-semibold bg-gradient-to-l from-purple-300  to-blue-400 bg-clip-text text-transparent">
                        CrewCanvas
                    </div>
                    <div className="md:hidden">
                        <button
                            className="menu-btn text-white hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                        state ? "block" : "hidden"
                    } `}
                >
                    <div className="flex-1 gap-x-2 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 ">
                        <a
                            className="group/btn relative py-[9px] px-5 rounded-md  font-medium text-white hover:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  hover:dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center group"
                            href=""
                        >
                            Log In
                            <svg
                                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <BottomGradient />
                        </a>
                        <a
                            className="group/btn relative py-[9px] px-5 rounded-md bg-[#27272A] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center group"
                            href=""
                        >
                            Sign Up
                            <svg
                                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <BottomGradient />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
