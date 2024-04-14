import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

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
			<div className='w-full h-fit flex flex-row text-center'>
				<p className='text-6xl font-bold text-gray-700 font-playfair mx-auto mt-12'>Skinanarchy Blog </p>
			</div>

			<div className='w-full h-fit flex flex-col  text-center'>
				{" "}
				<p className='w-full text-center'>main blog content area</p>
				<div className='w-full h-fit flex flex-row'>
					<div className='w-full h-fit text-center flex flex-col  place-items-center space-y-16'>
						<div>
							<img  className='h-32' alt='blogKeys' />
							<p>title</p>
							<p>description</p>
						</div>
						<div>
							<img  className='h-32' alt='blogKeys' />
							<p>title</p>
							<p>description</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkinAnarchyBlog;
