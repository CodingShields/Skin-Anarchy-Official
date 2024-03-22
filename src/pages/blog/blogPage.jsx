import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import blackMarble from "../../assets/images/blackMarble.jpeg";
import SearchBar from "../components/searchBar";
import tealTypewriter from "../../assets/images/tealTypewriter.jpeg";
import BlogKeys from "../../assets/images/blogKeys.jpeg";
import blogBG from "../../assets/images/blogBG.jpeg";
import blogKeys from "../../assets/images/blogKeys.jpeg";
import PrevBlogs from "./comp/prevBlogs";

const BlogPage = () => {
	const navigate = useNavigate();

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
							<img src={blogKeys} className='h-32' alt='blogKeys' />
							<p>title</p>
							<p>description</p>
						</div>
						<div>
							<img src={blogKeys} className='h-32' alt='blogKeys' />
							<p>title</p>
							<p>description</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
