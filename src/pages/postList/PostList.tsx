import { useState, useEffect } from 'react';
import style from './PostList.module.css';
import axiosInstace from 'utils/axiosInstace';
import Post from 'pages/post';
import Layout from 'components/layout';
import { differenceInSeconds, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

export interface PostProps {
	id: number;
	title: string;
	content: string;
	userName: string;
	date: string;
}

const PostList = () => {
	const [posts, setPosts] = useState<PostProps[]>([]);
	const navigator = useNavigate();
	const [initHeight, setInitHeight] = useState<string>('100vh');

	const stripHtml = (html: string) => {
		return html.replace(/<[^>]+>/g, '').trim();
	};

	const timeAgo = (date: Date) => {
		const diffSeconds = differenceInSeconds(new Date(), date);

		if (diffSeconds < 60) {
			return '방금 전';
		}

		return formatDistanceToNow(date, { addSuffix: true, locale: ko });
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

	const showDetail = (postId: number) => {
		navigator(`/post/${postId}`);
	};

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
					<li
						key={post.id}
						onClick={() => {
							showDetail(post.id);
						}}
					>
						<Post
							id={post.id}
							title={post.title}
							content={stripHtml(post.content)}
							userName={post.userName}
							date={timeAgo(new Date(post.date))}
						/>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default PostList;
