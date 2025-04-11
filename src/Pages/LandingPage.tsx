import FeatureSection from "@/components/FeatureSection";
import HeroSectionOne from "@/components/HeroSection";
import LabelButton from "@/components/Label-button";
import { Divider } from "@heroui/react";
const LandingPage = () => {
    return (
        <>
            <HeroSectionOne />

            <div className="p-2 rounded-full border border-[#171717] flex justify-center items-center translate-y-2 animate-bounce">
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
                    className="text-white lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </div>
            <Divider className="w-[80%] h-1 bg-gradient-to-r from-purple-800/10 to-blue-400/10 mb-10" />
            <LabelButton label={"Features"} />
            <FeatureSection/>
        </>
    );
};

export default LandingPage;
