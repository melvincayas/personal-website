import Card from "../UI/Card";
import ButtonContainer from "./ButtonContainer";
import workClasses from "../../styles/Work/Work.module.css";

const ProjectCard = ({ project }) => {
	return (
		<div className={workClasses.column}>
			<Card className={workClasses["project-card"]}>
				<h1 className={workClasses.title}>{project.title}</h1>
				<p>{project.content}</p>
				<ButtonContainer project={project} />
				<div>
					{project.tags.map((tag, index) => (
						<span key={index} className={workClasses.tag}>
							{tag}
						</span>
					))}
				</div>
			</Card>
		</div>
	);
};

export default ProjectCard;
