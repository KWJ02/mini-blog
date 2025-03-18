import { CommonProps } from 'types/CommonProps';
import style from './Button.module.css';

interface ButtonProps extends CommonProps {
	value: string;
	imgSrc?: string;
	onClick?: () => void;
}

const Button = ({ value, onClick, imgSrc = '', ...props }: ButtonProps) => {
	return (
		<div
			className={style.button}
			style={{
				width: props.width,
				height: props.height,
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
		</div>
	);
};

export default Button;
