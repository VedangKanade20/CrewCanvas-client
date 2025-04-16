interface CardProps {
    title: string;
    desc?: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

const TsCard = (props: CardProps) => {
    return (
        <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all bg-white flex items-center gap-4 w-full max-w-sm">
            <div className="shrink-0">{props.icon}</div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">
                    {props.title}
                </h3>
                <p className="text-sm text-gray-500">{props.desc}</p>
                <button
                    onClick={props.onClick}
                    className="mt-4 text-lg text-black bg-purple-400 hover:underline-offset-8 w-[300px] border-2 border-purple-400 rounded-lg px-4 py-2 transition duration-200 ease-in-out"
                >
                    {props.title}
                </button>
            </div>
        </div>
    );
};

export default TsCard;
