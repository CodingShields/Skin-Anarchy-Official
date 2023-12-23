import { useState } from "react";

import singleChevronDown from "../../assets/icons/singleChevronDown.svg";


const ContactForm = ({ handleModal }) => {
	const [agreed, setAgreed] = useState(false);

	const handleFormClick = () => {
		handleModal();
	};

	return (
		<div className='flex flex-col h-fit bg-white p-10 shadow-2xl shadow-black rounded-lg backdrop-blur-2xl	 '>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Contact</h2>
				<p className='mt-2 text-lg leading-8 text-gray-600'>
					Aute magna irure deserunt veniam aliqua magna enim voluptate.
				</p>
			</div>
			<form action='#' method='POST' className='mx-auto mt-16 max-w-xl sm:mt-20'>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
					<div>
						<label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-900'>
							First name
						</label>
						<div className='mt-2.5'>
							<input
								required
								type='text'
								name='first-name'
								id='first-name'
								autoComplete='given-name'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label htmlFor='last-name' className='block text-sm font-semibold leading-6 text-gray-900'>
							Last name
						</label>
						<div className='mt-2.5'>
							<input
								required
								type='text'
								name='last-name'
								id='last-name'
								autoComplete='family-name'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='company' className='block text-sm font-semibold leading-6 text-gray-900'>
							Company
						</label>
						<div className='mt-2.5'>
							<input
								required
								type='text'
								name='company'
								id='company'
								autoComplete='organization'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='email' className='block text-sm font-semibold leading-6 text-gray-900'>
							Email
						</label>
						<div className='mt-2.5'>
							<input
								required
								type='email'
								name='email'
								id='email'
								autoComplete='email'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='phone-number' className='block text-sm font-semibold leading-6 text-gray-900'>
							Phone number
						</label>
						<div className='relative mt-2.5'>
							<div className='absolute inset-y-0 left-0 flex items-center'>
								<label htmlFor='country' className='sr-only'>
									Country
								</label>
								<select
									id='country'
									name='country'
									className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
								>
									<option>US</option>
									<option>CA</option>
									<option>EU</option>
								</select>
								<img
									src={singleChevronDown}
									className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
									aria-hidden='true'
								/>
							</div>
							<input
								required
								type='tel'
								name='phone-number'
								id='phone-number'
								autoComplete='tel'
								className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<h1 className='block text-sm font-semibold leading-6 text-gray-900'>What are you interested in?</h1>
						<select
							required
							className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
						>
							<option className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
								Select an option
							</option>

							<option className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
								Sponsorship
							</option>
							<option className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
								Being a guest on the show
							</option>
							<option className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
								Both
							</option>
							<option className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
								Other
							</option>
						</select>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='message' className='block text-sm font-semibold leading-6 text-gray-900'>
							Message
						</label>
						<div className='mt-2.5'>
							<textarea
								name='message'
								id='message'
								rows={4}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								defaultValue={""}
							/>
						</div>
					</div>
				</div>

				<div className='mt-10'>
					<button
						onClick={handleFormClick}
						type='submit'
						className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold bg-violet-300 text-black shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
					>
						Let's talk
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
