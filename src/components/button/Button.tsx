import { CommonProps } from 'types/CommonProps';

interface ButtonProps extends CommonProps {
	value: string;
	onClick?: () => void;
}

const Button = ({ ...props }: ButtonProps) => {
	return (
		<div
			style={{
				width: props.width,
				height: props.height,
				borderRadius: props.borderRadius,
				padding: props.padding,
				margin: props.margin,
			}}
			onClick={props.onClick}
		>
			{props.value}
		</div>
	);
};

export default Button;
