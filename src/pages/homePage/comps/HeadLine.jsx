import GifBg from "../../../assets/images/Gif-BG.gif";
import newMic from "../../../assets/video/newMic.mp4";
import mic2 from "../../../assets/video/mic2.mp4";
import mic3 from "../../../assets/video/mic3.mp4";
const HeadLine = () => {
	return (
		<div className='w-full h-screen bg-black text-white flex flex-col justify-center'>
			<h1 className='text-[100px] text-center pt-10 text-gold-500 subpixel-antialiased tracking-[14px] font-hind '> SKIN ANARCHY</h1>
			<h1 className='text-3xl text-center pt-10 text-white font-hind tracking-[10px]'>
				THE FASTEST GROWING BEAUTY PODCAST
			</h1>
			<h1>Add modal to get information to view the whole site </h1>
			<h1>add modal for reviews and stars</h1>
			<h1>suggestions box about products ...</h1>
			{/* <img src={} className=' w-full h-full absolute bg-opacity-20' /> */}
			{/* <div>
				<video className='w-full h-full opacity-20' autoPlay muted loop id='video' src={newMic}></video>
			</div> */}
		</div>
	);
};

export default HeadLine;
