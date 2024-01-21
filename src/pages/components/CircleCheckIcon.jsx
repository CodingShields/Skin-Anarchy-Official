import emptyCircle from "../../assets/icons/emptyCircle.svg";
import greenCheck from "../../assets/icons/greenCheck.svg";
import { useState, useEffect } from "react";

const CircleCheckIcon = ({savedState}) => {
     const [stateSaved, setStateSaved] = useState(savedState);

			useEffect(() => {
				// Update stateSaved when savedState prop changes
				setStateSaved(savedState);
			}, [savedState]);

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div >
			<img className='h-16 w-16 stroke-white ' src={emptyCircle} />
		
		</div>
	);
};

export default CircleCheckIcon;
