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
			<div className='relative px-6 py-24 text-center bg-black isolate '>
				<h2 className='max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white font-playfair'>INTERESTED IN COMING ONTO OUR SHOW?</h2>
				<div className='flex items-center justify-center mt-10 gap-x-6'>
					<button
						href='#'
						className='rounded-md bg-white px-3.5 py-2.5 text-sm font-glacialRegular text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
					>
						Contact Our Team
					</button>
				</div>
				<svg
					viewBox='0 0 1024 1024'
					className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-[50%] transform rotate-45 bg-black -z-10'
					aria-hidden='true'
				>
					<circle cx={512} cy={512} r={512} fill='#af966' fillOpacity='0.7' />
					<defs>
						<radialGradient>
							<stop stopColor='#ffff' />
							<stop offset={1} stopColor='#af966f' />
						</radialGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default BecomeSponsorContainer;
