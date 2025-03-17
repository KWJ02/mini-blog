import style from './Header.module.css';
import backButton from 'assets/icon_backButton.svg';
import user from 'assets/icon_user.svg';
import Title from 'components/title/Title';
import { Link } from 'react-router-dom'; // 항상 정의했던 고정된 위치로 이동
import { useNavigate } from 'react-router-dom'; // 히스토리 기반으로 이동 (뒤로가기)

interface HeaderProps {
	backBtn?: boolean;
	value: string;
	icon?: boolean;
}

const Header = ({ ...props }: HeaderProps) => {
	const backBtnFlag = props.backBtn;
	const iconFlag = props.icon;
	const navigate = useNavigate();

	return (
		<div className={style.root}>
			{backBtnFlag && (
				<div className={style.backBtnContainer}>
					<img
						onClick={() => navigate(-1)}
						className={style.backBtn}
						src={backButton}
						alt="back"
						width="24px"
					/>
				</div>
			)}
			<Title value={props.value} />
			{iconFlag && (
				<div className={style.iconContainer}>
					<Link to="/signIn">
						<img
							className={style.icon}
							src={user}
							alt="user"
							width="24px"
						/>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Header;
