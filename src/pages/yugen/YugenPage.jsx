import YugenBook from "./YugenBook";
const YugenPage = () => {
	return (
		<div className='w-full h-screen animate-fadeIn'>
			<div className='w-full h-full flex justify-center items-center space-x-2'>
				<YugenBook />
			</div>
		</div>
	);
};

export default YugenPage;
