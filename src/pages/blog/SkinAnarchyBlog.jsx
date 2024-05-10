import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import test from "../../assets/data/mediumData/test.html";
const SkinAnarchyBlog = () => {
	const navigate = useNavigate();

	const categories = [
		{
			name: "Beauty Culture",
			link: "/members-area/blog/beauty-culture",
		},
		{
			name: "Fragrance",
			link: "/members-area/blog/fragrance",
		},
		{
			name: "Podcast Summaries",
			link: "/members-area/blog/podcast-summaries",
		},
		{
			name: "Science of Skin",
			link: "/members-area/blog/science-of-skin",
		},
	];

	return (
		<div className='flex flex-col w-full h-full'>
			<div className='w-full h-screen mt-72 font-montserrat'>
				<iframe title='External Content' src={test} width='100%' height='500' frameBorder='0' />
			</div>
		</div>
	);
};

export default SkinAnarchyBlog;
