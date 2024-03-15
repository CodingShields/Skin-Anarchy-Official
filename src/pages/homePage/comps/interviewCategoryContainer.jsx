import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";

const InterviewCategoryContainer = () => {
	return (
		<div className='w-full h-full bg-black p-36 z-20'>
			<h1
			className="font-playfair text-3xl text-white text-center mb-20"
			>INTERVIEW CATEGORIES</h1>
			<div className='grid grid-cols-3  gap-14 '>
				{interviewCategories.map((item) => (
					<div
						key={item.id}
						className='flex flex-col w-fit h-[420px]  justify-start px-8 bg-black rounded-5xl  shadow-sm shadow-gold-500 group hover:bg-white hover:rounded-7xl hover:shadow-white hover:shadow-lg hover:scale-125 transition-all duration-500 ease-in-out'
					><div
					className="inline-flex w-fit justify-around items-center mx-auto mt-4"
						>
						<img
							className='h-12 w-fit place-items-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out'
							src={item.icon}
						/>
						<h3 className='w-full font-openSans text-[22px] font-bold text-center text-gray-600 group-hover:text-black transition-all duration-500 ease-in-out'>
							{item.title}
							</h3>
						</div>
						<p className='font-glacialRegular text-sm text-center text-gray-400 group-hover:text-black transition-all duration-500 ease-in-out'>
							{item.details}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InterviewCategoryContainer;
