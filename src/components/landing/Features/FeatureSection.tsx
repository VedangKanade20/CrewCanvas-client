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



const sections = [
    {
        left: true,
        icon: (
            <PenTool className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] shadow-3xl transition duration-500 text-cyan-500 size-8 " />
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
            <NotebookPen className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] shadow-3xl transition duration-500 text-green-500 size-8 " />
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
            <ListTodo className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] transition shadow-3xl duration-500 text-yellow-500 size-8 " />
        ),
        title: "Smart Task Organizer",
        description:
            "Organize, prioritize, and manage your freelance projects effortlessly with our intuitive dashboard and productivity tools.",
        leftColor: "bg-yellow-500/20",
        rightColor: "bg-[#15120A]",
    },
    {
        left: false,
        icon: (
            <MessageCircleMore className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(200,100,100,1)] shadow-3xl transition duration-500 text-red-500/80 size-8 " />
        ),
        title: "Real-time Messaging",
        description:
            "Seamless communication between clients and freelancers with our integrated real-time chat system.",

        leftColor: "bg-[#371517]",
        rightColor: "bg-red-500/10",
    },
    {
        left: true,
        icon: (
            <Users className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(0,0,255,1)] transition shadow-3xl duration-500 text-blue-500 size-8 " />
        ),
        title: "Team Collaboration",
        description:
            "Invite teammates, assign tasks, and manage workflows together, all in one place.",
        leftColor: "bg-[#13213A]",
        rightColor: "bg-blue-500/15",
    },
    {
        left: false,
        icon: (
            <Mic className="drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_12px_rgba(255,0,255,1)] transition shadow-3xl duration-500 text-purple-500 size-8 " />
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
        <div className="flex flex-col gap-25">
            <div className="text-transparent w-full flex justify-center items-center flex-col gap-5 mb-10 max-lg:mb-5 max-md:mb-2 bg-gradient-to-r from-indigo-500 to-purple-500  bg-clip-text sm:flex  sm:items-center sm:justify-center ">
                <h1 className="text-5xl font-semibold text-center max-md:text-3xl">
                    Everything you need to collaborate
                </h1>
                <p className="text-lg text-neutral-400 mt-2 max-md:text-sm max-lg:text-md  text-center ms:px-[30%]">
                    CrewCanvas combines the best collaboration tools in one
                    seamless platform, helping your team work together more
                    effectively.
                </p>
            </div>
            {sections.map((sec) => (
                <div

                    className="flex gap-25 max-lg:flex-col justify-center items-center duration-500 max-lg:items-center max-md:items-center"

                >
                    {sec.left ? (
                        <>
                            <FeatureTabData
                                icon={sec.icon}
                                title={sec.title}
                                description={sec.description}
                                color={sec.leftColor}
                            />
                            <FeatureTabCard
                                color={sec.rightColor}
                                icon={sec.icon}
                                iconSize={40}
                            />
                        </>
                    ) : (
                        <>
                            <FeatureTabCard
                                color={sec.rightColor}
                                icon={sec.icon}
                                iconSize={40}
                            />
                            <FeatureTabData
                                icon={sec.icon}
                                title={sec.title}
                                description={sec.description}
                                color={sec.leftColor}
                            />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FeatureSection;
