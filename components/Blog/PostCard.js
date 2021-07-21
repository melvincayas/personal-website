import React from "react";
import Image from "next/image";
import classes from "../../styles/Projects/ProjectCard.module.css";

const PostCard = ({ post }) => {
	console.log(post.dateAdded);
	const url = `${process.env.domain}/${post.slug}`;

	return (
		<div className="column is-full-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd px-5">
			<div className={`card ${classes["increase-size"]}`}>
				<div className="card">
					<figure className="image is-16by9">
						<Image src={post.coverImage} layout="fill" alt={post.title} />
						<a href={url} target="_blank" rel="noreferrer noopener">
							<div className={classes.overlay}>
								<p className={`has-text-white ${classes["overlay-text"]}`}>
									{post.title}
								</p>
							</div>
						</a>
					</figure>
					<div className="card-content">
						<div className="content">
							<p className="title mb-2 is-4">{post.title}</p>
							<p className="mb-2 is-5">{post.dateAdded}</p>
							<p>{post.brief}</p>
						</div>
					</div>
					<div className="card-footer">
						<a
							className={`card-footer-item ${classes["card-links"]}`}
							href={url}
							target="_blank"
							rel="noreferrer noopener"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
