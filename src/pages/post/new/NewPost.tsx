import Header from 'components/header';
import { Textarea, TextEditor } from 'components/textarea';
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
				width='100%'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<Layout
					padding='20px'
					display='flex'
					width='800px'
					boxSizing='border-box'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					gap={12}
				>
					<Textarea
						placeholder='제목'
						width='100%'
						height='24px'
						maxHeight='96px'
						autoSizing={true}
					/>

					<TextEditor />

					{/** ReactQuill의 toolbar가 42px, height를 400px로 주면
					 * ql.container 영역이 400px로 전달이 되긴 하는데,
					 * 전체 영역도 400px로 결정돼서, toolbar의 길이 42px만큼 위로 올라가는 현상때문에
					 * 버튼이 먹힘.
					 * 그래서 버튼을 담은 레이아웃 컴포넌트의 marginTop을 toolbar의 길이인 42px만큼 당김
					 */}
					<Layout
						margin='42px 0 0 0'
						width='100%'
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
		</Layout>
	);
};

export default NewPost;
