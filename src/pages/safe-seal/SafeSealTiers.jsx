
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import SafeSealTierCard from "./SafeSealTierCard";
import SafeSealNav from "./SafeSealNav";
const SafeSealTiers = () => {
	return (
		<div className='w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin'>
			<img src={safeSealBG} className='w-full h-full object-cover opacity-30 absolute top-0' />
			<div className='flex flex-col justify-center items-center text-white min-h-screen py-48'>
				<h1 className='text-5xl mb-8'>Product Review Tier Options</h1>
				<h1 className='text-5xl mb-8'>Need exact images</h1>
				<h1 className='text-5xl mb-8'>Maybe add more detail about the vetting process?</h1>
				<SafeSealNav />
				<div className='w-full flex flex-row justify-center items-start pt-24 space-x-8'>	
					<div className='grid grid-cols-1 w-fit gap-24'>
						<SafeSealTierCard
							tier='Tier 1'
							option1='Review of 4 Product SKUs'
							option2='1 year licensing of the seal issued for display on packaging, social, and website'
						/>
						<SafeSealTierCard
							tier='Tier 2'
							option1='Review of products in brand portfolio (up to 10 SKUs)'
							option2='1 year licensing of the seal issued for display on packaging, social, and website'
						/>
						<SafeSealTierCard
							tier='Tier 3'
							option1='Review of products in brand portfolio (up to 25 SKUs)'
							option2='1 year licensing of the seal issued for display on packaging, social, and website'
						/>
					</div>
					<div className='grid grid-cols-1 w-fit gap-24'>
						<SafeSealTierCard
							tier='CUSTOM / NON-FORMULA BASED'
							option1='Review of 1 Product SKU'
							option2='1 year licensing of the seal issued for display on packaging, social, and website'
						/>
						<SafeSealTierCard
							tier='Custom Product Review'
							option1='Review of 1 Product SKU'
							option2='1 year licensing of the seal issued for display on packaging, social, and website'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SafeSealTiers;
