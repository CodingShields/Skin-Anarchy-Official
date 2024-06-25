const HamburgerDownBtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="h-fit w-fit flex flex-row items-center justify-center cursor-pointer group"
    >
      <svg
        className="h-12 w-12 group-hover:stroke-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
        />
      </svg>

    </div>
  );
};

export default HamburgerDownBtn;
