const SignatureBar = () => {
	return (
		<div className='w-full h-fit py-64 relative block'>
			<h1 className=' text-gray-100 lg:text-3xl xxl:text-4xl text-center font-montserrat tracking-[8px]'>
				“ WE ARE A LIBRARY OF BEAUTY, A CURATED SOURCE FOUNDED ON SCIENCE AND FACTS, NOT TRENDS ”
			</h1>
			<div className='flex flex-row justify-center w-full gap-12 text-gray-100 py-24'>
				<h1 className=' text-8xl font-bold text-center font-signature text-gray-100'>Ekta Yadav </h1>{" "}
			</div>{" "}
			<div className='flex flex-row justify-center items-center w-3/4 h-fit space-x-4 mx-auto'>
				<h1 className=' text-2xl font-thin font-montserrat text-bottom  w-fit text-gray-100'>EKTA YADAV </h1>
				<h3 className='text-2xl font-montserrat italic text-gray-100'>MD. MBA. MS.</h3>
			</div>
		</div>
	);
};

export default SignatureBar;
