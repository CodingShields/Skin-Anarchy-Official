import HTMLFlipBook from "react-pageflip";
import cover from "../../assets/data/yugen/cover.jpg";
const YugenBook = () => {
	return (
        <HTMLFlipBook width={300} height={500}>
			<img src={cover} className='w-full h-full' />
			<img src={cover} className='w-full h-full' />
			<img src={cover} className='w-full h-full' />
			<img src={cover} className='w-full h-full' />
			<img src={cover} className='w-full h-full' />
		</HTMLFlipBook>
	);
};

export default YugenBook;
