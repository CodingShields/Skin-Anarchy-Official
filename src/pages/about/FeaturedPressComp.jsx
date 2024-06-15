import {useState, useEffect} from "react";
import { imageArray } from "../../assets/images/about/pressLogos/featuredPress"
import FeaturedPressModal from "../components/FeaturedPressModal"
const FeaturedPress = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
	})

	const [featuredPressLink, setFeaturedPressLink] = useState({
		link: "",
		openModal: false,
	})
	const handleMouseOver = (e) => {
		setState({
			...state,
			error: false,
			message: "",
		})
		setFeaturedPressLink({link: e.target.name, openModal: true})
	}

	return (
		<div className='min-h-screen  w-full flex flex-col items-center justify-center bg-black mt-36'>
			<FeaturedPressModal link={featuredPressLink.link} open={featuredPressLink.openModal} close={() => setFeaturedPressLink({link: "", openModal: false})} />
			<h1 className="text-white text-3xl font-montserrat font-thin tracking-widest underline underline-offset-4 decoration-1 uppercase">Featured Press Page</h1>
			<p className="text-white text-xl font-montserrat font-thin tracking-widest">Published articles and press releases</p>
			<div className='min-h-screen grid grid-cols-3 gap-8 w-3/4 mx-auto pb-24'>
				{imageArray.map((item, index) => (
					<img key={index} src={item.image} alt={`featured press ${index}`}
						name={item.link}
						onClick={(e) => handleMouseOver(e)} className='h-32 w-32 mx-auto cursor-pointer hover:border rounded-full ease-in-out duration-100 transition-all' />
				))}
			</div>
		</div>
	);
};

export default FeaturedPress;
