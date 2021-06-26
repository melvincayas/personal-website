import Image from "next/image";
import classes from "./styles/ProjectCard.module.css";

const CardImage = ({ project }) => {
	return (
		<div className={`card-image ${classes["image-container"]}`}>
			<figure className="image is-square">
				<Image src={project.img.src} layout="fill" alt={project.alt} />
				<a href={project.href} target="_blank" rel="noreferrer noopener">
					<div className={classes.overlay}>
						<p className={`has-text-white ${classes["overlay-text"]}`}>
							{project.alt}
						</p>
					</div>
				</a>
			</figure>
		</div>
	);
};

export default CardImage;
