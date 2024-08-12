import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";

const SafeSealBrands = () => {
	return (
		<div>
			<h1>Safe Seal Brands</h1>
			<div className='w-3/4 h-full flex flex-col justify-center items-start font-montserrat text-white mx-auto my-24  rounded-2xl p-8 group '>
				<h1 className='text-5xl text-center w-full transition-all ease-in-out duration-500'>S.A.F.E. SEAL Awarded Brands</h1>
				<div className='w-full h-fit grid grid-cols-4 gap-36 '>
					{logos.map((item, index) => (
						<img src={item.logo} alt='logo' key={index} className='w-auto h-auto mx-auto  hover:scale-150 transition-all ease-in-out duration-500' />
					))}
				</div>
			</div>
		</div>
	);
};

export default SafeSealBrands;
