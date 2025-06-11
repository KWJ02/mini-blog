import Layout from 'components/layout';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CommonProps } from 'types/CommonProps';

interface TextEditorProps extends CommonProps {
	placeholder?: string;
}

const TextEditor = ({ ...props }: TextEditorProps) => {
	const [value, setValue] = useState('');

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image', 'video'],
			['code-block'],
			['clean'],
		],
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'list',
		'bullet',
		'link',
		'image',
		'video',
		'code-block',
	];

	return (
		<Layout
			width='100%'
			height={props.height || '400px'}
			display='flex'
			flexDirection='column'
			position='relative'
		>
			<ReactQuill
				style={{ height: '100%' }}
				value={value}
				onChange={setValue}
				modules={modules}
				formats={formats}
				placeholder='내용을 입력해주세요.'
			/>
		</Layout>
	);
};

export default TextEditor;
