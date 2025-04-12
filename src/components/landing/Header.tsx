import { useEffect, useState } from "react";
import { BottomGradient } from "../Auth/LoginFormCard";

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
            className={`pb-5 md:text-sm flex items-center justify-center z-50 ${
                state
                    ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
                    : ""
            }`}
        >
            <div
                className="fixed inset-x-0 mx-auto w-[90%] max-w-screen-xl md:px-8 border border-[#27272A] bg-transparent/30 backdrop-blur-sm rounded-xl flex flex-col md:flex-row items-center md:justify-between px-4 gap-x-6 md:gap-x-14"
                style={{
                    WebkitBackdropFilter: "blur(4px)",
                    backdropFilter: "blur(4px)",
                }}
            >
                <div className="flex items-center justify-between w-full py-5 md:w-auto">
                    <div className="text-2xl font-custom italic font-semibold bg-gradient-to-l from-purple-300 to-blue-400 bg-clip-text text-transparent">
                        CrewCanvas
                    </div>
                    <div className="md:hidden">
                        <button
                            className="menu-btn text-white hover:text-gray-600 duration-300 "
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <button className="border border-[#171717] hover:text-white  p-2 rounded-full hover:scale-110 duration-400 hover:rotate-90">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </button>
                            ) : (
                                <button className="border border-[#171717] hover:text-neutral-400  p-2 rounded-full hover:scale-115 duration-400 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M10 6h10" />
                                        <path d="M4 12h16" />
                                        <path d="M7 12h13" />
                                        <path d="M4 18h10" />
                                    </svg>
                                </button>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`w-full md:w-auto flex-1 items-center mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
                        state
                            ? "max-h-96 opacity-100 scale-100"
                            : "max-h-0 opacity-0 scale-95 overflow-hidden"
                    } md:flex md:max-h-full md:opacity-100 md:scale-100`}
                >
                    <div className="flex gap-x-4 max-md:pb-5 md:gap-x-4 w-full justify-center md:justify-end items-center">
                        <a
                            className="group/btn relative py-[9px] px-5 rounded-md font-medium text-white hover:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center justify-center"
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
                            className="group/btn relative py-[9px] px-5 rounded-md bg-[#27272A] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center justify-center"
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
