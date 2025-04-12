import FeatureTabCard from "./FeatureTabCard";
import FeatureTabData from "./FeatureTabData";

const FeatureSection = () => {
    const Pen: React.ReactNode = (
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
            className="lucide lucide-pen-tool-icon lucide-pen-tool text-cyan-500 glow size-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300"
        >
            <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
            <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
            <path d="m2.3 2.3 7.286 7.286" />
            <circle cx="11" cy="11" r="2" />
        </svg>
    );
    const Notes: React.ReactNode = (
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
            className="lucide lucide-pen-tool-icon lucide-pen-tool text-[#22C55E] glow size-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300"
        >
            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
            <path d="M2 6h4" />
            <path d="M2 10h4" />
            <path d="M2 14h4" />
            <path d="M2 18h4" />
            <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
        </svg>
    );
    const Task: React.ReactNode = (
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
            className="lucide lucide-pen-tool-icon lucide-pen-tool text-[#EAB308] glow size-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
            <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
            <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
            <path d="M11 6l9 0" />
            <path d="M11 12l9 0" />
            <path d="M11 18l9 0" />
        </svg>
    );
    const Chat: React.ReactNode = (
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
            className="lucide lucide-pen-tool-icon lucide-pen-tool text-[#3B82F6] glow size-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
            <path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
        </svg>
    );
    const Team: React.ReactNode = (
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
            className="lucide lucide-pen-tool-icon lucide-pen-tool text-cyan-500 glow size-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M17 10h2a2 2 0 0 1 2 2v1" />
            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
    );
    const Voice: React.ReactNode = (
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
            className="lucide lucide-pen-tool-icon lucide-pen-tool text-cyan-500 glow size-8 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M8 21l8 0" />
            <path d="M12 17l0 4" />
        </svg>
    );
    return (
        <div className="flex flex-col gap-32">
            <div className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabData
                    icon={Pen}
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#082B33]"
                />
                <FeatureTabCard color="bg-[#091215]" />
            </div>
            <div className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabCard color="bg-[#0B130F]" />
                <FeatureTabData
                    icon={Notes}
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#0E2E1C]"
                />
            </div>{" "}
            <div className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabData
                    icon={Task}
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#362B0B]"
                />
                <FeatureTabCard color="bg-[#15120A]" />
            </div>
            <div className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabCard color="bg-[#0C1016]" />
                <FeatureTabData
                    icon={Chat}
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#13213A]"
                />
            </div>
            <div className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabData
                    icon={Team}
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#091215]"
                />
                <FeatureTabCard />
            </div>
            <div className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start ">
                <FeatureTabCard />
                <FeatureTabData
                    icon={Voice}
                    title="Amazing Feature"
                    description="This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand out. This is an amazing feature that provides great value to users. It enhances the overall experience and makes the product stand."
                    color="bg-[#091215]"
                />
            </div>
        </div>
    );
};

export default FeatureSection;
