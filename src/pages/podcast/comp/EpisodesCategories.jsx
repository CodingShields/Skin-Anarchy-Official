import Button from "../../components/Components"
import { buttonStyle } from "../../../styles/responsiveStyling";

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
]

const EpisodesCategories = () => {
	return (
		<div className='flex flex-row justify-evenly items-center w-full h-14 px-24 text-white text-[16px] font-montserrat uppercase'>
			{categoryNav.map((item, index) => (
				<Button key={index} text={item.name} style={buttonStyle} />
			))}
		</div>
	);
};

export default EpisodesCategories;
