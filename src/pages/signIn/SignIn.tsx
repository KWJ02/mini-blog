import style from './SignIn.module.css';
import Title from 'components/title/Title';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';
import axiosInstance from 'utils/axiosInstace';

const SignIn = () => {
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');

	const idInput = (e: ChangeEvent<HTMLInputElement>) => {
		// set 내부 trim 적용 -> 공백 사용 불가
		setUserId(e.target.value.trim());
	};

	const pwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setUserPw(e.target.value.trim());
	};

	const login = () => {
		axiosInstance
			.post('/auth/signIn', {
				userId: userId,
				userPw: userPw,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((e) => console.error(e));
	};

	return (
		<div className={style.root}>
			<div className={style.signInContainer}>
				<Title value='Mini' />
				<Input
					type='text'
					value={userId}
					onChange={idInput}
					marginTop='80px'
					maxLength={20}
					label='User Account'
					placeholder='아이디를 입력해주세요.'
				/>
				<Input
					type='password'
					value={userPw}
					onChange={pwInput}
					marginTop='8px'
					maxLength={20}
					label='Password'
					placeholder='비밀번호를 입력해주세요.'
				/>
				<div className={style.signUpSection}>
					<div className={style.signUpBtnBackground}>
						<Link
							to='/signUp'
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<span className={style.signUpBtn}>Create an Account</span>
						</Link>
					</div>
				</div>

				<Button
					value='Sign In'
					width='100%'
					height='40px'
					display='flex'
					alignItems='center'
					justifyContent='center'
					backgroundColor='ivory'
					borderRadius='12px'
					boxShadow='0 2px 4px rgba(0,0,0,0.1)'
					cursor='pointer'
					marginTop='auto'
					onClick={login}
				/>
			</div>
		</div>
	);
};

export default SignIn;
