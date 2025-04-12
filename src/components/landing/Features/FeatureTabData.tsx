import { BottomGradient } from "@/components/Auth/ForgotPasswordFormCard";
import { ReactNode } from "react";

interface props{
    icon: ReactNode;
    title: string;
    description: string;
    color:string
}

const FeatureTabData = (props: props) => {
    const css = props.color 
    return (
        <div className="w-1/2 flex flex-col gap-5  text-white items-start max-md:w-full max-lg:w-[85%]">
            <div className={`px-4 py-4 ${css} rounded-2xl text-[32px] flex justify-center items-center  z-50`}>
                {props.icon}
            </div>
            <h1 className="text-4xl font-semibold max-md:text-2xl">
                {props.title}
            </h1>
            <div className="max-md:text-sm text-[16px]">
                <p className="text-neutral-400 mb-2">{props.description}</p>

                <p className="text-neutral-400">{props.description}</p>
            </div>
            <a
                className={`group/btn relative py-[9px] px-5 rounded-md  font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center group `}
                href=""
            >
                Learn More
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
    );
};

export default FeatureTabData;
