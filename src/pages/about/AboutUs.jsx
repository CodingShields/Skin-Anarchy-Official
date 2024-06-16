const AboutUs = () => {
	return (
		<div className='w-full mx-auto h-fit text-white flex flex-col justify-between items-center mt-36 pb-64 space-x-4'>
			{/* <div> */}

			<div className='w-full  h-full flex flex-row justify-evenly '>
				<div className='font-thin text-xl leading-[80px] font-montserrat tracking-widest pl-8 space-y-6 w-[1000px] flex flex-col h-full justify-center items-center mt-16'>
					<h1 className='font-montserrat font-thin uppercase text-6xl tracking-widest  whitespace-nowrap mb-2 underline underline-offset-8 decoration-1 text-left'>
						Discover the Art{" "}
					</h1>
					<h1 className='font-montserrat font-thin uppercase text-3xl tracking-widest  whitespace-nowrap mb-10  text-left'>of Personalized Beauty</h1>
					<p className=' indent-8'>
						Join us on a journey to explore the multifaceted world of beauty, both inside and out, with the award winning and industry acclaimed
						Skincare Anarchy podcast. Available across all major platforms, including Apple Podcasts, Spotify, Google Podcasts, and many more, we
						bring you open-access, full-length interviews with pioneers and leaders in the realm of skin health, wellness and beauty.
					</p>
					<p className=' indent-8 '>
						At Skincare Anarchy, we understand that beauty is not a “one size fits all” concept. Each episode is a deep dive into the diverse aspects
						of self-care and wellness, tailored to the unique needs and experiences of each individual. Our conversations cover a wide range of
						topics, from the latest in skincare innovations to holistic approaches to health, ensuring that there’s something for everyone.
					</p>

					<p className='indent-8'>
						Our platform features interviews with a variety of influential figures, from brand founders, doctors, best-selling authors to celebrities,
						all sharing their insights on the importance of self-care and holistic wellness. Skincare Anarchy is not just a podcast; it’s a library of
						knowledge for professionals and enthusiasts alike, offering a comprehensive survey of the many moving parts that make up the world of
						wellness.
					</p>
					<p className='indent-8'>
						Whether you are a skincare enthusiast, a beauty industry professional, or someone looking to enhance your overall well-being, our podcast
						offers a wealth of knowledge and insights. Tune in wherever you stream your podcasts and embark on a journey to discover the true essence
						of beauty, personalized to your individual journey.
					</p>
				</div>
				<div className=' w-[800px] h-full flex flex-col justify-center mt-24  w-fit p-4 '>
					<h1 className='text-3xl text-white font-montserrat uppercase tracking-widest whitespace-nowrap font-thin text-center'>
						Skincare Anarchy Team
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
								<h1 className='text-lg uppercase'>Darren</h1>
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
