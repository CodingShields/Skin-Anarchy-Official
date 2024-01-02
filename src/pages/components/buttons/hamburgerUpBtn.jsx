const HamburgerUpBtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-fit w-fit flex flex-col items-center justify-center cursor-pointer group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
        />
      </svg>

      <h1 className="text-md font-bold text-center group-hover:text-blue-500">
        Close
      </h1>
    </div>
  );
};

export default HamburgerUpBtn;
