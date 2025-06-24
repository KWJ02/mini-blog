import { CommonProps } from 'types/CommonProps';

interface TitleProps extends CommonProps {
	value: string;
}

const Title = ({ fontSize = '1.5rem', ...props }: TitleProps) => {
	return <div style={{ fontSize: fontSize, padding: props.padding }}>{props.value}</div>;
};

export default Title;
