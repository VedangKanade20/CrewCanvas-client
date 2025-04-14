import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight-new";

import { BottomGradient } from "../Auth/LoginFormCard";
import { FloatingIcons } from "./FloatingIcons";
import { Highlight } from "../ui/hero-highlight";

export default function HeroSectionOne() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div
            ref={sectionRef}
            className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center font-custom-2"
        >
            <Spotlight />
            <div className="px-4 py-10 md:py-20 mt-16">
                <FloatingIcons />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 mx-auto max-w-4xl text-center leading-[1.15] text-3xl font-extrabold max-md:w-full text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
                >
                    {`Where Teams Create, Collaborate, and Conquer Together`
                        .split(" ")
                        .map((word, index) => {
                            const isHighlighted = word === "Collaborate,";
                            return (
                                <motion.span
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        filter: "blur(4px)",
                                        y: 10,
                                    }}
                                    animate={
                                        isInView
                                            ? {
                                                  opacity: 1,
                                                  filter: "blur(0)",
                                                  y: 0,
                                              }
                                            : {}
                                    }
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                    }}
                                    className="mr-2 inline-block"
                                >
                                    {isHighlighted ? (
                                        <Highlight className="text-black dark:text-white">
                                            {word}
                                        </Highlight>
                                    ) : (
                                        word
                                    )}
                                </motion.span>
                            );
                        })}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                >
                    CollabSpace brings your team's ideas to life with real-time
                    collaboration tools, interactive whiteboards, voice calling,
                    and project management—all in one seamless workspace.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="group/btn w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5  dark:border-gray-700 dark:bg-transparent dark:text-white group">
                        Learn More
                        <BottomGradient />
                    </button>
                    <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-500">
                        Explore Now
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="relative mt-20 flex justify-center items-center rounded-3xl border border-neutral-200 bg-neutral-100 p-2 shadow-md dark:border-neutral-800 dark:bg-neutral-900 z-0"
                >
                    <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 flex justify-center items-center">
                        <img
                            src="/image.png"
                            alt="Landing page preview"
                            className="w-full object-cover h-[400px] md:h-auto"
                            height={1000}
                            width={1000}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
