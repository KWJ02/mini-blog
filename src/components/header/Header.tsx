import style from './Header.module.css';
import backButton from 'assets/images/icon_backButton.svg';
import iconUser from 'assets/images/icon_user.svg';
import Title from 'components/title';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // 항상 정의했던 고정된 위치로 이동
import { useNavigate } from 'react-router-dom'; // 히스토리 기반으로 이동 (뒤로가기)
import axiosInstance from 'utils/axiosInstace';
import errorHandler from 'utils/errorHandler';

interface HeaderProps {
	backBtn?: boolean;
	value: string;
	icon?: boolean;
}

interface UserInforms {
	userId: string;
	userName: string;
}

const Header = ({ ...props }: HeaderProps) => {
	const backBtnFlag = props.backBtn;
	const iconFlag = props.icon;
	const navigate = useNavigate();
	const [user, setUser] = useState<UserInforms | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const accordianRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		axiosInstance
			.get('/auth/check')
			.then((res) => {
				const user = res.data;
				setUser(user);
			})
			.catch((e) => {
				console.log(errorHandler(e));
			});

		const handleClickOutside = (event: MouseEvent) => {
			// ref.current가 존재하고, 클릭된 타겟이 그 내부에 포함되지 않는 경우
			if (accordianRef.current && !accordianRef.current.contains(event.target as Node)) {
				setIsOpen(false); // 닫기
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const logout = () => {
		axiosInstance
			.post('/auth/logout')
			.then(() => {
				setIsOpen(false);
			})
			.catch((e) => console.log(errorHandler(e)))
			.finally(() => {
				window.location.reload();
			});
	};

	return (
		<div className={style.root}>
			{backBtnFlag && (
				<div className={style.backBtnContainer}>
					<img
						onClick={() => navigate(-1)}
						className={style.backBtn}
						src={backButton}
						alt='back'
						width='24px'
					/>
				</div>
			)}
			<Title value={props.value} />
			{iconFlag && (
				<div className={style.iconContainer}>
					{user ? (
						<div className={style.userSection}>
							<div
								onClick={() => setIsOpen(!isOpen)}
								className={style.userName}
							>
								{user.userName} 님
							</div>
							{isOpen && (
								<div
									className={style.accordion}
									ref={accordianRef}
								>
									{/* 아코디언 컴포넌트 */}
									<div className={style.accordionItem}>마이페이지</div>
									<div
										className={style.accordionItem}
										onClick={logout}
									>
										로그아웃
									</div>
								</div>
							)}
						</div>
					) : (
						<Link
							to='/signIn'
							className={style.iconLink}
						>
							<img
								className={style.icon}
								src={iconUser}
								alt='user'
								width='24px'
							/>
						</Link>
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
