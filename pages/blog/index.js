import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import PostCard from "../../components/Blog/PostCard";
import blogLogo from "../../public/assets/bloglogo.png";
import blogClasses from "../../styles/Blog/Blog.module.css";

const Blog = ({ hashnodePosts }) => {
	return (
		<Fragment>
			<Head>
				<meta name="twitter:title" content="Melvin's Blog Posts" />
				<meta property="og:url" content="https://www.melvincayas.com/blog" />
				<title>Blog | Melvin Cayas</title>
			</Head>
			<figure className={blogClasses["blog-logo-container"]}>
				<a
					className={blogClasses["blog-logo"]}
					href={process.env.domain}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Image src={blogLogo} alt="Melvin's Blog Logo" />
				</a>
			</figure>
			<section className={blogClasses["post-container"]}>
				{hashnodePosts.map(post => (
					<PostCard key={post._id} post={post} />
				))}
			</section>
			<aside className={blogClasses["all-posts-link-container"]}>
				<a className={blogClasses["all-posts-link"]} href={process.env.domain}>
					See all posts
				</a>
			</aside>
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
