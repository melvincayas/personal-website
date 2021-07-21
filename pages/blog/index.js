import { Fragment } from "react";

const Blog = ({ hashnodePosts }) => {
	return (
		<Fragment>
			{hashnodePosts.map(post => (
				<article key={post._id}>
					<img src={post.coverImage} />
					<h1>{post.title}</h1>
					<p>{post.brief}</p>
				</article>
			))}
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
