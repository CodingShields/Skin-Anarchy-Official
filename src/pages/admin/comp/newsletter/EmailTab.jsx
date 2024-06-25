const EmailTab = () => {
	return (
		<div className='flex flex-col items-center justify-start w-full h-full'>
			{" "}
			<div className='flex flex-col h-fit w-full px-12 py-6'>
				<div className='flex flex-row w-full h-fit justify-center items-center'>
					<div className='w-full h-fit p-2  text-black flex flex-row justify-center items-center'>
						<h1 className='mr-2 text-2xl'>To:</h1>
						<input
							className='w-fit h-12 px-24  text-white bg-gray-200 rounded-lg'
							type='text'
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='w-full h-fit p-2  text-black flex flex-row justify-center items-center '>
						<h1 className='mr-2 text-2xl'>From:</h1>
						<input
							className='w-fit h-12 px-24  text-white bg-gray-200 rounded-lg'
							type='text'
							// value={name}
							// onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>

				{/* <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /> */}
				<div className='w-full h-fit p-2  text-black flex flex-col justify-center items-center group'>
					<h1 className='mr-2 text-2xl group-active:font-bold'>Subject</h1>
					<input
						className='w-3/4 h-12  my-4 text-white bg-gray-200 rounded-lg'
						type='text'
						// value={subject}
						// onChange={(e) => setSubject(e.target.value)}
					/>
				</div>
				<div className='w-full h-fit p-2  text-black flex flex-col justify-center items-center'>
					<h1 className='text-2xl text-gray-700 '>Message</h1>
					<textarea
						className='w-3/4 h-48 p-2 my-4 text-white bg-gray-200 rounded-lg'
						type='text'
						// value={message}
						// onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				{/* <textarea value={message} onChange={(e) => setMessage(e.target.value)} /> */}
				<button className='w-1/2 p-2 my-4 mx-auto text-white bg-blue-500 rounded-lg'>Send Email</button>
			</div>
		</div>
	);
};

export default EmailTab;
