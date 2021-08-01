import Card from "../UI/Card";
import ButtonContainer from "./ButtonContainer";
import workClasses from "../../styles/Work/Work.module.css";

const ProjectCard = ({ project }) => {
	return (
		<div className={workClasses.column}>
			<Card className={workClasses["project-card"]}>
				<h1 className={workClasses.title}>{project.title}</h1>
				<p className={workClasses.description}>{project.content}</p>
				<div className={workClasses["tech-stack"]}>
					<p className={workClasses.subtitle}>Technologies Used</p>
					<p>
						{project.tags.map((tag, index) => (
							<span key={index} className={workClasses.tag}>
								{tag}
							</span>
						))}
					</p>
				</div>
				<ButtonContainer project={project} />
			</Card>
		</div>
	);
};

export default ProjectCard;
