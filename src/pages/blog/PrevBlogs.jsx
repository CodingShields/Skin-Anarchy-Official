import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import BlogUserResponse from "./BlogUserResponse";

const PrevBlogs = ({ activeBlogWindow }) => {
	const [blogs, setBlogs] = useState([]);
	const [currentBlog, setCurrentBlog] = useState(null);
	const [state, setState] = useState({
		loading: false,
		error: false,
		errorMessage: "",
	});
	const [modifiedContent, setModifiedContent] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setState({ loading: true, error: false, errorMessage: "Loading Previous Blogs" });
			const db = getFirestore();
			try {
				const snapshot = await getDocs(collection(db, "blogData"));
				const blogs = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setBlogs(blogs);
				setState({ loading: false, error: false, errorMessage: "" });
			} catch (error) {
				setState({ loading: false, error: true, errorMessage: error.message });
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const modifyContent = () => {
			const modifiedContents = blogs.map((item) => {
				const parser = new DOMParser();
				const doc = parser.parseFromString(item.blog, "text/html");
				const root = doc.querySelector(".h-entry");
				const styleElement = doc.createElement("style");

				styleElement.textContent = `
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
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
					body.style.overflowX = "hidden";
				}

				const head = doc.head || doc.getElementsByTagName("head")[0];
				head.appendChild(styleElement);

				if (root) {
					const headings = root.querySelectorAll("h1, h2, h3");
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

				return doc.documentElement.outerHTML;
			});

			setModifiedContent(modifiedContents);
		};

		if (blogs.length > 0) {
			modifyContent();
		}
	}, [blogs]);

	const handleClick = (index) => {
		const activeBlog = modifiedContent[index];
		setCurrentBlog(activeBlog);
		activeBlogWindow(activeBlog);
	};

	const isValidUrl = (url) => {
		try {
			new URL(url);
			return true;
		} catch (e) {
			return false;
		}
	};

	const renderBlogContent = (content) => {
		const parts = content.split(/\n{2,}/); // Split by empty lines

		return (
			<div>
				{parts.map((part, index) => {
					let trimmedPart = part.trim();
					if (!trimmedPart) {
						return null; // Skip empty strings
					}

					// Check for image or title tag
					const imageTagMatch = trimmedPart.match(/\[IMAGE:\s*(.*?)\s*\]/);
					const titleTagMatch = trimmedPart.match(/\[TITLE:\s*(.*?)\s*\]/);

					if (imageTagMatch) {
						const imageUrl = imageTagMatch[1];
						if (isValidUrl(imageUrl)) {
							return <img key={index} src={imageUrl} alt='Blog Image' className='w-64 mx-auto h-full object-cover py-4' />;
						}
					} else if (titleTagMatch) {
						const titleImage = titleTagMatch[1];
						if (isValidUrl(titleImage)) {
							return (
								<div key={index} className='text-center py-4'>
									<img src={titleImage} alt='Title Image' className='w-96 mx-auto h-full object-cover py-4' />
								</div>
							);
						}
					} else {
						// Parse markdown syntax
						trimmedPart = trimmedPart
							.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
							.replace(/\n(\d+\..*?)/g, "\n<li>$1</li>") // Ordered list
							.replace(/\n(\*\s*.*?)\n/g, "\n<li>$1</li>") // Unordered list
							.replace(/\n/g, "<br />") // Newline
							.replace(/\t/g, "&emsp;"); // Tab to spaces

						// Default to paragraph
						return (
							<p
								className='w-3/4 text-xl font-montserrat mx-auto whitespace-pre-wrap'
								key={index}
								dangerouslySetInnerHTML={{ __html: trimmedPart }}
							/>
						);
					}
				})}
			</div>
		);
	};


	return (
		<div className='grid grid-cols-1 bg-white space-y-24'>
			{blogs.length > 0 && (
				<div className='bg-white h-[800px] w-[800px] mx-auto relative transition-all duration-300 ease-in-out group space-y-4'>
					{blogs.map((blog, index) => (
						<div key={index}>
							<h1 className='text-3xl text-center font-montserrat font-semibold py-4'>{blog.title}</h1>
							<div className='inline-flex justify-between w-full py-2'>
								<p>Date: {blog.date}</p>
								<p>Written By: {blog.author}</p>
							</div>
							<BlogUserResponse />

							{renderBlogContent(blog.blog)}
						</div>
					))}
				</div>
			)}
			{blogs.length === 0 && !state.loading && <p>No blogs available</p>}
		</div>
	);
};

export default PrevBlogs;
