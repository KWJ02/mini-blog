import Header from 'components/header';
import Layout from 'components/layout';
import Title from 'components/title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from 'utils/axiosInstace';
import errorHandler from 'utils/errorHandler';
import DOMPurify from 'dompurify';

type PostProps = {
	id: number;
	title: string;
	content: string;
	date: string;
};

const PostView = () => {
	const [data, setData] = useState<PostProps | null>(null);
	// useParams로 얻어오는 파라미터도 역시 RoutesConfig.tsx에 등록된 파라미터 이름으로 가져와야함.
	const { id } = useParams();

	useEffect(() => {
		if (!id) return;

		axiosInstance
			.get(`/post/${encodeURIComponent(id)}`)
			.then((res) => {
				setData(res.data[0]);
			})
			.catch((e) => console.log(errorHandler(e) as string));
	}, [id]);

	return (
		<>
			<Header
				value='Mini'
				icon={true}
			></Header>

			<Layout
				width='800px'
				minWidth={800}
				margin='0 auto'
				padding='20px 0'
				boxSizing='border-box'
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				{data && (
					<Layout width='100%'>
						<Title
							fontSize='2rem'
							value={data.title}
							padding={12}
						/>
						<hr />
						<div
							style={{ height: '100%', minHeight: '400px', padding: '12px', boxSizing: 'border-box' }}
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(data.content),
							}}
						/>
					</Layout>
				)}
			</Layout>
		</>
	);
};

export default PostView;
