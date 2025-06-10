import { useCallback, useEffect, useRef } from 'react';
import { CommonProps } from 'types/CommonProps';

interface TextareaProps extends CommonProps {
	type: string;
	width: string;
	height?: string;
	autoSizing: boolean;
	maxHeight?: string;
}

const Textarea = ({ height, autoSizing, maxHeight = 'none', ...props }: TextareaProps) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInput = useCallback(() => {
		const textarea = textareaRef.current;
		if (!textarea || !autoSizing) return;

		textarea.style.height = 'auto';

		const scrollHeight = textarea.scrollHeight;

		if (maxHeight) {
			const max = parseInt(maxHeight);
			if (scrollHeight > max) {
				textarea.style.height = maxHeight;
				textarea.style.overflowY = 'auto';
			} else {
				textarea.style.height = scrollHeight + 'px';
				textarea.style.overflowY = 'hidden';
			}
		} else {
			textarea.style.height = scrollHeight + 'px';
		}
	}, [autoSizing, maxHeight]);

	useEffect(() => {
		handleInput();
	}, [handleInput]);

	return (
		<div
			style={{
				width: props.width,
				border: '1px solid #ccc',
				borderRadius: '4px',
				padding: '8px',
				fontSize: '1.25rem',
				display: 'flex',
				alignItems: 'center',
				boxSizing: 'border-box',
				backgroundColor: '#fff',
			}}
		>
			<textarea
				ref={textareaRef}
				onInput={handleInput}
				style={{
					width: '100%',
					height: height || 'auto',
					border: 'none',
					outline: 'none',
					resize: 'none',
					fontSize: 'inherit',
					lineHeight: '1.5',
					backgroundColor: 'transparent',
				}}
				placeholder={props.type}
			/>
		</div>
	);
};

export default Textarea;
