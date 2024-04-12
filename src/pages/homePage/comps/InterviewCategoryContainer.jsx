import { useState, useEffect } from "react";

import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";
import Swiper from "swiper/bundle";
import makeup from "../../../assets/images/interviewCategories/makeup.jpg";
import thoughtLeaders from "../../../assets/images/interviewCategories/thoughtLeaders.png";
import journalists from "../../../assets/images/interviewCategories/journalists.png";
import brandFounders from "../../../assets/images/interviewCategories/brandFounders.jpg";
import celebs from "../../../assets/images/interviewCategories/celebs.jpg";
import topDoctor from "../../../assets/images/interviewCategories/topDoctor.jpg";
const InterviewCategoryContainer = () => {
	const [openBar, setOpenBar] = useState(true);

	const swiper = new Swiper(".blog-slider", {
		loop: true,
		slidesPerView: "1",
		speed: 500,
		effect: "coverflow",
		coverflowEffect: {
			slideShadows: false,
		},
		mousewheel: {
			invert: false,
		},
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			0: {
				effect: "slide",
				centeredSlides: false,
			},
			768: {
				slidesPerView: "2",
				centeredSlides: true,
			},
			1200: {
				slidesPerView: "3",
				centeredSlides: true,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			type: "fraction",
		},
	});

	return (
		<div className='my-auto w-full h-fit bg-black pb-24 mt-36 '>
			<div>
				<h1 className='text-white text-4xl font-bold text-center py-12'>Interview Categories</h1>
			</div>
			<div className='w-full mx-auto group'>
				<div className='grid grid-cols-6 w-[30%] mx-auto group-hover:w-[80%] transition-all duration-500 ease-in-out h-[700px]'>
					<div className='relative overflow-x-hidden mx-auto '>
						{/* <h2 className='text-white underline text-center z-30'>TOP DOCTORS</h2> */}
						<img src={topDoctor} className='w-64 h-96 object-cover grayscale hover:grayscale-0' />
						<div>
							<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w '></a>
							<p className='text-white text-xs'>Play Episode</p>
						</div>
						<div>
							<p>FEATURED - DR. MICHELLE HENRY</p>
						</div>
					</div>
					<div className='relative overflow-x-hidden mx-auto  '>
						{/* <h2 className=' text-white underline'>TOP MAKEUP ARTISTS</h2> */}
						<img src={makeup} className='w-64 h-96 object-cover grayscale hover:grayscale-0' />
						<div>
							<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w '></a>
							<p className='text-white text-xs'>Play Episode</p>
						</div>

						<div>
							<p>FEATURED - Mario Dedivanovic</p>
						</div>
					</div>
					<div className='relative overflow-x-hidden mx-auto '>
						{/* <h2 className=' text-white underline'>TOP DOCTORS</h2> */}
						<img src={thoughtLeaders} className='w-64 h-96 object-cover grayscale hover:grayscale-0' />
						<div>
							<div>
								<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w '></a>
								<p className='text-white text-xs'>Play Episode</p>
							</div>

							<div>
								<p>FEATURED - Jen Sincero</p>
							</div>
						</div>
					</div>
					<div className='relative overflow-x-hidden mx-auto'>
						{/* <h2 className=' text-white underline'>TOP DOCTORS</h2> */}
						<img src={journalists} className='w-64 h-96 object-cover grayscale hover:grayscale-0' />
						<div>
							<div>
								<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w '></a>
								<p className='text-white text-xs'>Play Episode</p>
							</div>

							<div>
								<p>FEATURED - Jessica Cruel</p>
							</div>
						</div>
					</div>
					<div className='relative overflow-x-hidden mx-auto '>
						{/* <h2 className=' text-white underline'>Brand Founders</h2> */}
						<img src={brandFounders} className='w-64 h-96 object-cover grayscale hover:grayscale-0' />
						<div>
							<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w '></a>
							<p className='text-white text-xs'>Play Episode</p>
						</div>

						<div>
							<p>FEATURED - Jessica Cruel</p>
						</div>
					</div>
					<div className='relative overflow-x-hidden mx-auto '>
						{/* <h2 className=' text-white underline'>Celebrities</h2> */}
						<img src={celebs} className='w-64 h-96 object-cover grayscale hover:grayscale-0' />
						<div>
							<p className=' text-xs'>Play Episode</p>
							<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w '></a>
							<p>FEATURED - Jessica Cruel</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InterviewCategoryContainer;
