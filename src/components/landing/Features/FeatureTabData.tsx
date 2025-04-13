import { BottomGradient } from "@/components/Auth/ForgotPasswordFormCard";
import { ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";

interface props {
    icon: ReactNode;
    title: string;
    description: string;
    color: string;
}

const FeatureTabData = (props: props) => {
    const css = props.color;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-1/2 flex flex-col gap-5 text-white items-start max-md:w-full max-lg:w-[85%]"
        >
            <div
                className={`px-7  py-7 ${css}  rounded-2xl max-md:px-5 max-md:py-5 flex justify-center items-center z-50`}
            >
                {props.icon}
            </div>
            <h1 className="text-[46px] font-semibold max-md:text-2xl">
                {props.title}
            </h1>
            <div className="max-md:text-sm text-[18px]">
                <p className="text-neutral-400 mb-2">{props.description}</p>
                <p className="text-neutral-400">{props.description}</p>
            </div>
            <a
                className={`group/btn relative py-[9px] px-5 rounded-md font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center group`}
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
        </motion.div>
    );
};

export default FeatureTabData;
