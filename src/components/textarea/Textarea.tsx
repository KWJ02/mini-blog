import { useCallback, useEffect, useRef } from 'react';
import { CommonProps } from 'types/CommonProps';
import style from './Textarea.module.css';

interface TextareaProps extends CommonProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder: string;
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

		textarea.style.height = height || 'auto';

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
	}, [height, autoSizing, maxHeight]);

	useEffect(() => {
		handleInput();
	}, [handleInput]);

	return (
		<div
			className={style.root}
			style={{
				width: props.width,
			}}
		>
			<textarea
				className={style.textarea}
				ref={textareaRef}
				value={props.value}
				onChange={props.onChange} // 여기서 부모의 setTitle 호출됨
				onInput={handleInput}
				style={{
					height: height || 'auto',
					padding: '1px 4px',
				}}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default Textarea;
