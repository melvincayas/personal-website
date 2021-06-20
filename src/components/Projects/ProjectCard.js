import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import classes from "./styles/ProjectCard.module.css";

const Card = ({ project }) => {
	return (
		<div className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd px-5">
			<div className={`card ${classes["increase-size"]}`}>
				<CardImage project={project} />
				<CardContent project={project} />
				<CardFooter project={project} />
			</div>
		</div>
	);
};

export default Card;
