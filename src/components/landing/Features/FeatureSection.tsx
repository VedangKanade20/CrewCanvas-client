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
            <PenTool className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-white" />
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
            <NotebookPen className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-white" />
        ),
        title: "Verified Reviews & Ratings",
        description:
            "Build trust with a transparent review system. All feedback is verified to ensure authenticity and maintain high service standards.",
        leftColor: "bg-[#0E2E1C]",
        rightColor: "bg-[#0B130F]",
    },
    {
        left: true,
        icon: (
            <ListTodo className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-white" />
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
            <MessageCircleMore className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-white" />
        ),
        title: "Real-time Messaging",
        description:
            "Seamless communication between clients and freelancers with our integrated real-time chat system.",
        leftColor: "bg-[#13213A]",
        rightColor: "bg-[#0C1016]",
    },
    {
        left: true,
        icon: (
            <Users className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-white" />
        ),
        title: "Team Collaboration",
        description:
            "Invite teammates, assign tasks, and manage workflows together, all in one place.",
        leftColor: "bg-[#091215]",
        rightColor: "bg-[#091215]",
    },
    {
        left: false,
        icon: (
            <Mic className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] text-white" />
        ),
        title: "Voice Commands",
        description:
            "Control your workflow with voice-enabled actions for a hands-free productivity boost.",
        leftColor: "bg-[#091215]",
        rightColor: "bg-[#091215]",
    },
];

const FeatureSection = () => {
    return (
        <div className="flex flex-col gap-32">
            {sections.map((sec, i) => (
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
                            <FeatureTabCard color={sec.rightColor} />
                        </>
                    ) : (
                        <>
                            <FeatureTabCard color={sec.rightColor} />
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
