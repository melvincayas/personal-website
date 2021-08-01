import workClasses from "../../styles/Work/Work.module.css";
import ButtonLink from "../UI/ButtonLink";

const ButtonContainer = ({ project }) => {
	return (
		<div className={workClasses["button-container"]}>
			{project.live ? (
				<ButtonLink
					href={project.live}
					className={`${workClasses["project-button"]} ${workClasses["live-button"]}`}
				>
					Live
				</ButtonLink>
			) : (
				""
			)}
			<ButtonLink
				href={project.github}
				className={`${workClasses["project-button"]} ${workClasses["github-button"]}`}
			>
				GitHub
			</ButtonLink>
		</div>
	);
};

export default ButtonContainer;
