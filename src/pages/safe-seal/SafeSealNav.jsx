import { useState } from "react";
import { Button } from "../components/Components";
import PropTypes from "prop-types";
const nav = [
	{
		id: 0,
		text: "Tier 1",
	},
	{
		id: 1,
		text: "Tier 2",
	},
	{
		id: 2,
		text: "Tier 3",
	},
	{
		id: 3,
		text: "Custom",
	},
	{
		id: 4,
		text: "Non Formula",
	},
	{
		id: 5,
		text: "Evaluation Criteria",
	},
];

const buttonStyle = "";
const activeButtonStyle = "";
const SafeSealNav = ({ activeNav }) => {
	const [active, setActive] = useState(0);

	const handleNavSelect = (id) => {
		setActive(id);
		activeNav(id);
	};
	return (
		<div className="flex flex-col lg:flex-row items-center justify-start lg:justify-evenly w-11/12 h-full px-6 z-10 ">
			{nav.map((item, id) => (
				<div
					key={id}
					className="mr-auto lg:mr-0"
				>
					<Button
						text={item.text}
						onClick={() => handleNavSelect(item.id)}
						style={` ${active === item.id ? "text-gold-500 font-semibold transition-all duration-500 ease-in-out w-fit h-16 scale-125 uppercase lg:w-[200px] whitespace-nowrap tracking-widest lg:h-fit" : "h-10 lg:h-fit w-fit lg:w-[200px] whitespace-nowrap uppercase tracking-widest"} text-lg lg:text-xl`}
					/>
				</div>
			))}
		</div>
	);
};

SafeSealNav.propTypes = {
	activeNav: PropTypes.func,
};
export default SafeSealNav;
