import Layout from 'components/layout';
import ReactQuill from 'react-quill-new';
import 'react-quill/dist/quill.snow.css';
import './TextEditor.css';

interface TextEditorProps {
	value: string;
	onChange: (value: string) => void;
}

const TextEditor = ({ ...props }: TextEditorProps) => {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ list: 'ordered' }],
			['link', 'image', 'video'],
			['code-block'],
			['clean'],
		],
	};

	const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'link', 'image', 'video', 'code-block'];

	return (
		<Layout
			width='100%'
			display='flex'
			flexDirection='column'
			position='relative'
		>
			<ReactQuill
				value={props.value}
				onChange={props.onChange}
				modules={modules}
				formats={formats}
				placeholder='내용을 입력해주세요.'
				className='custom-quill'
			/>
		</Layout>
	);
};

export default TextEditor;
