import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const PrevBlogs = () => {
	const [blogs, setBlogs] = useState([]);
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
					body.style.overflowY = "hidden";
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

	const handleClick = (e) => {
		console.log(e.target.value);
	}

	return (
		<div className='grid grid-cols-1 bg-black space-y-24'>
			{modifiedContent.map((item, index) => (
				<div key={index} className='bg-white h-[200px] w-[800px] mx-auto relative hover:h-[500px] transition-all duration-300 ease-in-out group'>
					<iframe srcDoc={item} onClick={handleClick} className='w-full h-full flex z-20' />
					{/* <button className='absolute text-xl italic text-white/50 font-montserrat text-center mx-auto w-full h-full group-hover:flex justify-center items-start group-hover:mb-12 group-hover:-translate-y-48 transition-all duration-300 ease-in-out group-hover:bg-black/50 group-hover:py-12 group-hover:text-white hidden group-hover:visible'>
						Read Full Article
					</button> */}
				</div>
			))}
		</div>
	);
};

export default PrevBlogs;
