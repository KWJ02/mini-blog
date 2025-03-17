// rsc => rafce로 대체
import Header from 'components/header/Header';
import PostList from './postList/PostList';

const Home = () => {
	return (
		<>
			<Header
				value="Mini Blog"
				icon={true}
			/>

			<PostList />
		</>
	);
};

export default Home;
