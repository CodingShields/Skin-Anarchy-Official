import React, { useState, useEffect } from "react";
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

const images = [
	codex,
	elta,
	epicutis,
	hairOil,
	janMarini,
	makeUpMario,
	oneSkin,
	pcaSkin,
	revive,
	victoriaBeckham,
];

const TopPicks = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(userDeviceInfo());
	}, []);

	return (
		<div className="w-full h-fit lg:my-64 my-12 relative">
			<h1 className="text-white lg:text-6xl text-3xl text-center font-montserrat font-thin uppercase tracking-widest py-6">
				Skincare Anarchy Awards
			</h1>
			<h2 className="text-white lowercase text-center text-2xl font-montserrat lg:text-4xl font-thin tracking-widest">
				#TopPicksBeautyAwards
			</h2>
			<div className="topPicksBar relative">
				<div
					className="topPicksBar-content lg:py-48 lg:mt-12 py-8"
					style={{
						animation: `scrollingTopPicksBar ${isMobile ? "35s" : "85s"} linear infinite`,
					}}
				>
					{/* Original Images */}
					{images.map((image, index) => (
						<div
							className="flex flex-grow-0 flex-shrink-0 lg:w-64 w-48 px-12"
							key={index}
						>
							<img
								className="w-64"
								src={image}
								alt={`Sponsor ${index}`}
							/>
						</div>
					))}
					{/* Duplicated Images for Seamless Effect */}
					{images.map((image, index) => (
						<div
							className="flex flex-grow-0 flex-shrink-0 lg:w-64 w-48 px-12"
							key={`duplicate-${index}`}
						>
							<img
								className="w-64"
								src={image}
								alt={`Sponsor ${index}`}
							/>
						</div>
					))}
					{images.map((image, index) => (
						<div
							className="flex flex-grow-0 flex-shrink-0 lg:w-64 w-48 px-12"
							key={`duplicate-${index}`}
						>
							<img
								className="w-64"
								src={image}
								alt={`Sponsor ${index}`}
							/>
						</div>
					))}
					{images.map((image, index) => (
						<div
							className="flex flex-grow-0 flex-shrink-0 lg:w-64 w-48 px-12"
							key={`duplicate-${index}`}
						>
							<img
								className="w-64"
								src={image}
								alt={`Sponsor ${index}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TopPicks;
