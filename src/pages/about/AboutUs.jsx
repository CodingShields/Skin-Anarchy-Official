import { useEffect } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";

const AboutUs = () => {

	useEffect(() => {
		StartPageLoadTop();
	}, []);
	
	return (
		<div className='w-full mx-auto h-fit text-white flex flex-col justify-between items-center mt-36 pb-64 space-x-4 animate-fadeIn'>
			{/* <div> */}

			<div className='w-full  h-full flex flex-row justify-evenly '>
				<div className='font-thin text-xl leading-[80px] font-montserrat tracking-widest pl-8 space-y-6 w-[1000px] flex flex-col h-full justify-center items-center mt-16'>
					<h1 className='font-montserrat font-thin uppercase text-3xl tracking-widest  whitespace-nowrap mb-2  text-left'>About</h1>
					<span className='font-montserrat font-thin uppercase text-5xl tracking-widest  whitespace-nowrap mb-10  text-left underline underline-offset-8 decoration-1'>
						Skincare Anarchy
					</span>
					<p className=' indent-8 py-4'>
						Skincare Anarchy is an award-winning and industry acclaimed podcast, recognized for its unique approach to skincare and beauty. SA
						consistently ranks in the top 25-50 for Beauty in the United States and has a global presence.
					</p>
					<p className=' indent-8 py-4'>
						Hosted by Dr. Ekta Yadav (MD, MBA, MS), our podcast is a unique blend of science and beauty, driven by curiosity and passion. We aim to
						provide our listeners with an insider’s look into the beauty world, sharing the incredible stories and opinions of industry professionals
						and leaders.
					</p>

					<p className=' indent-8 py-4'>
						Join us for our weekly series, including Makeup Monday, Mindset Monday, Wisdom of Women Wednesday, Fashion Friday, and Fragrance Friday,
						and more, as we explore the multifaceted world of beauty and skincare. Our episode library consists of over 600 episodes that are
						engaging, educational, inspiring, and timeless!
					</p>
				</div>
				<div className=' w-[800px] h-full flex flex-col justify-center mt-24  w-fit p-4 '>
					<h1 className='text-3xl text-white font-montserrat uppercase tracking-widest whitespace-nowrap font-thin text-center'>
						Meet The Team
					</h1>
					<div className='w-full h-full space-y-4'>
						<div className='py-4 grid grid-cols-2 w-full border-r border-b rounded-bl-lg my-8'>
							<div className='block font-montserrat uppercase text-center'>
								<h1 className='text-xl '>Dr Ekta Yadav </h1>
								<p className=' text-lg italic'>CEO & Podcast Host</p>

								<h1> short bio</h1>
							</div>
							<div className='w-96 h-96 bg-char-900 ml-auto mr-2'>image here</div>
						</div>
						<div className='py-4 grid grid-cols-2 w-full border-r border-b rounded-bl-lg '>
							<div className='block font-montserrat uppercase text-center'>
								<h1 className='text-lg uppercase'>Robert</h1>
								<p className='text-lg italic'>CFO</p>

								<h1> short bio</h1>
							</div>
							<div className='w-96 h-96 bg-char-900 ml-auto mr-2'>image here</div>
						</div>
						<div className='py-4 grid grid-cols-2 w-full border-r border-b rounded-bl-lg '>
							<div className='block font-montserrat uppercase text-center'>
								<h1 className=' text-lg uppercase'>Flora</h1>
								<p className='text-lg italic'>Graphic Designer & Manager</p>

								<h1> short bio</h1>
							</div>
							<div className='w-96 h-96 bg-char-900 ml-auto mr-2'>image here</div>
						</div>
						<div className='py-4 grid grid-cols-2 w-full border-r border-b rounded-bl-lg '>
							<div className='block font-montserrat uppercase text-center'>
								<h1 className=' uppercase text-lg'>Mike Shields</h1>
								<p className='text-lg italic'>Software and Website Developer</p>
								<h1> short bio</h1>
							</div>

							<div className='w-96 h-96 bg-char-900 ml-auto mr-2'>image here</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
