import React from "react";

export default function NavBarMenuDropDown({ children, open }) {
	return open ? <div className='absolute left-0 mt-4 text-white z-20 bg-white'>{children}</div> : null;
}
