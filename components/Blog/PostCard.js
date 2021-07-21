import React from "react";
import moment from "moment";
import Image from "next/image";
import blogClasses from "../../styles/Blog/Blog.module.css";

const LinkWrapper = props => {
	return (
		<a
			className={blogClasses.links}
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
		<article className={`columns ${blogClasses["post-card"]}`}>
			<div className="column is-three-fifths p-3">
				<LinkWrapper url={url}>
					<p className="title mb-2 is-3">{post.title}</p>
				</LinkWrapper>
				<LinkWrapper url={url}>
					<p className="mb-2 is-size-5">
						{moment(post.dateAdded).format("MMMM D, YYYY")}
					</p>
				</LinkWrapper>
				<LinkWrapper url={url}>
					<p className={blogClasses["post-description"]}>{post.brief}</p>
				</LinkWrapper>
			</div>
			<div className="column">
				<LinkWrapper url={url}>
					<Image
						className={blogClasses.image}
						src={post.coverImage}
						layout="responsive"
						width={500}
						height={300}
						alt={post.title}
					/>
				</LinkWrapper>
			</div>
		</article>
	);
};

export default PostCard;
