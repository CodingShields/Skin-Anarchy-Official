import artistIcon from "../../icons/artistIcon.svg";
import doctorIcon from "../../icons/doctorIcon.svg";
import thoughtIcon from "../../icons/thoughtIcon.svg";
import editorIcon from "../../icons/editorIcon.svg";
import brandIcon from "../../icons/brandIcon.svg";
import celebrityIcon from "../../icons/celebrityIcon.svg";
import {nanoid} from "nanoid";

const interviewCategories = [
	{	id: nanoid(),
		title: "MAKEUP ARTISTS",
		href: "#",
		icon: artistIcon,
		details:
			"We have interviewed some of the world’s leading makeup artists such as Danessa Myricks, Mario Dedivanovic, Rae Morris, and many more.",
	},
	{	
		id: nanoid(),
		title: "TOP DOCTORS",
		href: "#",
		icon: doctorIcon,
		details:
			"From celebrity Dermatologists such as Dr Lara Devgan to internationally recognized leaders in Medicine such as Dr Orit Markowitz and Dr Dennis Gross, our curated library contains interviews with the leaders in science and wellness.",
	},
	{	
		id: nanoid(),
		title: "THOUGHT LEADERS",
		href: "#",
		icon: thoughtIcon,
		details:
			"We have interviewed the true titans of the industry when it comes to thought leadership. Examples include executives from Estée Lauder Companies, Prominent International Speakers and many more professionals who are shaping the way our industry moves and evolves.",
	},
	{	
		id: nanoid(),
		title: "EDITORS AND JOURNALISTS",
		href: "#",
		icon: editorIcon,
		details:
			"Some of our most popular guests have been our editorial exclusive guests from leading publications such as allure, Refinery29, POPSUGAR, and many more. Our guests in this category span the realm of consumer driven editorial from Editor In Chiefs to the most highly sought after freelance journalists. The true magazine masters of our time.",
	},
	{	
		id: nanoid(),
		title: "BRAND FOUNDERS",
		href: "#",
		icon: brandIcon,
		details:
			"A large portion of SA’s library of interviews is focused on interviewing the masterminds behind the brands consumers covet and adore. With over 200 branded interviews, SA has become a true survey of the skin health industry and there is something for everyone in this category of our library. Curious about your favorite serum? Check our index and search the brand name to see if we have interviewed them. Our goal is to bring the stories to our listeners that help create the sacred bond between customer and products.",
	},
	{	
		id: nanoid(),
		title: "CELEBRITIES",
		href: "#",
		icon: celebrityIcon,
		details:
			"From Victoria Beckham’s personal salut to our listeners to Olivia Palermo’s candid conversation about her brand, we have had the immense honor of hosting the celebrities that are beyond trends and cliches. The true icons of glamour have graced our stage in the short time we have been on air. Personalities such as Sir John and others have brought a layer of insight to the overall conversation around beauty that cannot be found anywhere but our library.",
	},
];

export default interviewCategories;