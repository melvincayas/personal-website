import { Fragment } from "react";
import Card from "../../UI/Card";
import poster from "../../../assets/poster.png";

const Projects = () => {
	const projects = [
		{
			title: "Poster",
			img: poster,
			alt: "Social media website",
			content:
				"Social media website with user authentication and liking, bookmarking and commenting on posts. Made with Express, Node, and MongoDB.",
			href: "https://my-poster-app.herokuapp.com/",
			github: "https://github.com/melvincayas/Poster-App",
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
