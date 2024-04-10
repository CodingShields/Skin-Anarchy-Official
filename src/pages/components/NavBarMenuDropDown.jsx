import React from "react";

export default function NavBarMenuDropDown({ children, open }) {
	return open ? (
		<div className='absolute left-1/4 mt-4 text-white z-20 flex flex-col space-y-8 animate-fadeIn bg-char-900 ml-8 py-4 px-4'>{children}</div>
	) : null;
}
