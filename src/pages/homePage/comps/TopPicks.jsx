import codex from "../../../assets/images/topPicks/codex.svg";
import elta from "../../../assets/images/topPicks/elta.svg";
import epicutis from "../../../assets/images/topPicks/epicutis.svg";
import hairOil from "../../../assets/images/topPicks/hair-oil.svg";
import janMarini from "../../../assets/images/topPicks/jan-marini.svg";
import makeUpMario from "../../../assets/images/topPicks/make-up-mario.svg";
import oneSkin from "../../../assets/images/topPicks/one-skin.svg";
import pcaSkin from "../../../assets/images/topPicks/pca-skin.svg";
import revive from "../../../assets/images/topPicks/revive.svg";
import victoriaBeckham from "../../../assets/images/topPicks/victoria-beckham.svg";
import { userDeviceInfo } from "../../../utilities/utilities";
import { useState, useEffect } from "react";
const TopPicks = () => {

	const [isMobile, setIsMobile] = useState(false);

	console.log(userDeviceInfo());
	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);


	return (
		<div className='w-full h-fit my-64 sm:my-32 relative'>
			<div className=''>
				<h1 className='text-white text-6xl sm:text-3xl text-center font-montserrat font-thin uppercase tracking-widest py-6'>
					Skincare Anarchy Awards{" "}
				</h1>
				<h2 className='text-white lowercase text-center sm:text-3xl font-montserrat text-4xl font-thin'>#toppicks</h2>
			</div>
			<div className='relative '>
				<div
					className='topPicksBar-content py-12 mt-12 '
					style={{
						animation: `scrollingSponsors  ${isMobile ? "35s" : "115s"} linear infinite`,
					}}
				>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img onMouseEnter={() => console.log("test")} src={codex} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={elta} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={epicutis} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={hairOil} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={janMarini} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={makeUpMario} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={oneSkin} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={pcaSkin} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={revive} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={victoriaBeckham} />
					</div>
					{/* Marquee Split */}
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={codex} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={elta} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={epicutis} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={hairOil} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={janMarini} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={makeUpMario} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={oneSkin} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={pcaSkin} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={revive} />
					</div>
					<div className='flex flex-grow-0 flex-shrink-0 w-64 sm:w-32'>
						<img src={victoriaBeckham} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPicks;
