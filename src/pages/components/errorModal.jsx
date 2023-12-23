const ErrorModal = () => {
	return (
		<div className='p-4 border-l-4 border-yellow-400 bg-yellow-50'>
			<div className='flex'>
				<div className='flex-shrink-0'>
					<ExclamationTriangleIcon className='w-5 h-5 text-yellow-400' aria-hidden='true' />
				</div>
				<div className='ml-3'>
					<p className='text-sm text-yellow-700'>
						You have no credits left.{" "}
						<a href='#' className='font-medium text-yellow-700 underline hover:text-yellow-600'>
							Upgrade your account to add more credits.
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};
