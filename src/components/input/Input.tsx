import style from './Input.module.css';
import { CommonProps } from 'types/CommonProps';
import { ChangeEvent, FocusEvent } from 'react';

interface InputProps extends CommonProps {
	value: string;
	type: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	maxLength?: number;
	autoFocus?: boolean;
	label?: string;
	error?: boolean;
	errorMessage?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ width = '100%', height = '40px', onChange, onFocus, ...props }: InputProps) => {
	let inputError = props.error;
	return (
		<div
			className={style.inputContainer}
			style={{
				width: width,
				marginTop: `${props.marginTop}`,
				marginBottom: `${props.marginBottom}`,
			}}
		>
			{props.label && <label>{props.label}</label>}
			{/**<div className={inputError ? errorClass : ''}>
			 * 지금 css는 모듈로 불러오기 때문에 문자열로 바로 class부여하면 적용안됨.
			 * style객체로 접근해야 함;;
			 */}
			<div
				className={`${style.inputSection} ${inputError ? style.inputError : ''}`}
				style={{
					height: height,
				}}
			>
				<input
					className={style.input}
					style={{
						height: height,
					}}
					type={props.type}
					value={props.value}
					name={props.name}
					placeholder={props.placeholder}
					disabled={props.disabled}
					maxLength={props.maxLength}
					autoFocus={props.autoFocus}
					onChange={onChange}
					onFocus={onFocus}
				/>
			</div>
			{/** 에러 메세지 영역 */}
			{inputError && props.errorMessage ? (
				<div className={style.errorMessageSection}>* {props.errorMessage}</div>
			) : (
				<div
					className={style.errorMessageSection}
					style={{ textIndent: '-999em' }}
				>
					init
				</div>
			)}
		</div>
	);
};

export default Input;
