interface LabelButtonProps {
    label: string;
}

const LabelButton = (props: LabelButtonProps) => {
    return (
        <div className="relative flex mt-20 space-x-2 items-center z-10 rounded-full w-full mx-auto justify-center">
            <div className="flex items-center justify-center text-slate-300 w-24 border border-[#363535] rounded-full bg-card  duration-300 px-4 ">
                <span>{props.label}</span>
            </div>
        </div>
    );
};

export default LabelButton;
