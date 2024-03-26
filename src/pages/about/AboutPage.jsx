import { useState } from "react";
import Mission from "./comp/mission";
import Stats from "./comp/stats";
import About from "./comp/About";

const AboutPage = () => {

	return (
		<div className='flex flex-col justify-center items-center relative w-full h-full'>
			<div>
				<h1>About Skincare Anarchy:</h1>
				<p>
					Skincare Anarchy is an award-winning and industry acclaimed podcast, recognized for its unique approach to skincare and beauty. SA
					consistently ranks in the top 25-50 for Beauty in the United States and has a global presence. Hosted by Dr. Ekta Yadav (MD, MBA, MS), our
					podcast is a unique blend of science and beauty, driven by curiosity and passion. We aim to provide our listeners with an insider’s look
					into the beauty world, sharing the incredible stories and opinions of industry professionals and leaders. Join us for our weekly series,
					including Makeup Monday, Mindset Monday, Wisdom of Women Wednesday, Fashion Friday, and Fragrance Friday, and more, as we explore the
					multifaceted world of beauty and skincare. Our episode library consists of over 600 episodes that are engaging, educational, inspiring, and
					timeless!
				</p>
			</div>
			<Mission />
			<Stats />
		</div>
	);
}

export default AboutPage
