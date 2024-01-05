const DoubleChevLeftBtn = ({ onClick }) => {
  return (
    <svg
      className="hover:stroke-green-500 hover:cursor-pointer active:translate-x-2 "
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
      />
    </svg>
  );
};

export default DoubleChevLeftBtn;
