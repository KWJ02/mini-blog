import { CommonProps } from 'types/CommonProps';
import style from './Button.module.css';

interface ButtonProps extends CommonProps {
	value: string;
	imgSrc?: string;
	disabled?: boolean;
	onClick?: () => void;
}

const Button = ({
	width = '100%',
	height = 'auto',
	value,
	onClick,
	imgSrc = '',
	disabled = false,
	border = 'none',
	...props
}: ButtonProps) => {
	return (
		<button
			className={style.button}
			style={{
				width: width,
				height: height,
				border: border,
				marginTop: props.marginTop,
				marginBottom: props.marginBottom,
				borderRadius: props.borderRadius,
				display: props.display,
				alignItems: props.alignItems,
				justifyContent: props.justifyContent,
				backgroundColor: props.backgroundColor,
				boxShadow: props.boxShadow,
				cursor: props.cursor,
				padding: props.padding,
			}}
			disabled={disabled}
			onClick={onClick}
		>
			{imgSrc && (
				<img
					src={imgSrc}
					width='28px'
					alt='작성하기'
				></img>
			)}
			{value}
		</button>
	);
};

export default Button;
