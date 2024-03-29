const HighlightGuests = () => {
	// const Swiper = new Swiper(".blog-slider", {
	// 	loop: true,
	// 	slidesPerView: "1",
	// 	speed: 500,
	// 	effect: "coverflow",
	// 	coverflowEffect: {
	// 		slideShadows: false,
	// 	},
	// 	mousewheel: {
	// 		invert: false,
	// 	},
	// 	autoplay: {
	// 		delay: 3000,
	// 	},
	// 	breakpoints: {
	// 		0: {
	// 			effect: "slide",
	// 			centeredSlides: false,
	// 		},
	// 		768: {
	// 			slidesPerView: "2",
	// 			centeredSlides: true,
	// 		},
	// 		1200: {
	// 			slidesPerView: "3",
	// 			centeredSlides: true,
	// 		},
	// 	},
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true,
	// 		type: "fraction",
	// 	},
	// });

	return (
		<div className='w-full h-full bg-black'>
			{/* <section class='Am-img-slider-container'>
				<div class='swiper blog-slider'>
					<div class='swiper-wrapper'>
						<div class='swiper-slide'>
							<div class='blog-slider__imgs'>
								<img
									class='back-image'
									alt=''
									src='https://m.media-amazon.com/images/M/MV5BNzZhZjJlNzMtZmVlNi00MTIxLTg3OTMtMTI2NTVkYWQ4NDQyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
								/>
								<div class='movie-image-container'>
									<img
										class='movie-image  blog-slider__img'
										alt=''
										src='https://m.media-amazon.com/images/M/MV5BNzZhZjJlNzMtZmVlNi00MTIxLTg3OTMtMTI2NTVkYWQ4NDQyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
									/>
									<div class='overly'>
										<a href='#' title='-1'>
											<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
												<path
													fill='currentColor'
													d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div class='blog-slider__content'>
								<h2 class='blog-slider__title'>REVENGE 2017</h2>
								<p class='blog-slider__text'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni quis repellat eaque fuga fugit, obcaecati ipsum odit ipsa
									saepe dere.
								</p>
								<span class='blog-slider__rate'>IMDB 6.5/10</span>
							</div>
						</div>
						<div class='swiper-slide'>
							<div class='blog-slider__imgs'>
								<img class='back-image' alt='' src='https://upload.wikimedia.org/wikipedia/en/a/a9/EndlessLove2014Poster.jpg' />
								<div class='movie-image-container'>
									<img class='movie-image  blog-slider__img' alt='' src='https://upload.wikimedia.org/wikipedia/en/a/a9/EndlessLove2014Poster.jpg' />
									<div class='overly'>
										<a href='#' title='-1'>
											<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
												<path
													fill='currentColor'
													d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div class='blog-slider__content'>
								<h2 class='blog-slider__title'>Endless Love 2014</h2>
								<p class='blog-slider__text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illum odit? Odit ipsum enim sapiente eius, ad numqure.
								</p>
								<span class='blog-slider__rate'>IMDB 7.5/10</span>
							</div>
						</div>
						<div class='swiper-slide'>
							<div class='blog-slider__imgs'>
								<img
									class='back-image'
									alt=''
									src='https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/endless-2020/large_endless-poster.jpg'
								/>
								<div class='movie-image-container'>
									<img
										class='movie-image  blog-slider__img'
										alt=''
										src='https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/endless-2020/large_endless-poster.jpg'
									/>
									<div class='overly'>
										<a href='#' title='-1'>
											<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
												<path
													fill='currentColor'
													d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div class='blog-slider__content'>
								<h2 class='blog-slider__title'>endless 2020</h2>
								<p class='blog-slider__text'>
									Lorem ipsum dolor, sit amet consm dolor, sit amet consectetur adipisilo natus.ectetur adipisilo natus.
								</p>
								<span class='blog-slider__rate'>IMDB 3.7/10</span>
							</div>
						</div>
						<div class='swiper-slide'>
							<div class='blog-slider__imgs'>
								<img class='back-image' alt='' src='https://flxt.tmsimg.com/assets/p16919037_p_v8_aa.jpg' />
								<div class='movie-image-container'>
									<img class='movie-image  blog-slider__img' alt='' src='https://flxt.tmsimg.com/assets/p16919037_p_v8_aa.jpg' />
									<div class='overly'>
										<a href='#' title='-1'>
											<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
												<path
													fill='currentColor'
													d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div class='blog-slider__content'>
								<h2 class='blog-slider__title'>Underwater 2020</h2>
								<p class='blog-slider__text'>
									Lorem ipsum dolor, sit amet consm dolor, sit amet consectetur adipisilo natus.ectetur adipisilo natus.
								</p>
								<span class='blog-slider__rate'>IMDB 3.7/10</span>
							</div>
						</div>
						<div class='swiper-slide'>
							<div class='blog-slider__imgs'>
								<img
									class='back-image  blog-slider__backimg'
									alt=''
									src='https://www.brhspawprint.com/wp-content/uploads/2020/10/61idSH9iPTL._AC_SY741_.jpg'
								/>
								<div class='movie-image-container'>
									<img
										class='movie-image  blog-slider__img'
										alt=''
										src='https://www.brhspawprint.com/wp-content/uploads/2020/10/61idSH9iPTL._AC_SY741_.jpg'
									/>
									<div class='overly'>
										<a href='#' title='-3'>
											<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
												<path
													fill='currentColor'
													d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div class='blog-slider__content'>
								<h2 class='blog-slider__title'>Mulan 2020</h2>
								<p class='blog-slider__text'>
									Lorem ipsum dolor, sit amet consm dolor, sit amet consectetur adipisilo natus.ectetur adipisilo natus.
								</p>
								<span class='blog-slider__rate'>IMDB 3.7/10</span>
							</div>
						</div>
					</div>
					<div class='swiper-pagination'></div>
				</div>
			</section> */}
		</div>
	);
};

export default HighlightGuests;
