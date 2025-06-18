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
					padding='40px 20px'
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

					<Layout
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
