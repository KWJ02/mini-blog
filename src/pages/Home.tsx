// rsc => rafce로 대체
import Header from 'components/header/Header';
import PostList from 'pages/postList/PostList';
import Button from 'components/button/Button';
import Layout from 'components/layout/Layout';
import write from 'assets/images/icon_write.svg';

const Home = () => {
	return (
		<>
			<Header
				value='Mini'
				icon={true}
			/>

			<Layout
				margin='0 auto'
				width='800px'
				maxWidth='800px'
			>
				<PostList />

				<Layout
					display='flex'
					alignItems='center'
					justifyContent='end'
				>
					<Button
						marginBottom='20px'
						value=''
						imgSrc={write}
						width='60px'
						height='60px'
						padding='20px'
						display='flex'
						alignItems='center'
						justifyContent='center'
						backgroundColor='ivory'
						cursor='pointer'
						borderRadius='50%'
					/>
				</Layout>
			</Layout>
		</>
	);
};

export default Home;
