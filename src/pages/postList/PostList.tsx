import { useState, useEffect } from 'react';
import style from './PostList.module.css';
import axiosInstace from 'utils/axiosInstace';
import Post from 'pages/post/Post';
import Layout from 'components/layout/Layout';

export interface PostProps {
	id: number;
	title: string;
	content: string;
	author: string;
	created_date: string;
}

const PostList = () => {
	const [posts, setPosts] = useState<PostProps[]>([]);

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

	return (
		<Layout
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
			gap="8px"
			maxWidth="800px"
		>
			{posts.map((post) => (
				<ul className={style.postList}>
					<li key={post.id}>
						<Post
							id={post.id}
							title={post.title}
							content={post.content}
							author={post.author}
							created_date={post.created_date}
						/>
					</li>
				</ul>
			))}
		</Layout>
	);
};

export default PostList;
