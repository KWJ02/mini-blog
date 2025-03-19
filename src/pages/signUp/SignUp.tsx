import style from './SignUp.module.css';
import Title from 'components/title/Title';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import { useState, ChangeEvent, useMemo } from 'react';
import axiosInstance from 'utils/axiosInstace';

const SignUp = () => {
	const [userId, setUserId] = useState<string>('');
	const [userPw, setUserPw] = useState<string>('');
	const [confirmPw, setConfirmPw] = useState<string>('');
	const [userName, setUserName] = useState<string>('');

	const checkInputValid = (userId: string, userPw: string, confirmPw: string, userName: string): boolean => {
		const idRegex = /^[A-Za-z0-9]+$/;
		const pwRegex = /^[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/-]+$/;
		const nameRegex = /^[A-Za-z0-9가-힣]+$/;
		// 아이디 형식에 안맞거나, 길이가 5 이하인 경우 무효
		if (!idRegex.test(userId) || userId.length < 6) return false;
		// 영숫자 및 특수문자 이외, 7글자 이하거나 confirmPw와 다르면 무효
		if (!pwRegex.test(userPw) || userPw.length < 8 || userPw !== confirmPw) return false;
		// 영숫자 및 한글 이외의 글자로 이루어져 있거나, 1글자 이하일 경우 무효
		if (!nameRegex.test(userName) || userName.length < 2) return false;

		return true;
	};

	const isDisabled = useMemo(() => {
		// valid 값이 유효하면 disabled는 false가 되어야 하므로 부정값 리턴
		return !checkInputValid(userId, userPw, confirmPw, userName);
	}, [userId, userPw, confirmPw, userName]);

	const userIdInput = (e: ChangeEvent<HTMLInputElement>) => {
		setUserId(e.target.value);
	};

	const userPwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setUserPw(e.target.value);
	};

	const confirmPwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPw(e.target.value);
	};

	const userNameInput = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
	};

	const signUp = () => {
		axiosInstance
			.post('/auth/signUp', {
				userId: userId,
				userPw: userPw,
				userName: userName,
			})
			.then((response) => console.log(response.data))
			.catch((e) => console.error(e));
	};

	return (
		<>
			<div className={style.root}>
				<div className={style.signUpContainer}>
					<Title value='Sign Up' />
					<Input
						type='text'
						value={userId}
						onChange={userIdInput}
						marginTop='20px'
						maxLength={20}
						label='ID'
						placeholder='아이디를 입력해주세요.'
					/>
					<Input
						type='password'
						value={userPw}
						onChange={userPwInput}
						marginTop='8px'
						maxLength={20}
						label='Password'
						placeholder='비밀번호를 입력해주세요.'
					/>
					<Input
						type='password'
						value={confirmPw}
						onChange={confirmPwInput}
						marginTop='8px'
						maxLength={20}
						label='Confirm Password'
						placeholder='비밀번호 확인'
					/>
					<Input
						type='text'
						value={userName}
						onChange={userNameInput}
						marginTop='8px'
						maxLength={30}
						label='UserName'
						placeholder='활동명을 입력해주세요.'
					/>

					<Button
						value='Sign Up'
						width='100%'
						height='40px'
						display='flex'
						alignItems='center'
						justifyContent='center'
						backgroundColor='ivory'
						borderRadius='12px'
						boxShadow='0 2px 4px rgba(0,0,0,0.1)'
						cursor='pointer'
						marginTop='24px'
						disabled={isDisabled}
						onClick={signUp}
					/>
				</div>
			</div>
		</>
	);
};

export default SignUp;
