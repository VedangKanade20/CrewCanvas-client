const Footer = () => {
    return (
        <footer className="text-gray-500 bg-transparent py-5 w-full px-[12.5%] mx-auto md:px-8 relative ">
            <div className="my-8 h-[1px]  bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            <div className="mt-8 flex-col  items-center justify-between sm:flex max-md:text-center">
                <h1 className="text-gray-500 text-4xl font-custom-2 font-bold mb-6">
                    CrewCanvas
                </h1>

                <div className="mt-4 sm:mt-0 text-center max-md:text-center">
                    &copy; Crew Canvas 2025 UI All rights reserved.
                </div>
                {/* links for social */}
                <div className=" flex items-center gap-7 mt-10 max-md:justify-center">
                    <button className="border border-[#171717] hover:text-white p-3 rounded-full hover:scale-130 duration-400">
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
                            className="lucide lucide-github-icon lucide-github size-4"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </button>
                    <button className="border border-[#171717] hover:text-white  p-3 rounded-full hover:scale-130 duration-400 max-md:text-center">
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
                            className="lucide lucide-link-icon lucide-link size-4"
                        >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// //to be not coinsiderded
// <div className="mt-6 sm:mt-0">
//     <ul className="flex items-center space-x-4">
//         {/* Social Icons */}
//         {/* Twitter */}
//         <li className="w-10 h-10 border rounded-full flex items-center justify-center">
//             <a href="#">
//                 <svg
//                     className="svg-icon w-6 h-6 text-blue-400"
//                     viewBox="0 0 20 20"
//                 >
//                     <path fill="none" d="..." />
//                 </svg>
//             </a>
//         </li>

//         {/* Facebook */}
//         <li className="w-10 h-10 border rounded-full flex items-center justify-center">
//             <a href="#">
//                 <svg
//                     className="svg-icon w-6 h-6 text-blue-700"
//                     viewBox="0 0 20 20"
//                 >
//                     <path fill="none" d="..." />
//                 </svg>
//             </a>
//         </li>

//         {/* Dribbble */}
//         <li className="w-10 h-10 border rounded-full flex items-center justify-center">
//             <a href="#">
//                 <svg
//                     className="svg-icon w-6 h-6 text-blue-500"
//                     viewBox="0 0 20 20"
//                 >
//                     <path fill="none" d="..." />
//                 </svg>
//             </a>
//         </li>

//         {/* Pinterest */}
//         <li className="w-10 h-10 border rounded-full flex items-center justify-center">
//             <a href="#">
//                 <svg
//                     className="svg-icon w-6 h-6 text-red-600"
//                     viewBox="0 0 20 20"
//                 >
//                     <path fill="none" d="..." />
//                 </svg>
//             </a>
//         </li>
//     </ul>
// </div>;
