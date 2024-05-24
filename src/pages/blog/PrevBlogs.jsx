import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const PrevBlogs = ({ activeBlogWindow }) => {
	const [blogs, setBlogs] = useState([]);
	const [currentBlog, setCurrentBlog] = useState(null);
	const [state, setState] = useState({
		loading: false,
		error: null,
		errorMessage: "",
	});
	const [modifiedContent, setModifiedContent] = useState([]);

	useEffect(() => {
		setState({
			loading: true,
			error: true,
			errorMessage: "Loading Previous Blogs",
		});

		const fetchData = async () => {
			const db = getFirestore();
			try {
				const snapshot = await getDocs(collection(db, "mediumData"));
				const blogsData = snapshot.docs.map((doc) => doc.data());
				const newData = blogsData[0]?.mediumData || [];
				setBlogs(newData);
				setState({ loading: false, error: false, errorMessage: "" });
			} catch (error) {
				console.error("Error fetching data:", error);
				setState({ loading: false, error: true, errorMessage: "Failed to fetch data" });
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const modifyContent = () => {
			const modifiedContents = [];
			blogs.forEach((item) => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(item.data, "text/html");
				const root = doc.querySelector(".h-entry");
				const styleElement = doc.createElement("style");

				styleElement.textContent = `
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

                    /* Override the font family for all elements */
                    * {
                        font-family: 'Montserrat', sans-serif !important;
                    }
                `;
				const title = doc.querySelector(".p-name");
				if (title) {
					title.style.color = "black";
					title.style.fontFamily = "Montserrat";
					title.style.fontWeight = 500;
					title.style.fontSize = "35rem";
				}
				const body = doc.body;

				if (body) {
					// body.style.overflowY = "hidden";
					body.style.overflowX = "hidden";
				}

				const head = doc.head || doc.getElementsByTagName("head")[0];
				head.appendChild(styleElement);

				if (root) {
					const headings = root.querySelectorAll("h1, h2, h3");
					const h1 = root.querySelector("h1");
					if (h1) {
						console.log("true");
						h1.style.color = "black";
						h1.style.fontFamily = "Montserrat";
						h1.style.fontWeight = 500;
						h1.style.fontSize = "35rem";
					}
					headings.forEach((heading) => {
						heading.style.color = "black";
						heading.style.fontFamily = "Montserrat";
						heading.style.fontWeight = 500;
					});

					const footer = root.querySelector("footer");
					if (footer) {
						footer.remove();
					}
				}

				modifiedContents.push(doc.documentElement.outerHTML);
			});

			setModifiedContent(modifiedContents);
		};

		modifyContent();
	}, [blogs]);

	const handleClick = (index) => {
		const activeBlog = modifiedContent[index];
		console.log(activeBlog);
		setCurrentBlog(activeBlog);
		activeBlogWindow(activeBlog);
		console.log(activeBlogWindow(activeBlog));
	};

	const buttonIcon = (
		<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}>
			<path strokeLinecap='round' strokeLinejoin='round' d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5' />
		</svg>
	);

	return (
		<div className='grid grid-cols-1 bg-gradient-to-r from-white to-black space-y-24'>
			{modifiedContent.map((item, index) => (
				<div key={index} className='bg-white h-[140px] w-[800px] mx-auto relative transition-all duration-300 ease-in-out group'>
					<iframe srcDoc={item} className='w-full h-full flex z-20' scrolling="no" />
					<div className='w-full bg-white text-center'>
						<button
							onClick={() => handleClick(index)}
							className='h-fit w-fit text-black bg-white px-2 py-2 text-center cursor-pointer hover:text-white hover:bg-black hover:px-8 transition-all ease-linear duration-200 hover:rounded-t-xl uppercase'
						>
							Read More
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default PrevBlogs;
