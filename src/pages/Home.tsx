// rsc => rafce로 대체
import React from 'react';
import Header from '../components/Header';

const Home = () => {
	return (
		<>
			<Header
				title="Mini Blog"
				backBtn={true}
				icon={true}
			/>
			<div>contents</div>
			<div>footer</div>
		</>
	);
};

export default Home;
