import { CSSProperties } from 'react';
import Layout from './Layout';

interface OverlayProps {
	opacity?: CSSProperties['opacity'];
}

const Overlay = ({ opacity = 0.6 }: OverlayProps) => {
	return (
		<Layout
			position='absolute'
			width='100%'
			height='100vh'
			backgroundColor='black'
			opacity={opacity}
		/>
	);
};

export default Overlay;
