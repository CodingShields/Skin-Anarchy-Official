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
		<div className='relative h-fit w-fit flex justify-center items-center'>
			<img className='h-16 w-16 stroke-white' src={emptyCircle} />
			<img
				className={classNames("absolute",
					stateSaved
						? "absolute h-16 w-16 duration-1000 ease-in-out transition-all delay-200 "
						: "absolute scale-0 duration-1000 ease-in-out transition-all delay-200"
				)}
				src={greenCheck}
			/>
		</div>
	);
};

export default CircleCheckIcon;
