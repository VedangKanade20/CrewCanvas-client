import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function ResetPasswordFormCard() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="shadow-input mx-auto w-full  max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-transparent border border-[#27272A] flex flex-col justify-between h-[60%] font-custom-2">
            <div>
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                    You can Reset your password
                </h2>
                <p className=" max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                    Reset your Crew canvas Account password:
                </p>
            </div>

            <form className="my-8 " onSubmit={handleSubmit}>
                {/* <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer> */}
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Confrim your Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                    />
                </LabelInputContainer>
                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-purple-700 to-blue-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]  dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Reset and Save &rarr;
                    <BottomGradient />
                </button>
                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
                //when a user does not wants to reset and wants to go back,
                ROUTING TO BE DONE LATER
                <p className=" max-w-sm text-sm text-white mb-1">
                    No need of Reset,{" "}
                    <span className="font-underline text-blue-500">
                        Create an account
                    </span>
                    :
                </p>
                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-purple-700 to-blue-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] -mb-5 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Reset &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

export const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
