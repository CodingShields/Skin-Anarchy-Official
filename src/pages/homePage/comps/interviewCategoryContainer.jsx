import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";

const InterviewCategoryContainer = () => {
    return (
			<div className='w-full h-full bg-white p-14'>
				<div className='grid grid-cols-3 gap-8 '>
					{interviewCategories.map((item) => (
						<div key={item.id} className='flex flex-col w-auto h-auto p-4 bg-white '>
							<img className='w-20 h-20 pt-0 mx-auto place-items-center' src={item.icon} />
							<h3 className='mt-2 text-2xl font-bold text-center text-gray-600 hover:text-white'>{item.title}</h3>
							<p className='mt-2 text-xl text-center text-gray-400'>{item.details}</p>
						</div>
					))}
				</div>
			</div>
		);
};

export default InterviewCategoryContainer;
