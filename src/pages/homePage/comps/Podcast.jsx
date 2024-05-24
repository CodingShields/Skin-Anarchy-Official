import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Podcast = () => {
	const [state, setState] = useState({
		loading: false,
		error: null,
		errorMessage: "",
	});
	const [episodes, setEpisodes] = useState([]);
	const [currentEpisode, setCurrentEpisode] = useState("");

	useEffect(() => {
		setState({
			loading: true,
			error: true,
			errorMessage: "Loading Previous Blogs",
		});
		const fetchData = async () => {
			const db = getFirestore();
			await getDocs(collection(db, "podCastData")).then((snapshot) => {
				const episodeUrls = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setEpisodes(episodeUrls);
				setState({ loading: false, error: false, errorMessage: "" });
			});
		};

		fetchData();
	}, []);

	const handleEpisodeChange = (e) => {
		console.log(e.target.value);
	};

	const lastIndex = episodes.length - 1;
	const lastEpisode = episodes[lastIndex]?.episodeUrl;

	return (
		<div className='w-full h-fit relative py-12 mx-auto mt-12'>
			<div className='w-full h-full '>
				<h1 className='text-4xl text-center font-montserrat tracking-widest font-thin text-white z-50 py-12'>LISTEN TO OUR CURRENT EPISODE</h1>
				<div className='w-full'>
					<iframe
						src='https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0'
						className="w-1/2 h-[450px] mx-auto"
						allowfullscreen=''
						allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
						loading='lazy'
					></iframe>
				</div>
				{/* <h1 className='text-4xl text-center font-playfair text-white z-50 py-12'>LATEST EPISODES</h1> */}

				{/* <div className='flex flex-row space-x-12 justify-center w-full'>
					{episodes?.map((item, index) => {
						return (
							<div key={index}
								onClick={handleEpisodeChange}
								className={lastIndex === index ? 'hidden collapse' : 'w-fit'}>
								<iframe
									src={`https://open.spotify.com/embed/episode/${item.episodeUrl}?utm_source=generator&theme=0`}
									className='w-[400px] h-[400px] mx-auto'
									allowfullscreen=''
									allow=' clipboard-write; encrypted-media; fullscreen; picture-in-picture'
									loading='lazy'
								></iframe>
							</div>
						);
					})}
				</div> */}
			</div>
		</div>
	);
};

export default Podcast;
