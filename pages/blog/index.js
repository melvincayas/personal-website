import { Fragment } from "react";
import Image from "next/image";
import PostCard from "../../components/Blog/PostCard";
import blogLogo from "../../public/assets/bloglogo.png";
import blogClasses from "../../styles/Blog/Blog.module.css";

const Blog = ({ hashnodePosts }) => {
	return (
		<Fragment>
			<div className={`mb-2 ${blogClasses.project}`}>
				<a href={process.env.domain} target="_blank" rel="noreferrer noopener">
					<Image src={blogLogo} alt="Melvin Learns Code" />
				</a>
			</div>
			<section className={blogClasses["post-container"]}>
				{hashnodePosts.map(post => (
					<PostCard id={post._id} post={post} />
				))}
			</section>
		</Fragment>
	);
};

export const getStaticProps = async () => {
	const GET_HASHNODE_POSTS = `
		query GetHashnodePosts($page: Int!) {
			user(username: "melvincayas") {
				publication {
					posts(page: $page) {
						_id
						coverImage
						title
						brief
						slug
						dateAdded
					}
				}
			}
}		`;

	const fetchHashnodePosts = async (query, variables = {}) => {
		const response = await fetch("https://api.hashnode.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		});

		const result = await response.json();

		return result.data.user.publication.posts;
	};

	const hashnodePosts = await fetchHashnodePosts(GET_HASHNODE_POSTS, {
		page: 0,
	});

	return {
		props: {
			hashnodePosts,
		},
	};
};

export default Blog;
