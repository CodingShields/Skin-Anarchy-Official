import YugenBook from "./YugenBook";
const YugenPage = () => {
	return (
		<div className="w-full h-screen animate-fadeIn">
			<div className="fixed top-0 left-0 w-full h-full">
				<YugenBook />
			</div>
		</div>
	);
};

export default YugenPage;
