import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
const podcast = [
	{
		highlight: [
			{
				name: "Mario Dedivanovic",
				image: "",
				link: "",
			},
			{
				name: "Danessa Myricks",
				image: "",
				link: "",
			},
			{
				name: "Sir John",
				image: "",
				link: "",
			},
		],
	},
	{
		highlight: [
			{
				name: "Dr. Michelle Henry",
				image: "",
				link: "",
			},
			{
				name: "Dr. Dennis Gross",
				image: "",
				link: "",
			},
			{
				name: "Dr Yannis",
				image: "",
				link: "",
			},
		],
	},
	{
		highlight: [
			{
				name: "Jen Sincero",
				image: "",
				link: "",
			},
			{
				name: "Rich Gersten",
				image: "",
				link: "",
			},
			{
				name: "Annie Jackson of Credo",
				image: "",
				link: "",
			},
		],
	},
	{
		highlight: [
			{
				name: "Jessica Cruel of allure",
				image: "",
				link: "",
			},
			{
				name: "Jill Manoff of Glossy",
				image: "",
				link: "",
			},
			{
				name: "Elise Tabin",
				image: "",
				link: "",
			},
		],
	},
	{
		highlight: [
			{
				name: "Pacifica beauty founder Brook Harvey-taylor",
				image: "",
				link: "",
			},
			{
				name: "Charles Rosier of AUGUSTINUS BADER",
				image: "",
				link: "",
			},
			{
				name: "Camila Pierotti of Sol De Janeiro ",
				image: "",
				link: "",
			},
		],
	},
	{
		highlight: [
			{
				name: "Torrey DeVitto",
				image: "",
				link: "",
			},
			{
				name: "Torrey DeVitto",
				image: "",
				link: "",
			},
			{
				name: "Demi Tebow ",
				image: "",
				link: "",
			},
		],
	},
];

console.log(podcast.highlight);
export default function NavBarMenuDropDown({ children, open, highlightData, titleText, menuStyle, navMenu, highlightMenuStyle, child }) {
	const [index, setIndex] = useState(0);
	const handleMouseOver = (e) => {
		e.preventDefault();
		const name = e.target.name;
		console.log(name);
	};
	console.log(index);
	return open ? (
		<div className={menuStyle ? menuStyle : null}>
			<div onMouseOver={handleMouseOver} className={navMenu}>
				{titleText ? <h1 className=' text-center text-3xl underline underline-offset-8 decoration-1'>{titleText}</h1> : null}
				{children}
			</div>
		</div>
	) : null;
}

NavBarMenuDropDown.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
	data: PropTypes.array.isRequired,
	text: PropTypes.string.isRequired,
	titleText: PropTypes.string.isRequired,
	menuStyle: PropTypes.string.isRequired,
	navMenu: PropTypes.string.isRequired,
	highlightMenuStyle: PropTypes.string,
	highlightData: PropTypes.array.isRequired,
};
