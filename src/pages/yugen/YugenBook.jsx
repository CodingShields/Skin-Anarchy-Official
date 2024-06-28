import { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import page1yugenvol2 from "../../assets/data/yugen/page1yugenvol2.jpg";
import page2yugenvol2 from "../../assets/data/yugen/page2yugenvol2.jpg";
import page3yugenvol2 from "../../assets/data/yugen/page3yugenvol2.jpg";
import page4yugenvol2 from "../../assets/data/yugen/page4yugenvol2.jpg";
import page5yugenvol2 from "../../assets/data/yugen/page5yugenvol2.jpg";
import page6yugenvol2 from "../../assets/data/yugen/page6yugenvol2.jpg";
import page7yugenvol2 from "../../assets/data/yugen/page7yugenvol2.jpg";
import page8yugenvol2 from "../../assets/data/yugen/page8yugenvol2.jpg";
import page9yugenvol2 from "../../assets/data/yugen/page9yugenvol2.jpg";
import page10yugenvol2 from "../../assets/data/yugen/page10yugenvol2.jpg";
import page11yugenvol2 from "../../assets/data/yugen/page11yugenvol2.jpg";
import page12yugenvol2 from "../../assets/data/yugen/page12yugenvol2.jpg";
import page13yugenvol2 from "../../assets/data/yugen/page13yugenvol2.jpg";
import page14yugenvol2 from "../../assets/data/yugen/page14yugenvol2.jpg";
import page15yugenvol2 from "../../assets/data/yugen/page15yugenvol2.jpg";
import page16yugenvol2 from "../../assets/data/yugen/page16yugenvol2.jpg";
import page17yugenvol2 from "../../assets/data/yugen/page17yugenvol2.jpg";
import page18yugenvol2 from "../../assets/data/yugen/page18yugenvol2.jpg";
import page19yugenvol2 from "../../assets/data/yugen/page19yugenvol2.jpg";
import page20yugenvol2 from "../../assets/data/yugen/page20yugenvol2.jpg";

const pages = [
	page1yugenvol2,
	page2yugenvol2,
	page3yugenvol2,
	page4yugenvol2,
	page5yugenvol2,
	page6yugenvol2,
	page7yugenvol2,
	page8yugenvol2,
	page9yugenvol2,
	page10yugenvol2,
	page11yugenvol2,
	page12yugenvol2,
	page13yugenvol2,
	page14yugenvol2,
	page15yugenvol2,
	page16yugenvol2,
	page17yugenvol2,
	page18yugenvol2,
	page19yugenvol2,
	page20yugenvol2,
];
const YugenBook = ({ toggleMag }) => {
	console.log(toggleMag);
	const [bookOpen, setBookOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	console.log(currentPage);
	const bookRef = useRef();
	const onFlip = (e) => {
		setCurrentPage(e.data);
		console.log("Current page: " + e.data);
	};

	return (
		<HTMLFlipBook
			onFlip={onFlip}
			ref={bookRef}
			className={`hover:cursor-grab active:cursor-grabbing ${currentPage !== 0 ? "shadow-2xl shadow-gold-500/30" : ""} `}
			maxShadowOpacity={0}
			drawShadow={true}
			width={900}
			height={1000}
			// usePortrait={true}
		>
			{pages.map((page, index) => (
				<img key={index} src={page} alt={`page ${index + 1}`} />
			))}
		</HTMLFlipBook>
	);
};

export default YugenBook;
