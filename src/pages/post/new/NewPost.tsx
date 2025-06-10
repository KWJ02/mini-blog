import Header from 'components/header';
import Textarea from 'components/textarea';
import Layout from 'components/layout';
import Button from 'components/button';

const NewPost = () => {
	return (
		<Layout minWidth={800}>
			<Header
				value='Mini'
				backBtn={true}
				icon={true}
			/>

			<Layout
				padding='20px 0 0 0'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				gap={12}
				width='100%'
			>
				<Textarea
					type='제목'
					width='800px'
					height='auto'
				/>
				<Textarea
					type='내용을 입력해주세요.'
					width='800px'
					height='400px'
				/>

				<Layout
					width='800px'
					display='flex'
					alignItems='center'
					justifyContent='end'
				>
					<Button
						width='60px'
						height='30px'
						value='등록'
						cursor='pointer'
					/>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default NewPost;
