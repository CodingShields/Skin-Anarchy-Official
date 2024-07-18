import signature from "../../../assets/images/signature.svg";

const SignatureBar = () => {
	return (
		<div className='w-full h-fit pt-64 sm:pt-36 relative block'>
			<h1 className=' text-gray-100 text-2xl sm:text-[11px] xxl:text-3xl text-center font-montserrat tracking-[8px] '>
				“ WE ARE A LIBRARY OF BEAUTY, A CURATED SOURCE FOUNDED ON SCIENCE AND FACTS, NOT TRENDS ”
			</h1>
			<div className='flex flex-row justify-center w-full items-center gap-12 text-gray-100 py-24 sm:py-8'>
				<img src={signature} className='w-[800px] sm:w-[300px] ' />
		
			</div>
		</div>
	);
};

export default SignatureBar;
