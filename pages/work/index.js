import ProjectCard from "../../components/Work/ProjectCard";
import { projects } from "../../public/data/work-data";
import workClasses from "../../styles/Work/Work.module.css";

const Work = () => {
	return (
		<section className={workClasses.container}>
			{projects.map(project => (
				<ProjectCard key={project.id} project={project} />
			))}
		</section>
	);
};

export default Work;
