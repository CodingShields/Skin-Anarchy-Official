import safeSeal from "../../assets/images/safe-seal/safeSeal.svg";
import safeSealTeen from "../../assets/images/safe-seal/safeSealTeen.svg";
import logos from "../../assets/images/safe-seal/awards/safeSealAwardsArray";
import { Button } from "../components/Components";
import { buttonStyle } from "../../styles/responsiveStyling";
import safeSealBG from "../../assets/images/safe-seal/safeSealBG.jpeg";
import cewLogo from "../../assets/images/safe-seal/cewLogo.webp";
const SafeSealAbout = () => {
	return (
		<div className='w-full min-h-screen  animate-fadeIn relative font-montserrat font-thin block pb-12'>
			<img src={safeSealBG} className='w-full h-full object-cover opacity-30 absolute top-0' />
			<div className='flex flex-row justify-center items-center text-white min-h-screen pt-24 pb-8'>
				<div className='w-1/3 text-center py-24 '>
					<h1 className='text-6xl'>
						<span className='tracking-widest mr-2 font-normal'>S.A.F.E</span> Seal
					</h1>
					<p className='py-4 text-lg ml-2 indent-6 mt-2 text-justify leading-[60px] tracking-widest'>
						Introducing the S.A.F.E Seal, an exclusive initiative by Skincare Anarchy that sets a new standard for scientific transparency and
						integrity in the beauty, health, and wellness industries.
					</p>
					<p className='py-4 text-lg ml-2 indent-6 mt-2 text-justify leading-[60px] tracking-widest'>
						This prestigious seal serves as a symbol of scientific excellence, offering global consumers assurance that the products they choose are
						founded on rigorous scientific principles.
					</p>
					<p className='py-4 text-lg ml-2 indent-6 mt-2 text-justify leading-[60px] tracking-widest'>
						As the first initiative of its kind, the S.A.F.E Seal transcends conventional ingredient checks, delving into the intricate details
						essential for product formulation and efficacy claims. Elevate your brand with the mark of scientific distinction.
					</p>
				</div>
				<div className='w-fit'>
					<img src={safeSeal} alt='safe seal' className='w-[900px] h-auto mb-36' />
				</div>
			</div>
			<div className='w-full flex flex-row justify-evenly items-center h-full '>
				<div className=' w-1/2 flex flex-col justify-center items-center h-[800px]'>
					<h1 className='text-white text-6xl font-montserrat font-thin tracking-widest'> Featured Press</h1>
					<p className='text-white text-xl font-montserrat font-thin tracking-widest py-4'>
						Podcast Host Ekta Yadav Launches Certification Program For Beauty Brands
					</p>
					<div className='inline-flex justify-center items-center'>
						<img src={safeSeal} alt='safe seal' className='w-[400px] h-auto ' />

						<img src={safeSealTeen} alt='safe seal' className='w-[400px] h-auto ' />
					</div>
				</div>
				<div className=' w-1/2 flex flex-col justify-start items-center h-[800px] pt-14'>
					<a href='https://cew.org/beauty_news/podcast-host-ekta-yadav-launches-certification-programs-for-beauty-brands/' target='_blank' rel='noreferrer'>
						<img src={cewLogo} alt='safe seal' className='w-[400px] h-fit ' />
					</a>

					<p className='text-white text-xl font-montserrat font-thin tracking-widest w-3/4 leading-10'>
						Thank you CEW for highlighting the S.A.F.E. Seal and S.A.F.E. Seal Teens! The S.A.F.E. Seal adds an extra layer of evaluation, ensuring
						teens can identify and use products that are safe and effective for their skin.
					</p>
					<p className='text-white text-xl font-montserrat font-thin tracking-widest w-3/4 leading-10 mt-4'>
						"I realized that there was no full-blown review process that a brand had to go through when it came to analyzing what they were creating."
						- Dr. Ekta Yadav via CEW
					</p>
				</div>
			</div>
		</div>
	);
};

export default SafeSealAbout;
