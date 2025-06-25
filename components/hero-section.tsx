"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FloatingIcons } from "@/components/floating-icons";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.3,
            },
        },
    };

    return (
        <section className="relative pt-24 pb-16 overflow-hidden mt-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background -z-10" />
            <FloatingIcons />

            <div className="container relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="flex flex-col items-center justify-center text-center  mx-auto"
                >
                    <motion.div variants={itemVariants} className="space-y-2">
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                            Collaboration Reimagined
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-extrabold  mt-6 mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent max-w-4xl"
                    >
                        Where Teams Create, Collaborate, and Conquer Together
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-8"
                    >
                        CollabSpace brings your team's ideas to life with
                        real-time collaboration tools, interactive whiteboards,
                        voice calling, and project management—all in one
                        seamless workspace.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <Button size="lg" className="group">
                            Start for free
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Watch demo
                        </Button>
                    </motion.div>

                    <motion.div
                        variants={imageVariants}
                        className="relative w-[60vw]  mx-auto rounded-xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay pointer-events-none z-10 rounded-xl" />

                        <div className="  rounded-xl overflow-hidden border border-border  w-full h-[60vh]">
                            <div className="w-full h-full bg-background rounded-t-xl">
                                <div className="h-8 bg-muted border-b border-border flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 h-5 w-64 bg-muted-foreground/20 rounded-full" />
                                </div>
                                <div className="flex h-[calc(100%-2rem)]">
                                    <Image
                                        src={"/images/heroImage.png"}
                                        width={1300}
                                        height={100}
                                        alt="heroImage"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="flex justify-center mt-16">
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                        }}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => {
                                document
                                    .getElementById("features")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <ChevronDown className="h-6 w-6" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
