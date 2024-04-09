import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarMenuItem({ text, to }) {
	return <NavLink to={to} className='text-white'>{text}</NavLink>;
}
