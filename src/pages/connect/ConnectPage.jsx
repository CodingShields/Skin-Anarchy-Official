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
		<div className='isolate overflow-hidden bg-black w-full h-screen flex flex-col justify-center items-center'>
			<div className='mx-auto  lg:mx-0'>
				<h2 className='text-6xl font-montserrat text-white tracking-widest '>CONNECT WITH US</h2>
			</div>
			<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 '>
				<div className='flex h-[300px]  min-w-[800px] gap-x-4 rounded-xl bg-black bg-opacity-70 p-6 ring-1 ring-inset ring-white hover:duration-700'>
					<div className='text-base leading-7 '>
						<h3 className='font-montserrat text-2xl text-white '>Interested in coming on the show?</h3>
						<p className='mt-2 text-white text-xl font-montserrat'>
							Join our exclusive community of Top Doctors, Makeup Artists, Celebrities and many more leaders of the skin care industry.
						</p>
						<div
						className="mx-auto"
						>
							<button
								onClick={() => setIsModalOpen(true)}
								type='button'
								className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold  shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
							>
								Apply Here
							</button>
						</div>
					</div>
				</div>
				<div className='flex h-[200px] gap-x-4 rounded-xl bg-black bg-opacity-70 p-6 ring-1 ring-inset ring-white hover:duration-700'>
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
										<a key={item.name} href={item.link} target='_blank' rel='noreferrer'>
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
				<div className='flex h-[200px] gap-x-4 rounded-xl bg-black bg-opacity-70 p-6 ring-1 ring-inset ring-white hover:duration-700'>
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
	);
};

export default ConnectPage;
