import { useEffect } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";

const AboutUs = () => {
	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div className="w-full mx-auto h-fit text-white flex flex-col justify-between items-center mt-8 lg:mt-36 pb-64 space-x-0 lg:space-x-4 animate-fadeIn overscroll-x-none overflow-hidden">
			<div className="w-full  h-full flex flex-col lg:flex-row justify-evenly ">
				<div className="font-thin text-[15px] lg:text-xl leading-6 lg:leading-[80px] font-montserrat tracking-widest pl-8 space-y-2 lg:space-y-6 w-full  block lg:flex flex-col h-full justify-center items-center mt-16">
					<h1 className="font-montserrat font-thin uppercase text-2xl lg:text-3xl tracking-widest  whitespace-nowrap mb-2  text-left w-full  text-white/50">
						About
					</h1>
					<h1 className="font-montserrat font-thin uppercase text-2xl lg:text-5xl tracking-widest  whitespace-nowrap mb-10  text-left underline underline-offset-8 decoration-1 pt-2">
						Skincare Anarchy
					</h1>
					<div className="w-10/12 lg:w-full">
						<p className=" indent-0 lg:indent-8 py-4 leading-8">
							Skincare Anarchy is an award-winning and industry acclaimed
							podcast, recognized for its unique approach to skincare and
							beauty. SA consistently ranks in the top 25-50 for Beauty in the
							United States and has a global presence.
						</p>
						<p className=" indent-0 lg:indent-8 py-4 leading-8">
							Hosted by Dr. Ekta Yadav (MD, MBA, MS), our podcast is a unique
							blend of science and beauty, driven by curiosity and passion. We
							aim to provide our listeners with an insider’s look into the
							beauty world, sharing the incredible stories and opinions of
							industry professionals and leaders.
						</p>

						<p className=" indent-0 lg:indent-8 py-4 leading-8">
							Join us for our weekly series, including Makeup Monday, Mindset
							Monday, Wisdom of Women Wednesday, Fashion Friday, and Fragrance
							Friday, and more, as we explore the multifaceted world of beauty
							and skincare. Our episode library consists of over 600 episodes
							that are engaging, educational, inspiring, and timeless!
						</p>
					</div>
				</div>
				<div className="  h-full flex flex-col justify-center mt-16 lg:mt-24  w-fit p-4 ">
					<h1 className="text-3xl text-white font-montserrat uppercase tracking-widest whitespace-nowrap font-thin text-center">
						Meet The Team
					</h1>
					<div className="w-full h-full space-y-8 lg:space-y-4">
						<div className="py-4 grid grid-cols-2 w-full border-r border-b rounded-br-lg my-0 lg:my-8">
							<div className="block font-montserrat uppercase text-center mx-auto">
								<h1 className="text-lg lg:text-xl ">Dr Ekta Yadav </h1>
								<p className=" text-sm lg:text-lg italic">CEO & Podcast Host</p>

								<h1> need short bio</h1>
							</div>
							<div className="w-32 lg:w-96 h-32 lg:h-96 bg-char-900 ml-auto mr-2">
								image here
							</div>
						</div>
						<div className="py-4 grid grid-cols-2 w-full border-r border-b rounded-br-lg my-0 lg:my-8">
							<div className="block font-montserrat uppercase text-center mx-auto">
								<h1 className="text-lg uppercase">Robert</h1>
								<p className="text-lg italic">CFO</p>

								<h1> short bio</h1>
							</div>
							<div className="w-32 lg:w-96 h-32 lg:h-96 bg-char-900 ml-auto mr-2">
								image here
							</div>
						</div>
						<div className="py-4 grid grid-cols-2 w-full border-r border-b rounded-br-lg my-0 lg:my-8">
							<div className="block font-montserrat uppercase text-center mx-auto">
								<h1 className=" text-lg uppercase">Flora</h1>
								<p className="text-lg italic">Graphic Designer & Manager</p>

								<h1> short bio</h1>
							</div>
							<div className="w-32 lg:w-96 h-32 lg:h-96 bg-char-900 ml-auto mr-2">
								image here
							</div>
						</div>
						<div className="py-4 grid grid-cols-2 w-full border-r border-b rounded-br-lg my-0 lg:my-8">
							<div className="block font-montserrat uppercase text-center mx-auto">
								<h1 className=" uppercase text-lg">Mike Shields</h1>
								<p className="text-lg italic">Software and Website Developer</p>
								<h1> short bio</h1>
							</div>

							<div className="w-32 lg:w-96 h-32 lg:h-96 bg-char-900 ml-auto mr-2">
								image here
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
