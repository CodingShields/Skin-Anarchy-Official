import { userDeviceInfo } from "../../../utilities/utilities";
import { useState, useEffect } from "react";
import sponsorImages from "../../../assets/data/homepage/sponsorImages";
import "../../../styles/custom.scss";
const SponsorBarContainer = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div className="relative overflow-hidden">
			<div
				className=" flex animate-scrollingSponsors"
				style={{
					animation: `scrollingSponsors  ${isMobile ? "35s" : "115s"} linear infinite`,
				}}
			>
				{sponsorImages.map((sponsor, index) => {
					return (
						<div
							className="flex flex-grow-0 flex-shrink-0 lg:w-64 w-32 px-4"
							key={index}
						>
							<img src={sponsor} />
						</div>
					);
				})}
				{sponsorImages.map((sponsor, index) => {
					return (
						<div
							className="block w-full py-[20px] "
							key={index}
						>
							<img src={sponsor} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SponsorBarContainer;
