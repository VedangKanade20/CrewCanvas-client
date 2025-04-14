"use client";

import { motion } from "framer-motion";
import {
    PenTool,
    NotebookPen,
    ListTodo,
    MessageCircleMore,
    Users,
    Mic,
} from "lucide-react";
import FeatureTabCard from "./FeatureTabCard";
import FeatureTabData from "./FeatureTabData";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const sections = [
    {
        left: true,
        icon: (
            <PenTool className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300 text-cyan-500 size-8 " />
        ),
        title: "AI-Powered Task Matching",
        description:
            "Our system uses advanced algorithms to match freelancers with tasks based on their skills, availability, and past performance, ensuring the best fit for every job.",
        leftColor: "bg-[#082B33]",
        rightColor: "bg-[#091215]",
    },
    {
        left: false,
        icon: (
            <NotebookPen className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300 text-green-500 size-8 " />
        ),
        title: "Verified Reviews & Ratings",
        description:
            "Build trust with a transparent review system. All feedback is verified to ensure authenticity and maintain high service standards.",
        leftColor: "bg-[#0E2E1A]",
        rightColor: "bg-[#0B130F]",
    },
    {
        left: true,
        icon: (
            <ListTodo className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300 text-white size-8 " />
        ),
        title: "Smart Task Organizer",
        description:
            "Organize, prioritize, and manage your freelance projects effortlessly with our intuitive dashboard and productivity tools.",
        leftColor: "bg-[#362B0B]",
        rightColor: "bg-[#15120A]",
    },
    {
        left: false,
        icon: (
            <MessageCircleMore className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300 text-white size-8 " />
        ),
        title: "Real-time Messaging",
        description:
            "Seamless communication between clients and freelancers with our integrated real-time chat system.",

        leftColor: "bg-[#371517]",
        rightColor: "bg-[#150C0D]",
    },
    {
        left: true,
        icon: (
            <Users className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300 text-white size-8 " />
        ),
        title: "Team Collaboration",
        description:
            "Invite teammates, assign tasks, and manage workflows together, all in one place.",
        leftColor: "bg-[#13213A]",
        rightColor: "bg-[#0C1016]",
    },
    {
        left: false,
        icon: (
            <Mic className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition duration-300 text-white size-8 " />
        ),
        title: "Voice Commands",
        description:
            "Control your workflow with voice-enabled actions for a hands-free productivity boost.",
        leftColor: "bg-purple-950/50",
        rightColor: "bg-purple-950/15",
    },
];

const FeatureSection = () => {
    return (
        <div className="flex flex-col gap-32">
            {sections.map((sec, i ) => (
                <motion.div
                    key={i}
                    className="flex gap-20 max-lg:flex-col justify-center items-center max-lg:items-start"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={i}
                >
                    {sec.left ? (
                        <>
                            <FeatureTabData
                                icon={sec.icon}
                                title={sec.title}
                                description={sec.description}
                                color={sec.leftColor}
                            />
                            <FeatureTabCard color={sec.rightColor} icon={sec.icon} iconSize={40} /> 
                        </>
                    ) : (
                        <>
                            <FeatureTabCard color={sec.rightColor} icon={sec.icon} iconSize={40} /> 
                            <FeatureTabData
                                icon={sec.icon}
                                title={sec.title}
                                description={sec.description}
                                color={sec.leftColor}
                            />
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default FeatureSection;
