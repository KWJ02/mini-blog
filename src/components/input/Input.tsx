import style from './Input.module.css';
import { CommonProps } from '@/types/CommonProps';
import { ChangeEvent } from 'react';

interface InputProps extends CommonProps {
	value: string;
	type: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	maxLength?: number;
	autoFocus?: boolean;
	label?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ width = '100%', height = 'auto', ...props }: InputProps) => {
	return (
		<div
			className={style.inputContainer}
			style={{
				width: width,
				height: height,
				marginTop: `${props.marginTop}`,
				marginBottom: `${props.marginBottom}`,
			}}
		>
			{props.label && <label>{props.label}</label>}
			<input
				className={style.input}
				type={props.type}
				value={props.value}
				name={props.name}
				placeholder={props.placeholder}
				disabled={props.disabled}
				maxLength={props.maxLength}
				autoFocus={props.autoFocus}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default Input;
