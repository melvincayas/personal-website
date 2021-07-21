import { useState, useEffect } from "react";

const GET_HASHNODE_POSTS = `
query GetHashnodePosts($page: Int!) {
	user(username: "melvincayas") {
		publication {
			posts(page: $page) {
				coverImage
				title
				brief
				slug
			}
		}
	}
}`;

const Blog = () => {
	const [hashnodePosts, setHashnodePosts] = useState([]);

	useEffect(() => {
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

			setHashnodePosts(currentHashnodePosts => [
				...currentHashnodePosts,
				result.data.user.publication.posts,
			]);
		};

		fetchHashnodePosts(GET_HASHNODE_POSTS, { page: 0 });
	}, []);

	return (
		<div>
			<h1>Filler for now</h1>
		</div>
	);
};

export default Blog;
