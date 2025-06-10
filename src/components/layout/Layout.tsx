import React from 'react';
import { CommonProps } from 'types/CommonProps';

interface LayoutProps extends CommonProps {
	children?: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
	return (
		<div
			style={{
				width: props.width,
				height: props.height,
				position: props.position,
				display: props.display,
				flexDirection: props.flexDirection,
				alignItems: props.alignItems,
				justifyContent: props.justifyContent,
				flex: props.flex,
				gap: props.gap,
				maxWidth: props.maxWidth,
				minWidth: props.minWidth,
				margin: props.margin,
				padding: props.padding,
				zIndex: props.zIndex,
				opacity: props.opacity,
				backgroundColor: props.backgroundColor,
			}}
		>
			{children}
		</div>
	);
};

export default Layout;
