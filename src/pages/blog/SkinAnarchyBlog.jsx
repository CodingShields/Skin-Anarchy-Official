import { useState, useEffect } from "react";
import "../../styles/custom.scss";
import PrevBlogs from "./PrevBlogs";
import ActiveBlogWindow from "./ActiveBlogWindow";
import BlogUserResponse from "./BlogUserResponse";
import podcast from "../../assets/images/podcast.jpg";
import { InputComp, Button } from "../components/Components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";



const buttonStyle = "uppercase font-thin underlineAnimate subpixel-antialiased tracking-[6px] text-white sm:text-[8px] text-[16px] animate-fadeIn";
const activeButtonStyle =
	"uppercase font-semibold text-gold-500 subpixel-antialiased tracking-[6px] text-sm  underline underline-offset-8 decoration-1 animate-fadeIn";
const SkinAnarchyBlog = () => {
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
		searchInput: "",
		title: "",
		activeBlogWindow: "",
		blogWindowOpen: false,
		activeMenu: "beautyCulture",
	});

	// useEffect(() => {
	// 	const iframe = document.getElementById("mediumImport");

	// 	const onLoad = () => {
	// 		const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
	// 		const root = iframeDocument.querySelector(".h-entry");
	// 		const styleElement = iframeDocument.createElement("style");

	// 		// Set the content of the <style> element with the @import rule
	// 		styleElement.textContent = `
	//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	//         /* Override the font family for all elements */
	//         * {
	//             font-family: 'Montserrat', sans-serif !important;
	//         }
	//     `;
	// 		const title = iframeDocument.querySelector(".p-name");
	// 		setTitle(title.innerText);
	// 		console.log();
	// 		const body = iframeDocument.body;
	// 		if (body) {
	// 			body.style.overflowY = "hidden";
	// 			body.style.overflowX = "hidden";
	// 		}

	// 		// Append the <style> element to the <head> of the iframe document
	// 		const head = iframeDocument.head || iframeDocument.getElementsByTagName("head")[0];
	// 		head.appendChild(styleElement);

	// 		if (root) {
	// 			// Example: Change font family for all elements
	// 			root.style.fontFamily = "Montserrat";

	// 			// Example: Change styles for h1, h2, h3 elements
	// 			const headings = root.querySelectorAll("h1, h2, h3");
	// 			headings.forEach((heading) => {
	// 				heading.style.color = "black";
	// 				heading.style.fontFamily = "Montserrat";
	// 				heading.style.fontWeight = 500;
	// 			});

	// 			// Example: Remove the footer
	// 			const footer = root.querySelector("footer");
	// 			if (footer) {
	// 				footer.remove();
	// 			}
	// 		}
	// 	};

	// 	if (iframe) {
	// 		iframe.addEventListener("load", onLoad);
	// 	}

	// 	return () => {
	// 		if (iframe) {
	// 			iframe.removeEventListener("load", onLoad);
	// 		}
	// 	};
	// }, []);

	// useEffect(() => {
	// 	if (activeBlogWindow) {
	// 		setOpenBlogWindow(!openBlogWindow);
	// 	} else {
	// 		setOpenBlogWindow(false);
	// 	}
	// }, [activeBlogWindow]);

	const handleOnSelect = (e) => {
		e.preventDefault();
	};
	
	const handleSearch = () => {
		console.log("test")
	};

	return (
		<div className='w-full h-full animate-fadeIn bg-white'>
			<div className='w-full h-fit border-b-2 border-black pt-8'>
				<div className='w-full h-fit flex flex-col z-10 pt-8'>
					<h1
						style={{
							fontWeight: "400",
						}}
						className='text-8xl text-black font-montserrat uppercase w-full tracking-widest mt-4 text-center py-12'
					>
						Skin Anarchy Blog
					</h1>
					<div className='flex flex-row text-black w-full mx-auto justify-center py-6 bg-black'>
						<div className='flex flex-row justify-center items-center whitespace-nowrap w-full space-x-12 relative'>
							<Button
								text='Beauty Culture'
								style={`${state.activeMenu === "beautyCulture" ? activeButtonStyle : buttonStyle}`}
								onClick={() => setState({ ...state, activeMenu: "beautyCulture" })}
							/>
							<Button
								text='Fragrance'
								style={`${state.activeMenu === "fragrance" ? activeButtonStyle : buttonStyle}`}
								onClick={() => setState({ ...state, activeMenu: "fragrance" })}
							/>
							<Button
								text='Science of Skin'
								style={`${state.activeMenu === "scienceOfSkin" ? activeButtonStyle : buttonStyle}`}
								onClick={() => setState({ ...state, activeMenu: "scienceOfSkin" })}
							/>
							<Button
								text='Previous Blogs'
								style={`${state.activeMenu === "previousBlogs" ? activeButtonStyle  : buttonStyle}`}
								onClick={() => setState({ ...state, activeMenu: "previousBlogs" })}
							/>
							<div className='absolute right-5 flex items-center '>
								<InputComp
									value={state.searchInput}
									type='text'
									placeholder='Search '
									style={`block w-fit rounded-md font-montserrat group hover:ring-black hover:placeholder:text-black hover:shadow-lg hover:shadow-black/50 transition-all ease-in-out duration-500  border-0 px-3.5 py-2 pl-10 text-black absolute right-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black/50 placeholder:indent-3 hover:border-gold-500 `}
									onChange={(e) => setState({ ...state, searchInput: e.target.value })}
								/>
								<MagnifyingGlassIcon
									className={`${state.searchInput.length > 0 ? "text-green-500 animate-bounce animate-fadeIn" : "text-black/40 animate-fadeIn"} w-8 h-8  group-hover:text-black transition-all ease-in-out duration-500 right-[280px] absolute cursor-pointer`}
									onClick={handleSearch}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <ActiveBlogWindow open={openBlogWindow} close={() => setOpenBlogWindow(false)} data={activeBlogWindow} /> */}
			<div className={state.blogWindowOpen ? "grid grid-cols-3 blur-sm " : "flex flex-row justify-between"}>
				<div className=' pt-4 w-full h-screen  font-montserrat bg-white text-2xl text-center overflow-y-scroll space-y-8 pb-96 t-12'>
					<h1 onSelect={handleOnSelect} className='text-5xl font-montserrat py-4'>
						How Art Eras Influence Perfumery
					</h1>
					<h1 className='text-xl text-center'>Author:</h1>
					<BlogUserResponse />
					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						“Purple the sails, and so perfumed, that the winds were love-sick with them,” Shakespeare wrote. After killing Julius Caesar, Cleopatra is
						claimed to have welcomed Marc Antony in a ship with fragrant sails and taken over as the ruler of Egypt. The use of scent is typically
						linked to mysticism, fantasy, and creativity. We use perfume to make others happy, create a good impression, and fill our environment with
						a pleasant, lasting aroma. Despite having a lengthy history, perfume has not always had a romantic undertone.
					</p>
					<img src={podcast} alt='' className='w-1/2 mx-auto' />
					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						The Latin words “per” (meaning “thorough”) and “fumus” (meaning “smoke”) are where the English word “perfume” originates. The scents
						created by burning incense were eventually given the word “parfum” by the French. Incense was in fact the original type of scent, created
						by the Mesopotamians some 4,000 years ago. At their sacred rituals, ancient tribes burnt a range of resins and wood. Around 3000 B.C.,
						incense arrived in Egypt, but until the start of the Egyptian Golden Age, perfumes were only employed in religious ceremonies. The priests
						slowly lost their unique rights, and they became accessible to all Egyptians. The populace enjoyed lavish baths and fragrant oil soaks for
						their complexion.
					</p>
					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						The first aqueous perfume was created by the ancient Greeks. However, the Arabs’ invention of distillation was what enabled the production
						of perfume commercially possible. The 17th century saw tremendous success for perfume, particularly in France. During those times, hygiene
						was very shoddy, and foul body odors were covered up with fragrances. Both King Henry VIII and Queen Elizabeth I made frequent use of
						scents in England. During Elizabeth’s reign, every public space was scented since she could not stand offensive odors.
					</p>
					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						In the 19th century, scent underwent a significant transformation, just like industry and art. The modern fragrance was built on the
						grounds of evolving tastes and chemistry. At the beginning of the century, perfume was often made from the aroma of a flower bud. Today’s
						perfumes are composed of a wide range of natural and synthetic substances, known as “notes” or “overtones,” and are infinitely
						complicated. The first perfume to use artificial chemicals was Chanel No5, which was also the first to use current chemical concepts in
						its creation.
					</p>

					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						In the early 18th century in the city of Köln, an Italian barber created eau de cologne, which is typically worn by men. As a result, the
						city’s French name is “Cologne.” This mixture was first marketed as a “wonder remedy” under the name “Aqua Admirabilis” (Admirable Water).
						Napoleon gave the wondrous liquid great marks, and it was first offered for sale as a fragrance with the designation 4711, which was also
						the location of Koln’s first eau de cologne store. It is still the oldest scent that has been made continually.
					</p>
					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						A memory, an emotion, a piece of architecture, or a trip can all serve as the inspiration for a perfume. The Art Deco collection
						transports you to the Roaring Twenties, just as “The Collector” — a travel-inspired perfume collection, can send you on a journey around
						the world with distinctive country-specific aromas.
					</p>
					<p className='text-2xl w-3/4 mx-auto py-4 text-left'>
						The beauty of art is that the viewer is allowed to interpret it in whatever they see fit. When the perfume is finished, the idea behind it
						will come to an end. However, how each person reacts to the fragrance and how it feels on their skin may vary. Generations of artists have
						been influenced by perfumes, and smells have an impact on many other creative forms. If you look back in time, you’ll find that numerous
						scents have been the inspiration for well-known poems, paintings, books, and movies where smell plays a major and vital role. It is
						indisputable that scents like perfumes may evoke memories or feelings just like any piece of art, music, or sculpture can. A fresh
						fragrance is developed by perfumers based on their emotional condition or experience. The art of perfume may touch our souls, arouse our
						deepest emotions, and alter our vision.
					</p>
				</div>

				<div className='w-1/2 h-full font-montserrat bg-white overflow-y-scroll '>
					<PrevBlogs />
				</div>
			</div>
		</div>
	);
};

export default SkinAnarchyBlog;
