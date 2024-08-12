import { useState, useEffect } from "react";
import { BarsArrowDownIcon, CheckBadgeIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { Button } from "../components/Components";
import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import maternity from "../../assets/images/safe-seal/maternity.webp";
const SafeSealTierCard = (props) => {
	const { tier, option1, option2 } = props;
	const [open, setOpen] = useState(false);

	const buttonStyle =
		"rounded-xl  w-fit  text-white cursor-pointer uppercase font-montserrat text-[12px] tracking-widest group-hover:font-semibold sm:px-4 px-12 py-2 cursor-pointer   transition-all duration-900 ease-in-out";

	return (
		<div
			className={`w-[400px] border px-4 py-2 rounded-bl-xl rounded-tr-xl rounded-br-xl bg-black relative ${open ? "h-[900px]" : "h-48"} transition-all ease-in-out duration-300 group`}
		>
			<p className='text-xl pb-2  bg-white text-black w-fit font-normal px-4 py-2 absolute -top-11 -left-[.05rem] rounded-tl-xl rounded-tr-xl uppercase'>
				{tier}
			</p>

			<img
				src={safeSeal}
				className='absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-20'
				alt='safe seal'
			/>
			<div className=' block space-y-4'>
				<div className='inline-flex justify-start items-center py-2'>
					<CheckBadgeIcon className='min-w-10  w-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
					<p className=' text-xl whitespace-wrap block w-11/12 mx-2'>{option1}</p>
				</div>
				<div className='inline-flex justify-start items-center '>
					<CheckBadgeIcon className='min-w-10 w-16 inline-block stroke-gold-500 stroke-[.03rem] ' />
					<p className=' text-xl whitespace-wrap block w-11/12 mx-2'>{option2}</p>
				</div>
			</div>

			<div className='mt-6 group'>
				<Button
					text={`${open ? "Close" : "Learn More"}`}
					onClick={() => setOpen(!open)}
					style={`${buttonStyle} absolute bottom-1 right-3.5 transition-all ease-in-out duration-900 group-hover:animate-bounce`}
				/>
			</div>
		</div>
	);
};

SafeSealTierCard.propTypes = {
	tier: PropTypes.string,
	option1: PropTypes.string,
	option2: PropTypes.string,
};

export default SafeSealTierCard;
