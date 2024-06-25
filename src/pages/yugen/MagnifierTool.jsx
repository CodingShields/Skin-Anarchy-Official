import React from "react";
import Magnifier from "react-magnifier";

const MagnifierTool = ({ src, open }) => {
	if (!open) return null;
	return (
		<>
			{/* Render the Magnifier component with the correct props */}
			<Magnifier src={src} width={400} height={400} />
			{/* Render children (HTMLFlipBook) */}
		</>
	);
};

export default MagnifierTool;
