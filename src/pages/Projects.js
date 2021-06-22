import ProjectCard from "../components/Projects/ProjectCard";
import { projects } from "../components/Projects/data/projects-set";
import classes from "./styles/Projects.module.css";

const Projects = () => {
	return (
		<div className={`columns is-multiline ${classes.projects}`}>
			{projects.map(project => (
				<ProjectCard project={project} />
			))}
		</div>
	);
};

export default Projects;
