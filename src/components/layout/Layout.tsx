import React from 'react';
import { CommonProps } from 'types/CommonProps';

interface LayoutProps extends CommonProps {
	children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
	return (
		<div
			style={{
				display: props.display,
				flexDirection: props.flexDirection,
				alignItems: props.alignItems,
				justifyContent: props.justifyContent,
				gap: props.gap,
				maxWidth: props.maxWidth,
				margin: props.margin,
				padding: props.padding,
			}}
		>
			{children}
		</div>
	);
};

export default Layout;
