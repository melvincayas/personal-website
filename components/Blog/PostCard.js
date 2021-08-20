import React from "react";
import moment from "moment";
import Image from "next/image";
import Card from "../UI/Card";
import blogClasses from "../../styles/Blog/Blog.module.css";

/*global process*/

const LinkWrapper = props => {
	return (
		<a
			className={blogClasses["link-wrapper"]}
			href={props.url}
			target="_blank"
			rel="noreferrer noopener"
		>
			{props.children}
		</a>
	);
};

const PostCard = ({ post }) => {
	const url = `${process.env.domain}/${post.slug}`;

	return (
		<Card className={blogClasses["post-card"]}>
			<LinkWrapper url={url}>
				<article className={blogClasses["post-column"]}>
					<p className={blogClasses["post-title"]}>{post.title}</p>
					<p className={blogClasses["post-date"]}>
						{moment(post.dateAdded).format("MMMM D, YYYY")}
					</p>
					<p className={blogClasses["post-description"]}>{post.brief}</p>
				</article>
				<figure className={blogClasses["post-picture-column"]}>
					<Image
						className={blogClasses["post-image"]}
						src={post.coverImage}
						layout="responsive"
						width={500}
						height={300}
						alt={post.title}
					/>
				</figure>
			</LinkWrapper>
		</Card>
	);
};

export default PostCard;
