import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
const SafeSealHome = () => {
	return (
		<div className='w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin'>
			<img src={safeSealBG} className='w-full h-full object-cover opacity-30 absolute top-0' />
			<div className='flex flex-row justify-center items-center text-white min-h-screen'>
				<div className='w-1/2'>
					<h1 className='text-8xl'>
						<span className='tracking-widest mr-2 font-normal'>S.A.F.E</span> Seal
					</h1>
					<p className='py-12 text-4xl ml-2 indent-6 mt-2 text-justify leading-[60px] tracking-widest'>
						Scientifically Approved Formula & Efficacy Seal
					</p>
				
				</div>
				<div className='w-fit'>
					<img src={safeSeal} alt='safe seal' className='w-[900px] h-auto' />
				</div>
			</div>
			<div className='flex justify-center items-center h-full w-full'>
				<p className='text-white/30 font-montserrat text-lg text-center absolute bottom-5'>
					All rights reserved. © 2023 by S.A.F.E. Seal. Proudly created by Skincare Anarchy LLC.
				</p>
			</div>
		</div>
	);
};

export default SafeSealHome;
