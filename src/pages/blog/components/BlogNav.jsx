import { useState, useEffect } from "react";
import { Button } from "../../components/Components";
import {
	MagnifyingGlassIcon,
	ChevronDoubleDownIcon,
	ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
const BlogNav = ({ blogCat }) => {
	const [state, setState] = useState({
		activeMenu: "currentBlog",
		blogCatClosed: false,
	});
	const buttonStyle = `uppercase font-thin  tracking-widest text-white  animate-fadeIn translate-x-6 transition-all ease-in-out duration-500 min-h-6 w-fit text-lg text-white/50 ${state.blogCatClosed ? "hidden" : ""}`;
	const activeButtonStyle = `uppercase text-gold-500 tracking-widest  animate-fadeIn indent-4 translate-x-16 transition-all ease-in-out duration-500 min-h-6 text-lg font-thinner w-full  ${state.blogCatClosed ? "hidden" : ""}`;

	const handleSelection = (selection) => {
		console.log(selection);
		setState({ ...state, activeMenu: selection });
		blogCat(selection);
	};

	return (
		<div
			className={`flex flex-col  lg:flex-row lg:justify-center lg:items-center items-start justify-start  w-full space-y-4 lg:space-x-12 relative bg-black transition-all ease-in-out duration-500 animate-fadeIn ${state.blogCatClosed ? "h-10 overflow-hidden" : "h-[300px] py-4"} ${state.blogFullScreenMode ? "h-0 " : "h-36 animate-fadeIn"}`}
		>
			<h1
				className={`font-montserrat font-thin uppercase tracking-widest text-white indent-6 text-2xl animate-fadeIn ${state.blogCatClosed ? "hidden h-0" : "block"} `}
			>
				Categories{" "}
			</h1>
			<div
				className={`flex flex-row justify-evenly items-center space-x-4 w-full bg-black transition-all ease-in-out animate-fadeIn duration-500 px-2 ${state.blogCatClosed ? "" : "hidden"}`}
			>
				<h1
					className={`font-montserrat font-thin uppercase tracking-widest text-white text-xl`}
				>
					Categories{" "}
				</h1>
				<div className="w-6 h-6">
					<ChevronDoubleDownIcon
						onClick={() =>
							setState({ ...state, blogCatClosed: !state.blogCatClosed })
						}
						className={` w-full h-full text-white ${state.blogCatClosed ? "rotate-180" : "hidden"}`}
					/>
				</div>

				<h1 className="uppercase text-gold-500 tracking-widest  animate-fadeIn transition-all ease-in-out duration-500 min-h-6 text-lg font-thinner w-fit">
					{state.activeMenu}
				</h1>
			</div>

			<div
				className={` ${state.blogCatClosed ? "h-0 overflow-hidden" : " flex flex-col space-y-4 h-12 "} `}
			>
				<Button
					text="Current Blog"
					style={`${state.activeMenu === "currentBlog" ? activeButtonStyle : buttonStyle}`}
					onClick={() => handleSelection("currentBlog")}
				/>
				<Button
					text="Beauty Culture"
					style={`${state.activeMenu === "beautyCulture" ? activeButtonStyle : buttonStyle}`}
					onClick={() => handleSelection("beautyCulture")}
				/>
				<Button
					text="Fragrance"
					style={`${state.activeMenu === "fragrance" ? activeButtonStyle : buttonStyle}`}
					onClick={() => handleSelection("fragrance")}
				/>
				<Button
					text="Science of Skin"
					style={`${state.activeMenu === "scienceOfSkin" ? activeButtonStyle : buttonStyle}`}
					onClick={() => handleSelection("scienceOfSkin")}
				/>
				<Button
					text="Previous Blogs"
					style={`${state.activeMenu === "previousBlogs" ? activeButtonStyle : buttonStyle}`}
					onClick={() => handleSelection("previousBlogs")}
				/>
				<div className="w-full block">
					<ChevronDoubleDownIcon
						onClick={() =>
							setState({ ...state, blogCatClosed: !state.blogCatClosed })
						}
						className={` w-6 h-6 text-white ml-auto mb-6 ${!state.blogCatClosed ? "rotate-180" : "hidden"}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogNav;
