import classes from "./Card.module.css";

const Card = ({ project }) => {
	return (
		<div className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd px-5">
			<div className={`card ${classes["increase-size"]}`}>
				<div className={`card-image ${classes["image-container"]}`}>
					<figure className="image is-square">
						<img src={project.img} alt={project.alt}></img>
						<a href={project.href} target="_blank" rel="noreferrer noopener">
							<div className={classes.overlay}>
								<p className={`has-text-white ${classes["overlay-text"]}`}>
									{project.alt}
								</p>
							</div>
						</a>
					</figure>
				</div>
				<div className="card-content">
					<div className="content">
						<p className="title mb-2 is-4">{project.title}</p>
						<p>{project.content}</p>
					</div>
				</div>
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
			</div>
		</div>
	);
};

export default Card;
