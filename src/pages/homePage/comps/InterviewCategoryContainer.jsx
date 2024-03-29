import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";

const InterviewCategoryContainer = () => {
	return (
		<div className='block bg-black px-36 pt-16 h-[1200px] z-10'>
			<h1 className='font-playfair text-3xl text-white text-center mb-20'>INTERVIEW CATEGORIES</h1>
			<div className='flex flex-row flex-wrap'>
				{interviewCategories.map((item) => (
					<div
						key={item.id}
						className='mx-auto grid grid-cols-1 w-fit h-48 my-10 hover:h-fit justify-center px-8 py-2 rounded-xl group hover:bg-white hover:shadow-white hover:shadow-lg hover:scale-115 transition-all duration-1000 ease-in-out'
					>
						<h3 className='w-full py-2 font-openSans text-[22px] font-bold text-center text-white group-hover:text-black transition-all duration-1000 ease-in-out'>
							{item.title}
						</h3>
						<p className='font-glacialRegular w-[350px] h-fit group-hover:leading-loose	 truncate group-hover:text-[18px] group-hover:whitespace-normal tracking-widest text-[18px] text-center text-gray-600 group-hover:text-black '>
							{item.details}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InterviewCategoryContainer;
