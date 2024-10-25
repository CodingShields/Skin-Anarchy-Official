import { useState, useEffect } from "react";
import "../../styles/custom.scss";
import {
	MagnifyingGlassIcon,
	ChevronDoubleDownIcon,
	ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import BlogNav from "./components/BlogNav";
import CurrentBlog from "./CurrentBlog";
import BeautyCultureBlog from "./BeautyCultureBlog";
const SkinAnarchyBlog = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
		searchInput: "",
		activeMenu: "currentBlog",
		blogCatClosed: false,
		blogFullScreenMode: false,
		activeBlog: "currentBlog",
		currentBlog: true,
		beautyCultureBlog: false,
	});

	const handleSelection = (selection) => {
		console.log(selection);
		if (selection === "currentBlog") {
			setState({
				...state,
				activeMenu: selection,
				activeBlog: selection,
				currentBlog: true,
			});
		} else if (selection === "beautyCulture") {
			setState({
				...state,
				activeMenu: selection,
				activeBlog: selection,
				BeautyCultureBlog: true,
				currentBlog: false,
			});
		}
	};

	return (
		<div className="w-full min-h-screen animate-fadeIn bg-white relative">
			<div className="w-full h-fit border-b-2 border-black pt-6 block">
				<div
					className={`w-full flex flex-col z-10 items-center justify-center mt-8 ${state.blogFullScreenMode ? "h-0 " : "h-36 animate-fadeIn"}`}
				>
					<h1
						style={{
							fontWeight: "400",
						}}
						className="text-3xl lg:text-8xl text-black font-montserrat uppercase w-full tracking-widest text-center"
					>
						Skin Anarchy
					</h1>
					<h1 className="text-3xl lg:text-8xl text-black font-montserrat uppercase w-full tracking-widest text-center">
						{" "}
						Blog
					</h1>
				</div>
				<BlogNav blogCat={handleSelection} />
			</div>
			<div>
				<CurrentBlog open={state.currentBlog} />
			</div>
		</div>
	);
};

export default SkinAnarchyBlog;
