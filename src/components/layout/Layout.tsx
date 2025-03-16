import React from 'react';
import { CommonProps } from 'types/CommonProps';

interface LayoutProps extends CommonProps {
	children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
	return <>{children}</>;
};

export default Layout;
