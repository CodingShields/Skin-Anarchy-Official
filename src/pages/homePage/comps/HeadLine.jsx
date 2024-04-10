import GifBg from "../../../assets/images/Gif-BG.gif";
import mic1 from "../../../assets/video/mic1.mp4";
import mic2 from "../../../assets/video/mic2.mp4";
import mic3 from "../../../assets/video/mic3.mp4";
const HeadLine = () => {
	return (
		<div className='w-full h-screen bg-black text-white flex flex-col justify-center'>
			<h1 className='text-4xl font-bold text-center pt-10 text-white font-playfair subpixel-antialiased tracking-[8px] '> Skin Anarchy</h1>
			<h1 className='text-4xl font-bold text-center pt-10 text-white font-playfair subpixel-antialiased tracking-[8px] '>
				THE FASTEST GROWING BEAUTY PODCAST
			</h1>
			{/* <img src={GifBg} className=' w-full h-full absolute bg-opacity-20' /> */}
			{/* <div>
				<video className='w-full h-1/2 opacity-20' autoPlay muted loop id='video' src={mic1}></video>
			</div> */}
		</div>
	);
};

export default HeadLine;
