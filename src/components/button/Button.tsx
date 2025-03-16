import { CommonProps } from '@/types/CommonProps';
import style from './Button.module.css';

interface ButtonProps extends CommonProps {
	value: string;
	onClick?: () => void;
}

const Button = ({ value, onClick, ...props }: ButtonProps) => {
	return (
		<div
			className={style.button}
			style={{
				width: props.width,
				height: props.height,
				marginTop: props.marginTop,
				borderRadius: props.borderRadius,
				display: props.display,
				alignItems: props.alignItems,
				justifyContent: props.justifyContent,
				backgroundColor: props.backgroundColor,
				boxShadow: props.boxShadow,
				cursor: props.cursor,
			}}
			onClick={onClick}
		>
			{value}
		</div>
	);
};

export default Button;
