import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";

const InterviewCategoryContainer = () => {
    return (
			<div className='w-full h-full bg-gradient-to-t from-black to-white p-36'>
				<div className='grid grid-cols-3  gap-8 '>
					{interviewCategories.map((item) => (
						<div key={item.id} className='flex flex-col w-auto h-auto p-4 bg-white rounded-md  group hover:bg-black hover:rounded-2xl hover:shadow-gray-800 hover:shadow-2xl hover:scale-125 transition-all duration-500 ease-in-out'>
							<img className='w-20 h-20 pt-0 mx-auto place-items-center grayscale group-hover:grayscale-0' src={item.icon} />
							<h3 className='mt-2 text-2xl font-bold text-center text-gray-600 group-hover:text-white'>{item.title}</h3>
							<p className='mt-2 text-xl text-center text-gray-400 group-hover:text-white'>{item.details}</p>
						</div>
					))}
				</div>
			</div>
		);
};

export default InterviewCategoryContainer;
