import { useState } from "react";
import { Button } from "../../components/Components";

const categoryNav = [
	{
		name: "All Episodes",
		value: "all-episodes",
		selected: true,
	},

	{
		name: "Top Makeup Artists",
		value: "top-makeup-artists",
		selected: false,
	},
	{
		name: "Top Doctors",
		value: "top-doctors",
		selected: false,
	},
	{
		name: "Brand Founders",
		value: "brand-founders",
		selected: false,
	},
	{
		name: "Thought Leaders",
		value: "thought-leaders",
		selected: false,
	},
	{
		name: "Editors and Journalists",
		value: "editors-and-journalists",
		selected: false,
	},
	{
		name: "Celebrities",
		value: "celebrities",
		selected: false,
	},
	{
		name: "Masterclass",
		value: "masterclass",
		selected: false,
	},
];
const buttonStyle =
	"border-white text-sm lg:text-[16px] rounded-lg h-16 lg:rounded-full px-4 py-2 border w-full lg:w-48 lg:hover:bg-white lg:hover:text-black lg:hover:font-semibold transition-all duration-500 ease-in-out";
const EpisodesCategories = () => {
	const [isSelected, setIsSelected] = useState("all-episodes");
	return (
		<div className=" grid grid-cols-2  py-2 lg:flex flex-row w-full h-fit px-2 lg:px-64 text-white text-sm lg:text-[16px] font-montserrat uppercase justify-center items-center">
			{categoryNav.map((item, index) => (
				<div
					key={index}
					className="m-1 lg:m-4"
				>
					<Button
						onClick={() => setIsSelected(item.value)}
						text={item.name}
						style={` ${buttonStyle} ${isSelected === item.value ? "bg-white text-black " : ""} transition-all duration-500 ease-in-out`}
					/>
				</div>
			))}
		</div>
	);
};
// add rounded look to button
export default EpisodesCategories;
