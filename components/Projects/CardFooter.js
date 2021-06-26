import classes from "../../styles/Projects/ProjectCard.module.css";

const CardFooter = ({ project }) => {
	return (
		<div className="card-footer">
			<a
				className={`card-footer-item ${classes["card-links"]}`}
				href={project.href}
				target="_blank"
				rel="noreferrer noopener"
			>
				View
			</a>
			<a
				className={`card-footer-item ${classes["card-links"]}`}
				href={project.github}
				target="_blank"
				rel="noreferrer noopener"
			>
				Github
			</a>
		</div>
	);
};

export default CardFooter;
