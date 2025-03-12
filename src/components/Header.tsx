import style from './Header.module.css';
import backButton from 'assets/icon_backButton.svg';
import user from 'assets/icon_user.svg';

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
			{backBtnFlag && (
				<div className={style.backBtnContainer}>
					<img
						className={style.backBtn}
						src={backButton}
						alt="back"
						width="24px"
					/>
				</div>
			)}
			<div className={style.title}>{props.title}</div>
			{iconFlag && (
				<div className={style.iconContainer}>
					<img
						className={style.icon}
						src={user}
						alt="user"
						width="24px"
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
