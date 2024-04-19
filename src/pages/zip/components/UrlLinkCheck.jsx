import { useState, useEffect } from "react";
import badLinkIcon from "../../assets/iconsAnimated/badLinkIcon.svg";
import goodLinkIcon from "../../assets/iconsAnimated/goodLinkIcon.svg";
const UrlLinkCheck = (props) => {
	const [linkState, setLinkState] = useState(props.urlError);
console.log(props.urlError);
	useEffect(() => {
		setLinkState(props.urlError);
	}, [props.urlError]);
console.log(linkState);
	return (
		<div className='flex flex-row items-center justify-center w-fit h-fit  '>
			{!linkState && <img className='h-10 ' src={badLinkIcon} alt='brokenLink' />}
			{!linkState && <h1 className='text-md text-red-500 font-semibold'>URL Not Valid</h1>}
			{linkState && <img className='h-10' src={goodLinkIcon} alt='goodLink' />}
		</div>
	);
};

export default UrlLinkCheck;
