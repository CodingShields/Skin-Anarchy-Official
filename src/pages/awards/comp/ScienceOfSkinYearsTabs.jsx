import PropTypes from "prop-types";

const ScienceOfSkinYearsTabs = ({ handleNavSelect, active }) => {
	console.log(active);
	return (
		<div className="w-full">
			<div className="mx-auto flex flex-row justify-center text-xl text-white font-thin font-montserrat gap-6 lg:gap-12 items-center">
				<button
					onClick={() => handleNavSelect("2022")}
					className={`underlineAnimate cursor-pointer lg:hover:font-normal transition-all ease-in-out duration-100 ${active === "2022" && "text-2xl border-b-[1px] border-white"}`}
				>
					2022
				</button>
				<button
					onClick={() => handleNavSelect("2023")}
					className={`underlineAnimate cursor-pointer lg:hover:font-normal transition-all ease-in-out duration-100 ${active === "2023" && "text-2xl border-b-[1px] border-white"}`}
				>
					2023
				</button>
				<button
					onClick={() => handleNavSelect("2024")}
					className={`underlineAnimate cursor-pointer lg:hover:font-normal transition-all ease-in-out duration-100 ${active === "2024" && "text-2xl border-b-[1px] border-white"}`}
				>
					2024
				</button>
				<button
					onClick={() => handleNavSelect("2025")}
					className={`underlineAnimate cursor-pointer lg:hover:font-normal transition-all ease-in-out duration-100 ${active === "2025" && "text-2xl border-b-[1px] border-white"}`}
				>
					2025
				</button>
			</div>
		</div>
	);
};

ScienceOfSkinYearsTabs.propTypes = {
	handleNavSelect: PropTypes.func,
	active: PropTypes.string,
};

export default ScienceOfSkinYearsTabs;
