import { useState, useEffect } from 'react';
import style from './PostList.module.css';
import axiosInstace from 'utils/axiosInstace';
import Post from 'pages/post/Post';
import Layout from 'components/layout/Layout';

export interface PostProps {
	id: number;
	title: string;
	content: string;
	userName: string;
	date: string;
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
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<ul className={style.postList}>
				{posts.map((post) => (
					<li key={post.id}>
						<Post
							id={post.id}
							title={post.title}
							content={post.content}
							userName={post.userName}
							date={post.date}
						/>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default PostList;
