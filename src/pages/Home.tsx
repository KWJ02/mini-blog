// rsc => rafce로 대체
import Header from '../components/header/Header';

const Home = () => {
	return (
		<>
			<Header
				title="Mini Blog"
				icon={true}
			/>
			<div>contents</div>
			<div>footer</div>
		</>
	);
};

export default Home;
