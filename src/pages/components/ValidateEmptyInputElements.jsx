import { useState, useEffect } from "react";
import greenCheck from "../../assets/icons/greenCheck.svg";
import redX from "../../assets/icons/redX.svg";

const ValidateEmptyInputElements = (props) => {
	const [valid, setValid] = useState(false);

	useEffect(() => {
		setValid(false);
		if (props.data === "" || props.data === null || props.data === undefined || (Array.isArray(props.data) && props.data.length === 0)) {
			setValid(false);
		} else {
			setValid(true);
		}
	}, [props.data]);

	console.log(props.data);

	return <div>{valid ? <img src={greenCheck} className='h-10' alt='green check' /> : <img src={redX} className='h-10' alt='red x' />}</div>;
};

export default ValidateEmptyInputElements;
