import {imageArray} from "../../assets/images/about/pressLogos/featuredPress"

const FeaturedPress = () => {
	return (
		<div className='min-h-screen  w-full flex flex-col items-center justify-center bg-black mt-36'>
			<h1 className="text-white text-3xl font-montserrat font-thin tracking-widest underline underline-offset-4 decoration-1 uppercase">Featured Press Page</h1>
			<div className='min-h-screen grid grid-cols-3 gap-8 w-3/4 mx-auto pb-24'>
				{imageArray.map((image, index) => (
					<img key={index} src={image} alt={`featured press ${index}`} className='h-32 w-32 mx-auto' />
				))}
			</div>
		</div>
	);
};

export default FeaturedPress;
