import EpisodesCategories from "./EpisodesCategories"
import episode1 from "../../../assets/images/podcast-widget/episode1.png"


const EpisodesList = () => {
    return (
			<div>
				<h1>EpisodesList</h1>
				<EpisodesCategories />
				<div className='w-fit border grid grid-cols-3 p-12 mt-4 text-white mx-auto rounded-2xl'>
					<img src={episode1} className='w-48 rounded-2xl mx-auto' />
					<p className='w-96 my-auto'>
						Episode Description Episode Description Episode Description Episode Description Episode Description Episode Description Episode
						Description Episode Description Episode Description
					</p>
					<p className='w-96 my-auto'>STARS</p>
				</div>
			</div>
		);
}

export default EpisodesList