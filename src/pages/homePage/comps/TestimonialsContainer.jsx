import { useEffect, useState } from "react";
import { gsap } from "gsap";

const TestimonialsContainer = () => {
	const [testimonialIndex, setTestimonialIndex] = useState(0);
	const [testimonials] = useState([
		{
			lineOne: "Truly Genuine Discussion on Beauty",
			lineTwo:
				"Love listening to this show. It brings such stimulating and authentic reflections. Thank you Dr. Ekta",
			lineThree: "Stamina Cosmetics (October 6, 2023)",
		},
		{
			lineOne: "Best Podcast I EVER Found",
			lineTwo:
				"Dr. Ekta is a visionary genius I learn something new from every episode and as someone aspiring to go into dermatology, this podcast is a must listen. I am obsessed with all of the guests she has on and my favorite parts are when SHE is the one talking because she usually knows even more than the guests. If you are anyone needing reel insight into how the world of beauty works, this is THE TOOL for you…",
			lineThree: "Rachel Santoro (April 15, 2023) on Apple Podcasts",
		},
		{
			lineOne: "Deep insights - Worth a listen",
			lineTwo:
				"I’ve listened to thousands of hours of beauty podcast content - this one is by far one of the best out there. Ekta is a pro, she knows her stuff and offers a deeper look at the industry. Highly recommend a listen.",
			lineThree: "Britt C Price (June 6, 2023) on Apple Podcasts ",
		},
		{
			lineOne: "Best Podcast I EVER Found",
			lineTwo:
				"Dr. Ekta is a visionary genius. I learn something new from every episode and as someone aspiring to go into dermatology, this podcast is a must listen. I am obsessed with all of the guests she has on and my favorite parts are when SHE is the one talking because she usually knows even more than the guests. If you are anyone needing reel insight into how the world of beauty works, this is THE TOOL for you…",
			lineThree: "Rachel Santoro (April 15, 2023)",
		},
	]);

	useEffect(() => {
		const line = document.querySelectorAll(".line");

		function QuoteAnimation() {
			const tl = gsap.timeline();
			const time = 3;
			const y = 100;
			tl.add("start")
				.fromTo(
					line,
					time,
					{
						opacity: 0,
						y: -y,
					},
					{
						opacity: 1,
						y: 0,
					},
					0
				)
				.to(
					line,
					time,
					{
						delay: time,
						opacity: 0,
						y: y,
					},
					"start+=1.3"
				);
		}
		QuoteAnimation();
		const timeout = setTimeout(() => {
			setTestimonialIndex((prevIndex) => {
				if (prevIndex === 3) {
					return 0;
				} else {
					return prevIndex + 1;
				}
			});
		}, 6000);

		return () => clearTimeout(timeout);
	}, [testimonialIndex]);

	return (
		<div className="w-full lg:h-[1500px] h-[900px] relative  z-10">
			<div className="flex flex-col items-center px-6 mx-auto ">
				<h1 className="lg:text-[120px] text-2xl font-thin tracking-widest uppercase text-center text-wrap lg:text-nowrap text-white py-36 sm:py-16 font-montserrat  whitespace-nowrap">
					PODCAST TESTIMONIALS
				</h1>
			</div>
			<div className="w-full h-fit flex flex-row pb-24">
				<div className="lg:w-3/4 w-full line mx-auto lg:pb-12">
					<blockquote className="  text-white  ">
						<figure className="relative  isolate lg:pt-12 opacity-20  ml-12">
							<svg
								viewBox="0 0 162 128"
								fill="none"
								aria-hidden="hidden"
								className="absolute top-0 left-0 h-32 -z-10 stroke-zinc-100"
							>
								<path
									id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
									d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
								/>
								<use
									href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
									x={86}
								/>
							</svg>
						</figure>
						<p className=" text-[20px] lg:text-5xl font-montserrat uppercase indent-0 lg:indent-8 text-center font-thin">
							{testimonials[testimonialIndex].lineOne}
						</p>
					</blockquote>
					<figcaption className="lg:mt-8 mt-4 hidden lg:block">
						<div className=" lg:w-1/2 w-10/12 text-justify mx-auto text-wrap font-thin  text-white text-[18px] lg:text-2xl font-montserrat tracking-normal leading-[32px] lg:leading-[60px] lg:py-16 py-2">
							{'"' + testimonials[testimonialIndex].lineTwo + '"'}
						</div>
						{/* <div className="mt-1 font-light  text-white py-4 lg:text-lg font-montserrat indent-14 text-sm">
							{testimonials[testimonialIndex].lineThree}
						</div> */}
					</figcaption>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsContainer;
