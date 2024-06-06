import React from "react";

const TopPicksNavBarDropDown = ({ children }) => {

    console.log(children);
	return <div className='bg-black  border-b border-l rounded-bl-2xl space-y-2 mt-2 pb-4 z-10'>{children}</div>;
};

export default TopPicksNavBarDropDown;
