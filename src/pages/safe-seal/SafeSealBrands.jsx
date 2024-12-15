// import { useState } from "react";
// import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
// import { userDeviceInfo } from "../../utilities/utilities";
const SafeSealBrands = () => {
	// const [productIndex, setProductIndex] = useState(null);
	// const isMobile = userDeviceInfo();
	// const handleMouseOver = (index) => {
	// 	if (!isMobile) {
	// 		setProductIndex(index);
	// 	} else {
	// 		return;
	// 	}
	// // };
	// const handleMouseLeave = () => {
	// 	setProductIndex(-1);
	// };

	const handleShopSafeProducts = () => {
		window.open("https://shopmy.us/collections/371065 ", "_blank");
	};

	const handleShopSafeTeenProducts = () => {
		window.open("https://shopmy.us/collections/396084", "_blank");
	};

	const handleProductClick = (item) => {
		const teen = item.teen;
		if (teen) {
			window.open("https://shopmy.us/collections/396084", "_blank");
		} else {
			window.open("https://shopmy.us/collections/371065 ", "_blank");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center w-full min-h-screen font-montserrat relative pb-48">
			<img
				src={safeSealBG}
				className="w-full h-full object-cover opacity-50 lg:opacity-30 absolute top-0"
			/>

			<h1 className="text-2xl lg:text-5xl text-center w-full transition-all ease-in-out duration-500 mt-24 lg:mt-48 text-white font-thin uppercase pb-12 hidden lg:visible">
				<span className="tracking-widest mr-2 font-normal">S.A.F.E.</span> SEAL
				Awarded Brands
			</h1>
			<h1 className="text-4xl brightness-100 lg:text-5xl text-center w-full transition-all ease-in-out duration-500 mt-24 lg:mt-48 text-white font-thin uppercase pb-2">
				<span className="tracking-widest mr-2 font-normal">S.A.F.E.</span> SEAL
			</h1>
			<h1 className="text-2xl brightness-100  lg:text-5xl text-center w-full transition-all ease-in-out duration-500 text-white font-thin uppercase pb-8">
				Awarded Brands
			</h1>
			<div className="w-10/12 lg:w-2/3 block lg:inline-flex justify-evenly items-center py-4 space-y-4 lg:space-y-0">
				<Button
					onClick={handleShopSafeProducts}
					text="Shop S.A.F.E Products"
					style={`z-10 w-full lg:w-96 text-white lg:text-white/50 py-2 brightness-100 uppercase text-md lg:text-[20px] tracking-widest border-[1px] border-white rounded-lg  transition-all ease-in-out duration-500 lg:hover:text-black lg:hover:bg-white font-normal`}
				/>
				<Button
					onClick={handleShopSafeTeenProducts}
					text="Shop TEEN S.A.F.E Products"
					style={`z-10 w-full lg:w-96 text-white lg:text-white/50 py-2 brightness-100 uppercase text-md lg:text-[20px] tracking-widest border-[1px] border-white rounded-lg  transition-all ease-in-out duration-500 lg:hover:text-black lg:hover:bg-white font-normal`}
				/>
			</div>

			<div className="lg:w-2/3 w-10/12 h-full flex flex-col justify-center items-start font-montserrat text-white mx-auto  py-12">
				<div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 mx-auto">
					{logos.map((item, index) => (
						<div
							key={index}
							className={` h-36 lg:w-[650px] lg:h-fit flex flex-row  justify-evenly items-center  border-[1px] border-white rounded-lg shadow-white/30 shadow-2xl transition-all ease-in-out duration-500 relative 
								 `}
							// onMouseEnter={() => handleMouseOver(index)}
							// onMouseLeave={handleMouseLeave}
							onClick={() => handleProductClick(item)}
						>
							{/* <img
								src={safeSeal}
								className="absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-0 hidden lg:visible"
								alt="safe seal"
							/> */}
							<div className="w-48 hh-auto overflow-visible">
								<img
									src={item.logo}
									alt="logo"
									key={index}
									className={`w-full h-auto object-cover object-center px-2 ml-4  ${item.name === "STAMINA" ? "min-w-[230px] scale-125 ml-[32px] lg:ml-8 lg:min-w-72" : ""}`}
								/>
							</div>

							<div className="w-48 lg:w-72 h-auto  rounded-full overflow-hidden">
								<img
									src={safeSealTeen}
									className={`min-w-full min-h-auto object-cover object-center bg-transparent`}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SafeSealBrands;
