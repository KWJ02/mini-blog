interface TitleProps {
	title: string;
	fontSize?: string;
}

const Title = ({ fontSize = '1.5rem', ...props }: TitleProps) => {
	return <div style={{ fontSize: fontSize }}>{props.title}</div>;
};

export default Title;
