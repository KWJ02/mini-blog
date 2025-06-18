import { useState, useEffect } from 'react';
import style from './PostList.module.css';
import axiosInstace from 'utils/axiosInstace';
import Post from 'pages/post';
import Layout from 'components/layout';

export interface PostProps {
	id: number;
	title: string;
	content: string;
	userName: string;
	date: string;
}

const PostList = () => {
	const [posts, setPosts] = useState<PostProps[]>([]);
	const [initHeight, setInitHeight] = useState<string>('100vh');

	const stripHtml = (html: string) => {
		return html.replace(/<[^>]+>/g, '').trim();
	};

	useEffect(() => {
		axiosInstace
			.get('/post')
			.then((response) => {
				setPosts(response.data);
			})
			.catch((e) => {
				console.error(e);
			})
			.finally(() => {
				setInitHeight('auto');
			});
	}, []);

	return (
		<Layout
			width='100%'
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			height={initHeight}
		>
			<ul className={style.postList}>
				{posts.map((post) => (
					<li key={post.id}>
						<Post
							id={post.id}
							title={post.title}
							content={stripHtml(post.content)}
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
