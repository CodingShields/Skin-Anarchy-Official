import iphoneFrame from "../../../assets/images/iphone-frame.png";
import podcast from "../../../assets/images/podcast.jpg";
const PhoneContainer = () => {
	return (
		<div className='relative  rounded-9xl bg-black'>
			{" "}
			<div className='absolute flex flex-col place-content-start place-items-start w-full  h-full p-10 mt-36 '>
				<iframe
					className='w-full h-[1000px] '
					id='embedPlayer'
					src='https://embed.podcasts.apple.com/us/podcast/skincare-anarchy/id1522162686?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark'
					sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
					allow='autoplay *; encrypted-media *; clipboard-write'
				></iframe>
			</div>
			<a
				className='w-full h-48 absolute bottom-0 left-0 right-0 flex justify-center items-center'
				href="https://podcasts.apple.com/us/podcast/skincare-anarchy/id1522162686?itsct=podcast_box_badge&amp;itscg=30200&amp;ls=1"
			>
				<img
					className="w-64 h-36"
					src="https://tools.applemediaservices.com/api/badges/listen-on-apple-podcasts/badge/en-us?size=250x83&amp;releaseDate=1708966800"
					alt='Listen on Apple Podcasts'
				/>
			</a>
			<img src={iphoneFrame} className='w-[600px] h-[1000px]' />
		</div>
	);
};
export default PhoneContainer;
