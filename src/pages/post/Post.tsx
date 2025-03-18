import { PostProps } from 'pages/postList/PostList';
import style from './Post.module.css';
import Title from 'components/title/Title';

const Post = ({ ...props }: PostProps) => {
	return (
		<div className={style.root}>
			<Title value={props.title} />
			<div className={style.contentSection}>{props.content}</div>
			<div className={style.footerSection}>
				<div className={style.authorSection}>{props.userName}</div>
				<div className={style.dateSection}>{props.date}</div>
			</div>
		</div>
	);
};

export default Post;
