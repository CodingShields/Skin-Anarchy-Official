import React from "react";

export default function useEffectOnUpdate(effectFunction, deps) {
	const firstRender = React.useRef(true);
	console.log(deps);
	console.log(firstRender);
	React.useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
		} else {
			effectFunction();
		}
	}, deps);
}
