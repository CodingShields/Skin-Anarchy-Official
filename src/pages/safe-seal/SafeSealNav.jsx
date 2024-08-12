import { useState } from "react";
import { Button } from "../components/Components";

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

const buttonStyle = ""
const activeButtonStyle = ""
const SafeSealNav = () => {
	const [active, setActive] = useState(0);
	return (
		<div className='flex flex-row items-center justify-evenly w-full h-full px-6 '>
			{nav.map((item, id) => (
				<div key={id}>
					<Button text={item.text} onClick={() => setActive(item.id)} style={` ${active === item.id ? "text-gold-500" : ""} text-2xl`} />
				</div>
			))}
		</div>
	);
};
export default SafeSealNav;
