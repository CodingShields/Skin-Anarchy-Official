const MinusCircleBtn = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="w-12 h-12 text-white hover:scale-125 hover:fill-red-100 hover:stroke-red-600 active:translate-y-2 hover:cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};

export default MinusCircleBtn;
