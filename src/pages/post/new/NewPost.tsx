import Header from 'components/header';
import { Modal } from 'components/modal';
import { Textarea, TextEditor } from 'components/textarea';
import Layout from 'components/layout';
import Button from 'components/button';
import { useState } from 'react';
import Card from 'components/card';
import axiosInstance from 'utils/axiosInstace';
import errorHandler from 'utils/errorHandler';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
	const navigator = useNavigate();
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [error, setError] = useState<boolean>(false);
	const [modalMessage, setModalMessage] = useState<string>('');
	const [alarm, setAlarm] = useState<boolean>(false);

	const errorInit = () => {
		if (error) {
			setError(false);
		} else {
			setAlarm(false);
			// 여기서 insertId값 받아와서 넣으면 될듯?
			navigator('/');
		}
		setModalMessage('');
	};

	const regist = () => {
		if (title.trim().length === 0) {
			setError(true);
			setModalMessage('제목을 입력해주세요.');
			return;
		}

		if (content.trim() === '<p><br></p>') {
			setError(true);
			setModalMessage('내용을 입력해주세요.');
			return;
		}

		axiosInstance
			.post(
				'/post/regist',
				{
					title: title,
					content: content,
				},
				{
					withCredentials: true,
				}
			)
			.then(() => {
				setAlarm(true);
				setModalMessage('등록되었습니다.');
			})
			.catch((e) => {
				setError(true);
				setModalMessage(errorHandler(e) as string);
			});
	};

	return (
		<Layout minWidth={800}>
			<Modal
				display={error || alarm}
				onClick={errorInit}
			>
				<Card
					value={modalMessage}
					flex='1'
				></Card>
			</Modal>

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
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='제목'
						width='100%'
						height='24px'
						maxHeight='96px'
						autoSizing={true}
					/>

					<TextEditor
						value={content}
						onChange={setContent}
					/>

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
							onClick={regist}
						/>
					</Layout>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default NewPost;
