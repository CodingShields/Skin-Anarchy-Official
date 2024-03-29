const SignatureBar = () => {
	return (
		<div className='flex flex-col justify-center items-center h-[400px] w-full bg-gradient-b from-black to-white '>
			<div className='w-3/4 py-6 mt-4'>
				<h1 className=' text-gray-100 lg:text-[22px] xxl:text-4xl text-center font-playfair subpixel-antialiased tracking-[8px]'>
					“ WE ARE A LIBRARY OF BEAUTY, A CURATED SOURCE FOUNDED ON SCIENCE AND FACTS, NOT TRENDS”
				</h1>
				<div className='flex flex-row justify-center w-full gap-12 text-gray-100 pt-8'>
					<h1 className=' text-6xl font-bold text-center font-signature py-6 text-gray-100'>Ekta Yadav </h1>{" "}
				</div>{" "}
				<div
				className="flex flex-row justify-center items-center w-full h-fit py-6 space-x-4"
				>
					<h1 className=' text-lg font-bold text-bottom  w-fit text-gray-100'>EKTA YADAV </h1>
					<h3 className='text-xlg font-openSans italic text-gray-100'>MD. MBA. MS.</h3>
				</div>
			</div>
		</div>
	);
};

export default SignatureBar;
