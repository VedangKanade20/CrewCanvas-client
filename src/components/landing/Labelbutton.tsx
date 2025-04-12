interface LabelButtonProps {
    label: string;
}

const LabelButton = (props:LabelButtonProps) => {
  return (
    <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 pl-3 pr-1 ring-1 ring-white/10 bg-gradient-to-l from-purple-800  to-blue-400 bg-clip-text text-transparent">
      <span>{props.label}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10.75 8.75L14.25 12L10.75 15.25"
        ></path>
      </svg>
    </div>
  );
}

export default LabelButton