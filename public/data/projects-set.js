import poster from "../assets/poster.png";
import writeoff from "../assets/writeoff.png";
import mathwhizard from "../assets/mathwhizard.png";

export const projects = [
	{
		id: 1,
		title: "Math Whizard",
		img: mathwhizard,
		alt: "Math game",
		content:
			"Math game allowing users to customize the difficulty and the operators used. Created with HTML, CSS, and Vanilla JavaScript.",
		href: "https://www.mathwhizard.com",
		github: "https://github.com/melvincayas/math-whizard",
	},
	{
		id: 2,
		title: "Poster",
		img: poster,
		alt: "Social media website",
		content:
			"Social media website with user authentication and liking, saving and commenting on posts. Made with Express, Node, and MongoDB.",
		href: "https://my-poster-app.herokuapp.com/",
		github: "https://github.com/melvincayas/Poster-App",
	},
	{
		id: 3,
		title: "WriteOff",
		img: writeoff,
		alt: "To-Do List",
		content:
			"Currently on-going MERN-stack project creating a website with user authentication for creating, sharing, and leaving notes on To-Do lists.",
		href: "",
		github: "https://github.com/melvincayas/todo",
	},
];
