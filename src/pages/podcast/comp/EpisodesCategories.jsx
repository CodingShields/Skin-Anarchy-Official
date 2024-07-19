import {useState, useEffect} from "react";
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

const EpisodesCategories = () => {
	const [isSelected, setIsSelected] = useState("all-episodes");
	return (
		<div className='flex flex-row w-full h-fit px-64 text-white text-[16px] font-montserrat uppercase justify-center items-center'>
			{categoryNav.map((item, index) => (
				<div key={index} className="m-4">
					<Button
						onClick={() => setIsSelected(item.value)}
						text={item.name} style={`border-white text-[16px] rounded-full px-4 py-2 border w-48 hover:bg-white hover:text-black hover:font-semibold transition-all duration-500 ease-in-out ${isSelected === item.value ? "bg-white text-black font-semibold" : ""}`} />
				</div>
			))}
		</div>
	);
};

export default EpisodesCategories;
