import { Fragment } from "react";
import Card from "../../UI/Card";
import poster from "../../../assets/poster.png";
import writeoff from "../../../assets/writeoff.png";

const Projects = () => {
	const projects = [
		{
			title: "Poster",
			img: poster,
			alt: "Social media website",
			content:
				"Social media website with user authentication and liking, saving and commenting on posts. Made with Express, Node, and MongoDB.",
			href: "https://my-poster-app.herokuapp.com/",
			github: "https://github.com/melvincayas/Poster-App",
		},
		{
			title: "WriteOff",
			img: writeoff,
			alt: "To-Do List",
			content:
				"Currently on-going MERN-stack project creating a website with user authentication for creating, sharing, and leaving notes on To-Do lists.",
			href: "",
			github: "https://github.com/melvincayas/todo",
		},
	];

	return (
		<Fragment>
			{projects.map(project => (
				<Card project={project} />
			))}
		</Fragment>
	);
};

export default Projects;
