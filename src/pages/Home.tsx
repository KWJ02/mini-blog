// rsc => rafce로 대체
import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import PostList from './postList/PostList';

const Home = () => {
	return (
		<>
			<Header
				title="Mini Blog"
				icon={true}
			/>
			<Layout>
				<PostList />
			</Layout>
		</>
	);
};

export default Home;
