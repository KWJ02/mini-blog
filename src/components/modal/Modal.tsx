import style from './Modal.module.css';
import Layout from 'components/layout/Layout';
import Overlay from 'components/layout/Overlay';
import Button from 'components/button/Button';
import { useEffect } from 'react';

interface ModalProps {
	display: boolean;
	onConfirm?: () => void;
	onClick?: () => void;
	children?: React.ReactNode;
}

const Modal = ({ onConfirm, onClick, children, ...props }: ModalProps) => {
	useEffect(() => {
		if (props.display) {
			// 화면 튀는 문제 => box-sizing으로 해결
			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = 'hidden';
			document.body.style.boxSizing = 'border-box';
			document.body.style.paddingRight = `${scrollBarWidth}px`;
		} else {
			document.body.style.overflow = '';
			document.body.style.boxSizing = '';
			document.body.style.paddingRight = '';
		}
	}, [props.display]);

	return (
		<Layout
			display={props.display ? 'block' : 'none'}
			position='fixed'
			width='100%'
			height='100vh'
			zIndex={100}
		>
			<Overlay />
			<Layout
				position='absolute'
				width='100%'
				height='100vh'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<div className={style.modalContainer}>
					{children}
					<div className={style.modalBtnSection}>
						<Button
							value='확인'
							width='100%'
							height='40px'
							backgroundColor='ivory'
							borderRadius='12px'
							boxShadow='0 2px 4px rgba(0,0,0,0.1)'
							cursor='pointer'
							onClick={onClick}
						/>
					</div>
				</div>
			</Layout>
		</Layout>
	);
};

export { Modal };
