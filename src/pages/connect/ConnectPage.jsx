import React, { useState } from "react";
import ContactForm from "../components/contact";
import socialNav from "../../assets/data/socialNav";
const ConnectPage = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModal = () => {
		console.log("click");
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div
			className={
				isModalOpen
					? "isolate overflow-hidden bg-gray-900 w-full h-screen flex flex-col justify-center items-center"
					: "isolate overflow-hidden bg-gray-900 backdrop-blur-xl w-full h-screen flex flex-col justify-center items-center"
			}
		>
			<div className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'>
				<div className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40' />
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-bold text-white tracking-tight sm:text-6xl'>CONNECT WITH US</h2>
					<p className='mt-6 text-lg leading-8 text-gray-300'>Need Data</p>
				</div>
				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 '>
					<div className='flex gap-x-4 rounded-xl bg-black bg-opacity-70 p-6 ring-1 ring-inset shadow-gray-700 shadow-md hover:shadow-gray-400 hover:shadow-lg hover:duration-700'>
						<div className='text-base leading-7 '>
							<h3 className='font-semibold text-white '>Interested in coming on the show?</h3>
							<p className='mt-2 text-white'>Some text</p>
							<button
								onClick={() => setIsModalOpen(true)}
								type='button'
								className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold  shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
							>
								Apply Here
							</button>
						</div>
					</div>
					<div className='flex gap-x-4 rounded-xl bg-black bg-opacity-70 p-6 ring-1 ring-inset place-content-center shadow-gray-700 shadow-md hover:shadow-gray-400 hover:shadow-lg hover:duration-700'>
						<div className='text-base leading-7 w-full h-full'>
							<h3 className='font-semibold text-white '>Come Join & Follow Us</h3>
							<p className='mt-2 text-white'> Some text</p>
							<div className='flex gap-x-14 p-6 '>
								{socialNav.map((item, id) => {
									return (
										<div
											key={id}
											className='h-fit w-fit flex justify-center items-center hover:animate-pulse hover:-translate-y-1.5 hover:cursor-pointer'
										>
											<a key={item.name} href={item.link} target='_blank'>
												{/* <span className='sr-only'>{item.name}</span> */}
												<img
													className='h-8 hover:scale-150 grayscale ease-in-out transition-all hover:grayscale-0 hover:-translate-y-1 hover:duration-300 '
													src={item.icon}
												/>
											</a>{" "}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className='flex gap-x-4 rounded-xl bg-black bg-opacity-70 p-6 ring-1 ring-inset shadow-gray-700 shadow-md hover:shadow-gray-400 hover:shadow-lg hover:duration-700'>
						<div className='text-base leading-7'>
							<h3 className='font-semibold text-white'>Interested in becoming a sponsor?</h3>
							<p className='mt-2 text-white'>Some text</p>
							<button
								onClick={() => setIsModalOpen(true)}
								type='button'
								className='rounded-md 
								
								px-2.5 py-1.5 text-sm font-semibold bg-white text-black shadow-sm transform-translate hover:ease-in-out hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
							>
								{/* bg-indigo-500 */}
								Apply Here
							</button>
						</div>
					</div>
				</div>
			</div>
			{isModalOpen ? (
				<div className='flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
					<div className='flex flex-col justify-center items-center w-11/12 h-5/6 rounded-xl shadow-lg '>
						<ContactForm handleModal={handleModal} />
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default ConnectPage;
