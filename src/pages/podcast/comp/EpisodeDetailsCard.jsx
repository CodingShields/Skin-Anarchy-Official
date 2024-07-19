import episode1 from "../../../assets/images/podcast-widget/episode1.png";

const EpisodeDetailsCard = (props) => {
	const { children, onClick, data, image, icon, open } = props;
	console.log(open);
	return (
		<div
			className={`flex flex-col transition-all duration-700 ease-in-out  ${!open ? "bg-black text-white justify-start items-start z-30" : "bg-white text-black justify-center items-center w-full"} `}
		>
			{" "}
			<div className='w-full h-full inline-flex '>
				<img src={episode1} className= {`h-full  transition-all duration-700 ease-in-out object-cover ${!open ? "object-left min-w-48 " : "object-center "}  `} />
				<div className={`flex flex-col justify-center  ${!open ?  " h-24 items-center" :"items-start h-full" }`}>
					<p
						className={`text-[16px] h-fit whitespace-nowrap border-b border-white transition-all duration-700 ease-in-out font-semibold ${!open ? "truncate text-left indent-8 w-full" : "text-center text-black w-full"}  py-2`}
					>
						Make Up By Mario
					</p>
					<div className={`flex flex-col justify-center  ${!open ? "items-start" : "h-full overflow-y-scroll items-center border-black border-t"}`}>
						<p
							className={`text-[16px] whitespace-nowrap  transition-all duration-700 ease-in-out ${!open ? "truncate text-left indent-8 w-full h-fit" : "text-top text-black w-3/4 text-wrap h-full"}  py-2 text-left indent-8`}
						>
							{" "}
							Episode Description Description Description Description Description Description Description Description Description Description
							Description Description Episode Description Description Description Description Description Description Description Description
							Description Description Description Description
						</p>{" "}
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default EpisodeDetailsCard;
