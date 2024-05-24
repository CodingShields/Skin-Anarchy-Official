import { useState, useEffect } from "react";
import test from "../../assets/data/mediumData/test.html";
import "../../styles/custom.scss";
import blogBG from "../../assets/video/blogBG.mp4";
import PrevBlogs from "./PrevBlogs";
import ActiveBlogWindow from "./ActiveBlogWindow";
const SkinAnarchyBlog = () => {
	const [title, setTitle] = useState("");
	const [activeBlogWindow, setActiveBlogWindow] = useState("");
	const [openBlogWindow, setOpenBlogWindow] = useState(false);
	useEffect(() => {
		const iframe = document.getElementById("mediumImport");

		const onLoad = () => {
			const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
			const root = iframeDocument.querySelector(".h-entry");
			const styleElement = iframeDocument.createElement("style");

			// Set the content of the <style> element with the @import rule
			styleElement.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

            /* Override the font family for all elements */
            * {
                font-family: 'Montserrat', sans-serif !important;
            }
        `;
			const title = iframeDocument.querySelector(".p-name");
			setTitle(title.innerText);
			console.log();
			const body = iframeDocument.body;
			if (body) {
				body.style.overflowY = "hidden";
				body.style.overflowX = "hidden";
			}

			// Append the <style> element to the <head> of the iframe document
			const head = iframeDocument.head || iframeDocument.getElementsByTagName("head")[0];
			head.appendChild(styleElement);

			if (root) {
				// Example: Change font family for all elements
				root.style.fontFamily = "Montserrat";

				// Example: Change styles for h1, h2, h3 elements
				const headings = root.querySelectorAll("h1, h2, h3");
				headings.forEach((heading) => {
					heading.style.color = "black";
					heading.style.fontFamily = "Montserrat";
					heading.style.fontWeight = 500;
				});

				// Example: Remove the footer
				const footer = root.querySelector("footer");
				if (footer) {
					footer.remove();
				}
			}
		};

		if (iframe) {
			iframe.addEventListener("load", onLoad);
		}

		return () => {
			if (iframe) {
				iframe.removeEventListener("load", onLoad);
			}
		};
	}, []);

	useEffect(() => {
		if (activeBlogWindow) {
			setOpenBlogWindow(!openBlogWindow);
		} else {
			setOpenBlogWindow(false);
		}
	}, [activeBlogWindow]);




	return (
		<div className='flex flex-col w-full h-fit animate-fadeIn bg-white'>
			<div className=' w-full h-full mt-24 text-center '>
				<div className='w-full h-[300px] relative'>
					<div className='w-full h-fit absolute flex flex-col z-10 pt-8'>
						<h1
							
							style={{
								fontWeight:"400",
							}}
							className='text-8xl text-black font-montserrat uppercase w-full tracking-widest mt-4'>Skin Anarchy Blog</h1>
						<div className='flex flex-row text-black w-1/2 mx-auto justify-evenly mt-14 '>
							<button className='hover:bg-white uppercase font-montserrat transition-all ease-in-out duration-500 w-full '>
								Beauty Culture
							</button>
							<button className='hover:bg-white uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Fragrance
							</button>
							<button className='hover:bg-white uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Episode Summaries
							</button>
							<button className='hover:bg-white  uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Science of Skin
							</button>
							<button className='hover:bg-white  uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Previous Blogs
							</button>
						</div>
					</div>
					{/* <video className='w-full h-full object-cover opacity-30 ' autoPlay muted loop id='video'>
						<source src={blogBG} type='video/mp4' />
					</video> */}
				</div>
			</div>{" "}
			<ActiveBlogWindow open={openBlogWindow} close={() => setOpenBlogWindow(false)} data={activeBlogWindow} />
			<div className={openBlogWindow ? "grid grid-cols-3 blur-sm " : "flex flex-row justify-between"}>
				<div className='w-full h-screen  font-montserrat bg-white text-2xl text-center'> Main Blog Data</div>
				add heart
				comment
				bookmark
				share
				<div className='w-1/2 h-full font-montserrat bg-white overflow-y-scroll '>
					<PrevBlogs activeBlogWindow={setActiveBlogWindow} />
				</div>
			</div>
		</div>
	);
};

export default SkinAnarchyBlog;
