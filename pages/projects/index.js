import ProjectCard from "../../components/Projects/ProjectCard";
import { projects } from "../../public/data/projects-set";
import classes from "../../styles/Projects/Projects.module.css";

const Projects = () => {
	return (
		<div className={`columns is-multiline ${classes.projects}`}>
			{projects.map(project => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default Projects;
