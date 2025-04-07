import { CSSProperties } from 'react';
import style from './Card.module.css';

interface CardProps {
	title?: string;
	value: string;
}

interface CardCSSProps {
	flex?: CSSProperties['flex'];
}

const Card = ({ ...props }: CardProps & CardCSSProps) => {
	return (
		<div
			className={style.root}
			style={{
				flex: props.flex,
			}}
		>
			{props.title && <h1>{props.title}</h1>}
			<div>{props.value}</div>
		</div>
	);
};

export default Card;
