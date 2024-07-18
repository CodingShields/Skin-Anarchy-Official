import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";
const SafeSealPage = () => {
	return (
		<div className='w-full min-h-screen py-12 animate-fadeIn'>
			<div className='w-10/12 h-full flex flex-row justify-center items-start font-montserrat text-white mt-36 mx-auto'>
                <div
                    className='w-3/4 h-fit mx-auto border-l border-b rounded-bl-2xl pl-10 pb-10 pt-8'>
					<h1 className='text-5xl'>About</h1>
					<p className='py-4 text-xl ml-2 indent-6 mt-2 text-justify'>
						Introducing the S.A.F.E Seal, an exclusive initiative by Skincare Anarchy that sets a new standard for scientific transparency and
						integrity in the beauty, health, and wellness industries.
					</p>
					<p className='py-4 text-xl ml-2 indent-6 text-justify'>
						This prestigious seal serves as a symbol of scientific excellence, offering global consumers assurance that the products they choose are
						founded on rigorous scientific principles. As the first initiative of its kind, the S.A.F.E Seal transcends conventional ingredient
						checks, delving into the intricate details essential for product formulation and efficacy claims. Elevate your brand with the mark of
						scientific distinction.
					</p>
					<p className='py-4 text-xl text-justify mb-4'>
						Schedule a consultation with Dr. Ekta to explore the process and discover our pricing options.
					</p>
					<Button text='Schedule a Consultation' style={buttonStyle} />
				</div>
				<div className='w-1/2 h-fit inline-flex justify-start  items-center'>
					<img src={safeSeal} alt='safe seal' className='w-auto h-auto' />
					<img src={safeSealTeen} alt='safe seal' className='w-auto h-auto' />
				</div>
			</div>
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

export default SafeSealPage;
