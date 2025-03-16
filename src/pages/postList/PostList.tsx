import React from 'react';
import { useState, useEffect } from 'react';
import axiosInstace from 'utils/axiosInstace';

interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
	created_date: string;
}

const PostList = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		axiosInstace
			.get('/post')
			.then((response) => {
				setPosts(response.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<div>
			{posts.map((post) => (
				<div>{post.id}</div>
			))}
		</div>
	);
};

export default PostList;
