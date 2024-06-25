
const TopPicksSubMenuButton = ({ name, onClick, active }) => {
       const handleClick = () => {
					onClick(name);
				};
                console.log(active);
	return (
		<button
			onClick={handleClick}
			className={`${active === name || active === "" ? "block px-4 py-2 text-left hover:bg-white text-white hover:rounded-r-xl hover:text-black whitespace-nowrap font-montserrat uppercase tracking-widest animate-fadeIn" : "hidden"}`}
		>
			{name}
		</button>
	);
};

export default TopPicksSubMenuButton;
