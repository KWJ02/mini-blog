import { CommonProps } from 'types/CommonProps';

interface TextareaProps extends CommonProps {
	type: string;
	width: string;
	height: string;
}

const Textarea = ({ ...props }: TextareaProps) => {
	return (
		<textarea
			style={{
				width: props.width,
				height: props.height,
				resize: 'none',
				outline: 'none',
				fontSize: '1.25rem',
				boxSizing: 'border-box',
				padding: '8px',
			}}
			placeholder={props.type}
		></textarea>
	);
};

export default Textarea;
