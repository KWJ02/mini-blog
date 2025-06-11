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
				placeholder={props.placeholder}
			/>
		</Layout>
	);
};

export default TextEditor;
