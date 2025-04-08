// rsc => rafce로 대체
import Header from 'components/header/Header';
import PostList from 'pages/postList/PostList';
import Button from 'components/button/Button';
import Layout from 'components/layout/Layout';
import write from 'assets/images/icon_write.svg';
import axiosInstance from 'utils/axiosInstace';
import errorHandler from 'utils/errorHandler';
import { useState } from 'react';
import { Modal } from 'components/modal/Modal';
import Card from 'components/card/Card';
import { useNavigate } from 'react-router-dom';

interface Error {
	isActive: boolean;
	message: string;
}

const Home = () => {
	const navigator = useNavigate();
	const [error, setError] = useState<Error | null>(null);
	const newPost = () => {
		axiosInstance
			.get('/auth/check')
			.then(() => {})
			.catch((e) => setError({ isActive: true, message: errorHandler(e) as string }));
	};
	return (
		<>
			<Modal
				display={error?.isActive || false}
				onClick={() => {
					setError(null);
					navigator('/signIn');
				}}
			>
				<Card
					value={error?.message as string}
					flex={1}
				/>
			</Modal>
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
						onClick={newPost}
					/>
				</Layout>
			</Layout>
		</>
	);
};

export default Home;
