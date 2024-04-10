import interviewCategories from "../../../assets/data/homepage/interviewCategoriesArray";
import Swiper from "swiper/bundle";
import makeup from "../../../assets/images/interviewCategories/makeup.jpg";
import thoughtLeaders from "../../../assets/images/interviewCategories/thoughtLeaders.png";
import journalists from "../../../assets/images/interviewCategories/journalists.png";
import brandFounders from "../../../assets/images/interviewCategories/brandFounders.jpg";
import celebs from "../../../assets/images/interviewCategories/celebs.jpg";
import topDoctor from "../../../assets/images/interviewCategories/topDoctor.jpg";
const InterviewCategoryContainer = () => {
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
		<div
		className="my-auto w-full h-fi bg-black pb-24 mt-36 z-30"
		>
			<div className='Am-img-slider-container'>
				<div className='swiper blog-slider '>
					<div className='swiper-wrapper'>
						<div className='swiper-slide'>
							<div className='blog-slider__imgs '>
								<img className='back-image grayscale ' alt='' src={topDoctor} />
								<div className='movie-image-container'>
									<img className='movie-image  blog-slider__img object-cover' alt='' src={topDoctor} />
									<div className='overly text-center'>
										<div className='w-full inline-flex justify-center items-center'>
											<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' title='-3'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentcolor'
													class='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
													/>
												</svg>
											</a>
											<p className='textshadow text-xs'>Play Episode</p>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-slider__content'>
								<h2 className='blog-slider__title text-white underline'>TOP DOCTORS</h2>
								<p className='blog-slider__text'>FEATURED - DR. MICHELLE HENRY</p>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='blog-slider__imgs object-cover'>
								<img className='back-image object-cover ' alt='' src={makeup} />
								<div className='movie-image-container  '>
									<img className='movie-image  blog-slider__img object-cover ' alt='' src={makeup} />
									<div className='overly text-center'>
										<div className='w-full inline-flex justify-center items-center'>
											<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' title='-3'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentcolor'
													class='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
													/>
												</svg>
											</a>
											<p className='text-shadow text-xs'>Play Episode</p>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-slider__content'>
								<h2 className='blog-slider__title text-white underline'>MAKE UP ARTISTS</h2>
								<p className='blog-slider__text'>FEATURED - Mario Dedivanovic</p>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='blog-slider__imgs'>
								<img className='back-image grayscale ' alt='' src={thoughtLeaders} />
								<div className='movie-image-container'>
									<img className='movie-image  blog-slider__img object-cover ' alt='' src={thoughtLeaders} />
									<div className='overly text-center'>
										<div className='w-full inline-flex justify-center items-center'>
											<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' title='-3'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentcolor'
													class='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
													/>
												</svg>
											</a>
											<p className='textshadow text-xs'>Play Episode</p>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-slider__content'>
								<h2 className='blog-slider__title text-white underline'>THOUGHT LEADERS</h2>
								<p className='blog-slider__text'>FEATURED - JEN SINCERO</p>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='blog-slider__imgs'>
								<img className='back-image object-cover' alt='' src={journalists} />
								<div className='movie-image-container'>
									<img className='movie-image  blog-slider__img object-cover ' alt='' src={journalists} />
									<div className='overly text-center'>
										<div className='w-full inline-flex justify-center items-center'>
											<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' title='-3'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentcolor'
													class='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
													/>
												</svg>
											</a>
											<p className='textshadow text-xs'>Play Episode</p>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-slider__content'>
								<h2 className='blog-slider__title text-white underline'>EDITORS AND JOURNALISTS</h2>
								<p className='blog-slider__text'>FEATURED - JESSICA CRUEL</p>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='blog-slider__imgs'>
								<img className='back-image grayscale' alt='' src={brandFounders} />
								<div className='movie-image-container'>
									<img className='movie-image  blog-slider__img object-cover ' alt='' src={brandFounders} />
									<div className='overly text-center'>
										<div className='w-full inline-flex justify-center items-center'>
											<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' title='-3'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentcolor'
													class='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
													/>
												</svg>
											</a>
											<p className='textshadow text-xs'>Play Episode</p>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-slider__content'>
								<h2 className='blog-slider__title text-white underline'>Brand Founders</h2>
								<p className='blog-slider__text'>FEATURED - DR. YANNIS ALEXANDRIDES</p>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='blog-slider__imgs'>
								<img className='back-image  blog-slider__backimg ' alt='' src={celebs} />
								<div className='movie-image-container'>
									<img className='movie-image  blog-slider__img object-cover' alt='' src={celebs} />
									<div className='overly text-center'>
										<div className='w-full inline-flex justify-center items-center'>
											<a href='https://open.spotify.com/episode/7hNlatkWtg0tH27NwfivPB?si=Jq4lVZx0RTC0o00cQ5t06w ' title='-3'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentcolor'
													class='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
													/>
												</svg>
											</a>
											<p className='textshadow text-xs'>Play Episode</p>
										</div>
									</div>
								</div>
							</div>
							<div className='blog-slider__content'>
								<h2 className='blog-slider__title text-white underline'>CELEBRITIES</h2>
								<p className='blog-slider__text'>FEATURED - TIA MOWRY</p>
							</div>
						</div>
					</div>
					<div className='swiper-pagination'></div>
				</div>
			</div>
		</div>
	);
};

export default InterviewCategoryContainer;
