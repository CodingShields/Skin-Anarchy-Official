import { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm";

const BecomeSponsorContainer = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		success: false,
		successMessage: "",
		loading: false,
	});

	return (
		<div className='w-full mx-auto  bg-black pb-20'>
			<div className='relative px-6 py-24 text-center bg-gradient-to-b from-gold-500 to-black isolate '>
				<h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white font-playfair'>INTERESTED IN COMING ONTO OUR SHOW?</h2>
				<div className='flex items-center justify-center mt-10 gap-x-6'>
					<button
						href='#'
						className='font-glacialRegular flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white border-2 border-gray-600 shadow-sm hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all ease-in-out duration-500 hover:text-black hover:shadow-xl hover:shadow-black'
					>
						Contact Our Team
					</button>
				</div>
				{/* <svg
					viewBox='0 0 1024 1024'
					className='absolute left-1/2 top-1/2 -z-30 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-[50%] transform rotate-45 bg-black '
					aria-hidden='true'
				></svg> */}
			</div>
		</div>
	);
};

export default BecomeSponsorContainer;
