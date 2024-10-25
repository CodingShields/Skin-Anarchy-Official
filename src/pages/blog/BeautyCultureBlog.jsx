import podcast from "../../assets/images/podcast.jpg";
import { useState, useEffect } from "react";
import BlogUserResponse from "./BlogUserResponse";

const BeautyCultureBlog = () => {
	console.log(open);
	const [state, setState] = useState({
		loading: false,
		error: false,
		blogCatClosed: false,
		blogFullScreenMode: false,
	});
	useEffect(() => {
		console.log("CurrentBlog open state:", open);
	}, [open]);

	console.log(state.activeBlog);
	const handleOnSelect = (e) => {
		e.preventDefault();
	};

	const handleFullScreenMode = () => {
		setState({
			...state,
			blogFullScreenMode: !state.blogFullScreenMode,
		});
	};
	if (!open) {
		return null;
	}
	return (
		<div className="flex flex-col justify-center items-center w-full h-full space-y-6 animate-fadeIn">
			<div className=" pt-4 w-full h-full bg-white overflow-y-scroll flex flex-col justify-center items-center ">
				<h1
					onSelect={handleOnSelect}
					className="text-3xl font-montserrat py-4 text-center"
				>
					How Art Eras Influence Perfumery
				</h1>
				<div className="w-10/12 flex flex-col justify-start items-start">
					<div className="w-full flex flex-row justify-start items-center">
						<h1 className="text-md text-left text-black/50 font-montserrat tracking-widest w-24">
							Author:{" "}
						</h1>
						<h1 className="text-lg text-black tracking-wide"> Dr Ekta Yadav</h1>
					</div>
					<div className="w-full flex flex-row justify-start items-center">
						<h1 className="text-md text-left text-black/50 font-montserrat tracking-widest w-24">
							Category:
						</h1>
						<h1 className="text-lg text-black tracking-wide"> Fragrance</h1>
					</div>
					<div className="w-full flex flex-row justify-start items-center">
						<h1 className="text-md text-left text-black/50 font-montserrat tracking-widest w-24">
							Date:
						</h1>
						<h1 className="text-lg text-black tracking-wide"> 11/11/1988</h1>
					</div>
				</div>
				<BlogUserResponse handleFullScreenMode={handleFullScreenMode} />
				<div className="w-full py-8 space-y-2 flex flex-col ">
					<p className="text-lg w-10/12 mx-auto py-4 text-left font-montserrat leading-10 ">
						“Purple the sails, and so perfumed, that the winds were love-sick
						with them,” Shakespeare wrote. After killing Julius Caesar,
						Cleopatra is claimed to have welcomed Marc Antony in a ship with
						fragrant sails and taken over as the ruler of Egypt. The use of
						scent is typically linked to mysticism, fantasy, and creativity. We
						use perfume to make others happy, create a good impression, and fill
						our environment with a pleasant, lasting aroma. Despite having a
						lengthy history, perfume has not always had a romantic undertone.
					</p>
					<img
						src={podcast}
						alt=""
						className="w-1/2 mx-auto"
					/>
					<p className="text-lg w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The Latin words “per” (meaning “thorough”) and “fumus” (meaning
						“smoke”) are where the English word “perfume” originates. The scents
						created by burning incense were eventually given the word “parfum”
						by the French. Incense was in fact the original type of scent,
						created by the Mesopotamians some 4,000 years ago. At their sacred
						rituals, ancient tribes burnt a range of resins and wood. Around
						3000 B.C., incense arrived in Egypt, but until the start of the
						Egyptian Golden Age, perfumes were only employed in religious
						ceremonies. The priests slowly lost their unique rights, and they
						became accessible to all Egyptians. The populace enjoyed lavish
						baths and fragrant oil soaks for their complexion.
					</p>
					<p className="text-lg w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The first aqueous perfume was created by the ancient Greeks.
						However, the Arabs’ invention of distillation was what enabled the
						production of perfume commercially possible. The 17th century saw
						tremendous success for perfume, particularly in France. During those
						times, hygiene was very shoddy, and foul body odors were covered up
						with fragrances. Both King Henry VIII and Queen Elizabeth I made
						frequent use of scents in England. During Elizabeth’s reign, every
						public space was scented since she could not stand offensive odors.
					</p>
					<p className="text-lg w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						In the 19th century, scent underwent a significant transformation,
						just like industry and art. The modern fragrance was built on the
						grounds of evolving tastes and chemistry. At the beginning of the
						century, perfume was often made from the aroma of a flower bud.
						Today’s perfumes are composed of a wide range of natural and
						synthetic substances, known as “notes” or “overtones,” and are
						infinitely complicated. The first perfume to use artificial
						chemicals was Chanel No5, which was also the first to use current
						chemical concepts in its creation.
					</p>

					<p className="text-lg w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						In the early 18th century in the city of Köln, an Italian barber
						created eau de cologne, which is typically worn by men. As a result,
						the city’s French name is “Cologne.” This mixture was first marketed
						as a “wonder remedy” under the name “Aqua Admirabilis” (Admirable
						Water). Napoleon gave the wondrous liquid great marks, and it was
						first offered for sale as a fragrance with the designation 4711,
						which was also the location of Koln’s first eau de cologne store. It
						is still the oldest scent that has been made continually.
					</p>
					<p className="text-lg w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						A memory, an emotion, a piece of architecture, or a trip can all
						serve as the inspiration for a perfume. The Art Deco collection
						transports you to the Roaring Twenties, just as “The Collector” — a
						travel-inspired perfume collection, can send you on a journey around
						the world with distinctive country-specific aromas.
					</p>
					<p className="text-lg w-11/12 mx-auto py-4 text-left font-montserrat leading-10 pl-2">
						The beauty of art is that the viewer is allowed to interpret it in
						whatever they see fit. When the perfume is finished, the idea behind
						it will come to an end. However, how each person reacts to the
						fragrance and how it feels on their skin may vary. Generations of
						artists have been influenced by perfumes, and smells have an impact
						on many other creative forms. If you look back in time, you’ll find
						that numerous scents have been the inspiration for well-known poems,
						paintings, books, and movies where smell plays a major and vital
						role. It is indisputable that scents like perfumes may evoke
						memories or feelings just like any piece of art, music, or sculpture
						can. A fresh fragrance is developed by perfumers based on their
						emotional condition or experience. The art of perfume may touch our
						souls, arouse our deepest emotions, and alter our vision.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BeautyCultureBlog;
