

const NewsLetterContainer = () => {
  return (
		<div className='w-full h-fit bg-gradient-to-t from-black to-char-900 py-48'>
			<div className='grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-12 '>
				<div className='max-w-xl text-3xl font-bold text-white sm:text-4xl lg:col-span-7 font-playfair'>
					<h2 className='inline sm:block lg:inline xl:block '>Want Skin Anarchy podcast news and updates?</h2>{" "}
					<p className='inline sm:block lg:inline xl:block my-2 text-2xl ml-24'>Sign up for our weekly newsletter.</p>
				</div>
				<form className='w-full max-w-md lg:col-span-5 lg:pt-2'>
					<div className='flex gap-x-4'>
						<label htmlFor='email-address' className='sr-only'>
							Email address
						</label>
						<input
							id='email-address'
							name='email'
							type='email'
							autoComplete='email'
							required
							className='min-w-0 flex-auto placeholder:text-white placeholder:font-glacialRegular placeholder:font-thin rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gold-500 sm:text-sm sm:leading-6'
							placeholder='Enter your email'
						/>
						<button
							type='submit'
							className='font-glacialRegular flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white border-2 border-char-900 shadow-sm hover:border-white hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-char-900 transition-all ease-in-out duration-500 hover:text-black hover:shadow-xl hover:shadow-black'
						>
							Subscribe
						</button>
					</div>
					<p className='mt-4 text-sm leading-6 text-gray-200 font-glacialRegular font-thin '>
						We care about your data. Read our{" "}
						<a href='#' className='text-white font-glacialRegular font-thin hover:underline '>
							Privacy Policy
						</a>
						.
					</p>
				</form>
			</div>
		</div>
	);
};

export default NewsLetterContainer;
