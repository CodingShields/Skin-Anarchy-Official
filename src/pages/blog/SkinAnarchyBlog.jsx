import { useState, useEffect } from "react";
import test from "../../assets/data/mediumData/test.html";
import "../../styles/custom.scss";
import blogBG from "../../assets/video/blogBG.mp4";
import PrevBlogs from "./PrevBlogs";
const SkinAnarchyBlog = () => {
	const [title, setTitle] = useState("");
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
	console.log(title);

	return (
		<div className='flex flex-col w-full h-screen animate-fadeIn '>
			<div className=' w-full h-full mt-24 text-center pb-12'>
				<div className='w-full h-[400px] relative'>
					<div className='w-full h-full absolute flex flex-col justify-center items-center z-10'>
						<h1 className='text-8xl text-white font-montserrat uppercase font-thin w-full tracking-widest '>Skin Anarchy Blog</h1>
						<div className='flex flex-row text-white w-1/2 mx-auto justify-evenly mt-8 '>
							<button className='hover:bg-white hover:text-black uppercase font-montserrat transition-all ease-in-out duration-500 w-full py-4'>
								Beauty Culture
							</button>
							<button className='hover:bg-white hover:text-black uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Fragrance
							</button>
							<button className='hover:bg-white hover:text-black uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Episode Summaries
							</button>
							<button className='hover:bg-white hover:text-black uppercase font-montserrat transition-all ease-in-out duration-500 w-full'>
								Science of Skin
							</button>
						</div>
					</div>
					<video className='w-full h-full object-cover opacity-40 ' autoPlay muted loop id='video'>
						<source src={blogBG} type='video/mp4' />
					</video>
				</div>
			</div>
			<div className='grid grid-cols-3 '>
				<div className='w-full h-screen  font-montserrat px-2 bg-white'>
					<div className='flex flex-col bg-white h-[350px] w-[800px] mx-auto '>
						<iframe id='mediumImport' title='External Content' src={test} className='w-full h-full ' />
						<div className='w-full h-full absolute flex flex-col justify-end '>
							<div className='bg-gradient-to-t from-black   h-[800px] mt-2'>
								{/* <h1 className='text-2xl text-white font-montserrat text-center mx-auto w-full pt-2'>{title}</h1> */}
								{/* <button className='text-xl italic text-white/50 font-montserrat text-center mx-auto w-full'>Read Article</button> */}
							</div>
						</div>
					</div>
				</div>
				<div className='w-full h-screen  font-montserrat bg-white'> Main Blog Data</div>
				<div className='w-full h-screen font-montserrat bg-white overflow-y-scroll'>
					<PrevBlogs />
				</div>
			</div>
		</div>
	);
};

export default SkinAnarchyBlog;
