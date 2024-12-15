import { useState, useEffect } from "react";
import { imageArray } from "../../assets/images/about/pressLogos/featuredPress";
import FeaturedPressModal from "../components/FeaturedPressModal";
import { StartPageLoadTop } from "../../utilities/utilities";
const FeaturedPress = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		message: "",
	});

	const [featuredPressLink, setFeaturedPressLink] = useState({
		link: "",
		openModal: false,
	});
	const handleMouseOver = (e) => {
		setState({
			...state,
			error: false,
			message: "",
		});
		setFeaturedPressLink({ link: e.target.name, openModal: true });
	};

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div className="min-h-screen  w-full flex flex-col items-center justify-center bg-black mt-36 animate-fadeIn">
			<FeaturedPressModal
				link={featuredPressLink.link}
				open={featuredPressLink.openModal}
				close={() => setFeaturedPressLink({ link: "", openModal: false })}
			/>
			<h1 className="text-white text-2xl text-center lg:text-6xl font-montserrat font-thin tracking-widest underline decoration-[1px] uppercase underline-offset-[12px]">
				Featured Press
			</h1>
			<p className="text-white text-lg text-center  lg:text-2xl font-montserrat font-thin tracking-widest mt-8 lg:mt-4">
				Published Articles and Press Releases
			</p>
			<div className="min-h-screen grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 w-3/4 mx-auto mb-24 mt-8">
				{imageArray.map((item, index) => (
					<img
						key={index}
						src={item.image}
						alt={`featured press ${index}`}
						name={item.link}
						onClick={(e) => handleMouseOver(e)}
						className="h-32 w-32 mx-auto cursor-pointer lg:hover:border rounded-full ease-in-out duration-100 transition-all lg:hover:scale-150"
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturedPress;
