import PostCard from "../../components/Blog/PostCard";
import classes from "../../styles/Projects/Projects.module.css";

const Blog = ({ hashnodePosts }) => {
	return (
		<div className={`columns is-multiline ${classes.projects}`}>
			{hashnodePosts.map(post => (
				<PostCard id={post._id} post={post} />
			))}
		</div>
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
