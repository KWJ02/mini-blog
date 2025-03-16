import style from './SignUp.module.css';
import Title from 'components/title/Title';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import Header from 'components/header/Header';
import { useState, ChangeEvent } from 'react';

const SignUp = () => {
	const [id, setId] = useState<string>('');
	const [pw, setPw] = useState<string>('');
	const [confirmPw, setConfirmPw] = useState<string>('');

	const idInput = (e: ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};

	const pwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPw(e.target.value);
	};

	const confirmPwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPw(e.target.value);
	};

	return (
		<>
			<Header
				title="Mini Blog"
				backBtn={true}
			/>
			<div className={style.root}>
				<div className={style.signUpContainer}>
					<Title title="Sign Up" />
					<Input
						type="text"
						value={id}
						onChange={idInput}
						marginTop="20px"
						maxLength={20}
						label="ID"
					/>
					<Input
						type="password"
						value={pw}
						onChange={pwInput}
						marginTop="8px"
						maxLength={20}
						label="Password"
					/>
					<Input
						type="password"
						value={confirmPw}
						onChange={confirmPwInput}
						marginTop="8px"
						maxLength={20}
						label="Confirm Password"
					/>

					<Button
						value="Sign Up"
						width="100%"
						height="40px"
						display="flex"
						alignItems="center"
						justifyContent="center"
						backgroundColor="ivory"
						borderRadius="12px"
						boxShadow="0 2px 4px rgba(0,0,0,0.1)"
						cursor="pointer"
						marginTop="auto"
					/>
				</div>
			</div>
		</>
	);
};

export default SignUp;
