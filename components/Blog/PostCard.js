import React from "react";
import moment from "moment";
import Image from "next/image";
import blogClasses from "../../styles/Blog/Blog.module.css";

const LinkWrapper = props => {
	return (
		<a
			className="columns"
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
		<article className={blogClasses["post-card"]}>
			<LinkWrapper url={url}>
				<div className="column is-three-fifths">
					<p className="title mb-2 is-3">{post.title}</p>
					<p className="mb-2 is-size-5">
						{moment(post.dateAdded).format("MMMM D, YYYY")}
					</p>
					<p className={blogClasses["post-description"]}>{post.brief}</p>
				</div>
				<div className="column">
					<Image
						className={blogClasses["post-image"]}
						src={post.coverImage}
						layout="responsive"
						width={500}
						height={300}
						alt={post.title}
					/>
				</div>
			</LinkWrapper>
		</article>
	);
};

export default PostCard;
