import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
    color: string;
    icon: React.ReactElement; // More specific than ReactNode
    iconSize?: number; // Optional: size in px
    iconColor?: string; // Optional: color
}

const FeatureTabCard = (props: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col gap-10 justify-center items-center w-[35%] h-[320px] border border-[#363535] rounded-2xl max-md:w-full max-md:h-[290px] max-lg:w-2/3 max-lg:h-[300px] max-md:items-center duration-1000 ${props.color}`}
        >
            <div className="flex flex-col gap-10 justify-center items-center w-[90%] h-[270px] border border-[#363535] rounded-2xl max-md:w-[90%] max-md:h-[250px] max-lg:w-[90%] max-lg:h-[250px] bg-black duration-500 z-50">
                <div className="w-full h-full bg-card rounded-2xl p-4 flex flex-col justify-center items-center relative">
                    <div className="h-6 flex items-center gap-2 mb-4 absolute top-3 left-5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="ml-4 h-4 w-40 bg-muted-foreground/20 rounded-full" />
                    </div>
                    <div className="scale-200 ">{props.icon}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureTabCard;
