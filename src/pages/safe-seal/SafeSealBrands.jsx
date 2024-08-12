import { useState } from "react"
import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";

const SafeSealBrands = () => {
	const [productIndex, setProductIndex] = useState(0);

	const handleMouseOver = (index, item) => {
		setProductIndex(index);
		console.log(item);
	};

	const handleMouseLeave = () => {
		setProductIndex(-1);
	};

	const handleShopSafeProducts = () => {
		window.open("https://shopmy.us/collections/371065 ", "_blank");
	};

	const handleShopSafeTeenProducts = () => {
		window.open("https://shopmy.us/collections/396084", "_blank");
	};

	const handleProductClick = (item) => {
		const teen = item.teen;
		if(teen) {
			window.open("https://shopmy.us/collections/396084", "_blank");
		} else {
			window.open("https://shopmy.us/collections/371065 ", "_blank");
		}
	};

	return (
		<div className='flex flex-col justify-center items-center w-full min-h-screen font-montserrat relative pb-48'>
			<img src={safeSealBG} className='w-full h-full object-cover opacity-30 absolute top-0' />

			<h1 className='text-5xl text-center w-full transition-all ease-in-out duration-500 mt-48 text-white font-thin uppercase pb-12'>
				<span className='tracking-widest mr-2 font-normal'>S.A.F.E.</span> SEAL Awarded Brands
			</h1>
			<div className='w-2/3 inline-flex justify-evenly items-center py-4'>
				<Button
					onClick={handleShopSafeProducts}
					text='Shop S.A.F.E Products'
					style={`z-10 w-96 text-white/50 py-2 uppercase  text-[20px] tracking-widest border-2 border-white rounded-lg  transition-all ease-in-out duration-500 hover:text-black hover:bg-white font-normal`}
				/>
				<Button
					onClick={handleShopSafeTeenProducts}
					text='Shop TEEN S.A.F.E Products'
					style={`z-10 w-96 text-white/50 py-2 uppercase  text-[20px] tracking-widest border-2 border-white rounded-lg  transition-all ease-in-out duration-500 hover:text-black hover:bg-white font-normal`}
				/>
			</div>

			<div className='w-2/3 h-full flex flex-col justify-center items-start font-montserrat text-white mx-auto  py-12'>
				<div className='w-full h-fit grid grid-cols-4 gap-24'>
					{logos.map((item, index) => (
						<div
							key={index}
							className={`w-72 h-72 flex flex-row justify-center items-center  border-2 border-white rounded-lg shadow-white/30 shadow-2xl transition-all ease-in-out duration-500 relative  ${productIndex === index ? "bg-black px-12 w-[700px] z-20 scale-115 -translate-y-8+" : ""}`}
							onMouseEnter={() => handleMouseOver(index)}
							onMouseLeave={handleMouseLeave}
							onClick={() => handleProductClick(item)}
						>
							<img
								src={safeSeal}
								className='absolute  w-full h-full object-cover opacity-10  transition-all ease-in-out duration-300 top-0 left-0'
								alt='safe seal'
							/>
							<img
								src={item.logo}
								alt='logo'
								key={index}
								className={`w-auto  mx-auto transition-all ease-in-out duration-500 z-10 cursor-pointer ${item.name === "STAMINA" ? "h-[700px]" : "h-48"}`}
							/>

							<img
								src={safeSealTeen}
								className={`w-[300px] h-[300px] mx-auto ml-4 scale-125  ${item.teen && productIndex === index ? "visible" : "hidden"}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SafeSealBrands;
