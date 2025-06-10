// rsc => rafce로 대체
import Header from 'components/header';
import PostList from 'pages/postList';
import Button from 'components/button';
import Layout from 'components/layout';
import axiosInstance from 'utils/axiosInstace';
import errorHandler from 'utils/errorHandler';
import { useState } from 'react';
import { Modal } from 'components/modal';
import Card from 'components/card';
import { useNavigate } from 'react-router-dom';

// 에러 모달 전용 인터페이스 통합필요
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
			.then(() => navigator('/new'))
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
				minWidth='800px'
			>
				<PostList />

				<Layout
					width='100%'
					display='flex'
					alignItems='center'
					justifyContent='end'
				>
					<Button
						marginBottom='20px'
						value='글쓰기'
						width='60px'
						height='30px'
						display='flex'
						alignItems='center'
						justifyContent='center'
						cursor='pointer'
						onClick={newPost}
					/>
				</Layout>
			</Layout>
		</>
	);
};

export default Home;
