import style from './Modal.module.css';
import Layout from 'components/layout/Layout';
import Overlay from 'components/layout/Overlay';
import Button from 'components/button/Button';

interface ModalProps {
	display: boolean;
	onConfirm?: () => void;
	onClick?: () => void;
	children?: React.ReactNode;
}

const Modal = ({ onConfirm, onClick, children, ...props }: ModalProps) => {
	return (
		<Layout
			display={props.display ? 'block' : 'none'}
			position='absolute'
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
