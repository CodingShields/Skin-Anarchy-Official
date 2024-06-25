/* eslint-disable no-undef */

import { visibility } from "html2canvas/dist/types/css/property-descriptors/visibility";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xxl: { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
		extend: {
			fontFamily: {
				montserrat: ["Montserrat"],
				glacialBold: ["Glacial Indifference Bold"],
				glacialItalic: ["Glacial Indifference Italic"],
				glacialRegular: ["Glacial Indifference Regular"],
				playfair: ["PlayFair Display"],
				openSans: ["Open Sans"],
				signature: ["Hathem"],
			},

			duration: {
				100: "100ms",
				200: "200ms",
				300: "300ms",
				400: "400ms",
				500: "500ms",
				600: "600ms",
				700: "700ms",
				800: "800ms",
				900: "900ms",
				1000: "1000ms",
				2000: "2000ms",
				3000: "3000ms",
				4000: "4000ms",
				5000: "5000ms",
			},
			animation: {
				marquee: "marquee 25s linear infinite",
				marquee2: "marquee2 25s linear infinite",
				slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
				rotateLogo: "rotateLogo 5s linear infinite",
				fadeIn: "fadeIn .5s ease-in forwards",
				fadeOut: "fadeOut .5s ease-out forwards",
				navBarOpen: "navBarOpen 1s ease-in-out forwards",
				navBarClose: "navBarClose .75s ease-in-out forwards",
				chatBotSlideIn: "chatBotSlideIn 1.5s ease-in-out forwards",
				chatBotSlideOut: "chatBotSlideOut 1.5s ease-in-out forwards",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				slideIn: {
					"0%": { opacity: 0, transform: "-translateX(100%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				rotateLogo: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotateY(360deg)" },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				navBarOpen: {
					"0%": {
						height: "100vh",
						transform: "translateY(-100%)",
						opacity: 0,
					},
					"100%": {
						height: "100vh",
						transform: "translateY(0)",
						opacity: 1,
					},
				},
				navBarClose: {
					"0%": {
						height: "100vh",
						transform: "translateY(0)",
						opacity: 1,
					},
					"100%": {
						height: "100vh",
						transform: "translateY(-100%)",
						opacity: 0,
					},
				},
				chatBotSlideIn: {
					"0%": {
						transform: "translateY(100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
				chatBotSlideOut: {
					"0%": {
						transform: "translateY(0)",
						opacity: 1,
					},
					"100%": {
						transform: "translateY(100%)",
						opacity: 0,
					},
				},
			},

			spacing: {
				2: "0.5rem",
				4: "1rem",
				6: "1.5rem",
				8: "2rem",
				10: "2.5rem",
				12: "3rem",
				14: "3.5rem",
				16: "4rem",
				18: "4.5rem",
				20: "5rem",
				22: "5.5rem",
				24: "6rem",
				26: "6.5rem",
				28: "7rem",
				30: "7.5rem",
				32: "8rem",
				34: "8.5rem",
				36: "9rem",
				38: "9.5rem",
				40: "10rem",
				42: "10.5rem",
				44: "11rem",
				46: "11.5rem",
				48: "12rem",
				50: "12.5rem",
				52: "13rem",
				54: "13.5rem",
				56: "14rem",
			},
			height: {
				90: "22.5rem",
				104: "26rem",
				112: "28rem",
				128: "32rem",
				144: "36rem",
				160: "40rem",
				176: "44rem",
				192: "48rem",
				208: "52rem",
				224: "56rem",
				240: "60rem",
				248: "62rem",
				256: "64rem",
			},
			width: {
				112: "28rem",

				128: "32rem",
				144: "36rem",
				160: "40rem",
				176: "44rem",
				192: "48rem",
			},
		},
		scale: {
			0: "0",
			25: ".25",
			50: ".5",
			75: ".75",
			80: ".8",
			90: ".9",
			100: "1",
			105: "1.05",
			110: "1.1",
			125: "1.25",
			150: "1.5",
			175: "1.75",
			200: "2",
		},

		colors: {
			primary: "#1a202c",
			secondary: "#2d3748",
			white: "#ffffff",
			black: "#000000",
			gradientTransparent: {
				100: "#ffffff00",
			},
			char: {
				900: "#252525",
			},
			blue: {
				50: "#f0f9ff",
				100: "#e0f2fe",
				200: "#bae6fd",
				300: "#7dd3fc",
				400: "#38bdf8",
				500: "#0ea5e9",
				600: "#0284c7",
				700: "#0369a1",
				800: "#075985",
				900: "#0c4a6e",
			},

			zinc: {
				50: "#f7fafc",
				100: "#edf2f7",
				200: "#e2e8f0",
				300: "#cbd5e0",
				400: "#a0aec0",
				500: "#718096",
				600: "#4a5568",
				700: "#2d3748",
				800: "#1a202c",
				900: "#171923",
			},
			red: {
				50: "#fff5f5",
				100: "#fed7d7",
				200: "#feb2b2",
				300: "#fc8181",
				400: "#f56565",
				500: "#e53e3e",
				600: "#c53030",
				700: "#9b2c2c",
				800: "#822727",
				900: "#63171b",
			},
			orange: {
				50: "#fffaf0",
				100: "#feebc8",
				200: "#fbd38d",
				300: "#f6ad55",
				400: "#ed8936",
				500: "#dd6b20",
				600: "#c05621",
				700: "#9c4221",
				800: "#7b341e",
				900: "#652b19",
			},
			yellow: {
				50: "#fffff0",
				100: "#fefcbf",
				200: "#faf089",
				300: "#f6e05e",
				400: "#ecc94b",
				500: "#d69e2e",
				600: "#b7791f",
				700: "#975a16",
				800: "#744210",
				900: "#5F370E",
			},
			gold: {
				100: "#fff9d4",
				500: "#af966f",
			},
			gray: {
				50: "#f7fafc",
				100: "#edf2f7",
				200: "#e2e8f0",
				300: "#cbd5e0",
				400: "#a0aec0",
				500: "#718096",
				600: "#4a5568",
				700: "#2d3748",
				800: "#1a202c",
				900: "#171923",
			},
			indigo: {
				50: "#f0f5ff",
				100: "#e5edff",
				200: "#cddbfe",
				300: "#b4c6fc",
				400: "#8da2fb",
				500: "#6875f5",
				600: "#5850ec",
				700: "#5145cd",
				800: "#42389d",
				900: "#362f78",
			},
			green: {
				50: "#f0fdf4",
				100: "#dcfce7",
				200: "#bbf7d0",
				300: "#86efac",
				400: "#4ade80",
				500: "#22c55e",
				600: "#16a34a",
				700: "#15803d",
				800: "#166534",
				900: "#14532d",
			},
		},

		borderRadius: {
			sm: ".125rem",
			md: "0.375rem",
			lg: ".5rem",
			xl: "0.75rem",
			"2xl": "1rem",
			"3xl": "1.5rem",
			"4xl": "2rem",
			"5xl": "2.5rem",
			"6xl": "3rem",
			"7xl": "3.5rem",
			"8xl": "4rem",
			"9xl": "4.5rem",
			full: "9999px",
		},
	},
	duration: {
		100: "100ms",
		200: "200ms",
		300: "300ms",
		400: "400ms",
		500: "500ms",
		600: "600ms",
		700: "700ms",
		800: "800ms",
		900: "900ms",
		1000: "1000ms",
		2000: "2000ms",
		3000: "3000ms",
		4000: "4000ms",
		5000: "5000ms",
	},

	plugins: [
		// require("tailwind-scrollbar-hide"),
		require("@tailwindcss/typography"),
		// require("@tailwindcss/aspect-ratio"),
		// require("@tailwindcss/container-queries"),
		require("@tailwindcss/forms"),
		"prettier-plugin-tailwindcss",
	],
};
