import style from './Header.module.css';

interface HeaderProps {
	backBtn?: boolean;
	title: string;
	icon?: boolean;
}

const Header = ({ ...props }: HeaderProps) => {
	const backBtnFlag = props.backBtn;
	const iconFlag = props.icon;

	return (
		<div className={style.root}>
			{backBtnFlag && <div className={style.backBtn}>뒤로가기</div>}
			<div className={style.title}>{props.title}</div>
			{iconFlag && <div className={style.icon}>아이콘</div>}
		</div>
	);
};

export default Header;
