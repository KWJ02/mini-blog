import { CSSProperties } from 'react';
import style from './Card.module.css';
import Title from 'components/title';

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
			{props.title && <Title value={props.title} />}
			<div>{props.value}</div>
		</div>
	);
};

export default Card;
