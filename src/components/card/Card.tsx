import style from './Card.module.css';

interface CardProps {
	title?: string;
	value: string;
}

const Card = ({ ...props }: CardProps) => {
	return (
		<div className={style.root}>
			{props.title && <h1>{props.title}</h1>}
			<div>{props.value}</div>
		</div>
	);
};

export default Card;
