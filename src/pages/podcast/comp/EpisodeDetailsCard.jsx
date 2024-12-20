import { useState } from "react";
import episode1 from "../../../assets/images/podcast-widget/episode1.png";
import jenSincero from "./jenSincero.png";
import PropTypes from "prop-types";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
const EpisodeDetailsCard = (props) => {
	const { children, onClick, data, image, icon, open } = props;
	const [openTab, setOpenTab] = useState(false);
	return (
		<div
			className={`flex flex-col transition-all duration-700 ease-in-out  ${!open ? "bg-black text-white justify-start items-start z-30" : "bg-white text-black justify-center items-center w-full"} overscroll-x-none overflow-hidden w-fit`}
		>
			{" "}
			<div className="w-full h-full flex flex-col">
				<div className="flex flex-row justify-center items-center ">
					<div>
						<img
							src={jenSincero}
							className={`transition-all duration-700 ease-in-out object-cover h-32 lg:h-64 lg:min-w-64 min-w-32  object-center`}
						/>
					</div>

					<div className="w-full h-full bg-white flex flex-col items-center justify-center">
						<p
							className={`text-[14px] lg:text-2xl h-3/4 lg:h-1/4 text-wrap text-center text-black  transition-all duration-700 ease-in-out font-montserrat px-2 pt-3`}
						>
							Building A Mindset For Success with YOU ARE A BADASS
						</p>
						<p
							className={`text-[14px] lg:text-lg h-fit text-wrap text-center text-black  transition-all duration-700 ease-in-out font-montserrat px-2`}
						>
							Author: Jen Sincero
						</p>
					</div>
				</div>

				<div className="w-3/4 py-4 inline-flex justify-center items-center space-x-4 border-b-[.5px] border-white mx-auto">
					<PlayCircleIcon className="w-8 h-8 stroke-white stroke-1 " />
					<div>
						<p className="text-white/80 text-sm font-montserrat ">
							Episode# 600
						</p>
					</div>
				</div>
				<div className={`py-4 block line-clap-2`}>
					<p
						className={` px-8 text-balance transition-all font-montserrat duration-700 ease-in-out text-left leading-6  text-[12px] lg:text-[16px] lg:w-3/4 lg:mx-auto lg:text-xl lg:leading-10 ${!openTab ? "text-left  w-full h-auto line-clamp-2 " : " text-white w-full  h-fit  "} `}
					>
						{" "}
						When financial turmoil met Jen Sincero, she didn&apos;t just face
						it—she mounted a full-fledged life revolution. Celebrating our 600th
						episode, we sit down with the powerhouse behind the &quot;You Are a
						Badass&quot; series to unpack the seismic mindset shift that paved
						her road from fiscal scarcity to authorial prosperity. In a riveting
						exchange, Jen dissects the potent brew of thoughts, beliefs, and an
						urgency-fueled writing process that&apos;s captivating readers
						hungry for self-improvement without the snooze factor. It&apos;s not
						every day you get to peer behind the curtains of a success story and
						find actionable wisdom that&apos;s as entertaining as it is
						enlightening.
					</p>
					<div className="w-full py-2">
						<ChevronDownIcon
							className="w-8 h-8 stroke-white stroke-1 mx-auto"
							onClick={() => setOpenTab(!openTab)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

EpisodeDetailsCard.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	data: PropTypes.object,
	image: PropTypes.string,
	icon: PropTypes.string,
	open: PropTypes.bool,
};

export default EpisodeDetailsCard;
