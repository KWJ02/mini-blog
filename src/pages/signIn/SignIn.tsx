import style from './SignIn.module.css';
import Title from 'components/title/Title';
import Input from 'components/input/Input';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react';

const SignIn = () => {
	const [id, setId] = useState<string>('');
	const [pw, setPw] = useState<string>('');

	const idInput = (e: ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};

	const pwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setPw(e.target.value);
	};

	return (
		<div className={style.root}>
			<div className={style.signInContainer}>
				<Title title="Mini Blog" />
				<Input
					type="text"
					value={id}
					onChange={idInput}
					marginTop="24px"
					maxLength={20}
					label="User Account"
				/>
				<Input
					type="password"
					value={pw}
					onChange={pwInput}
					marginTop="8px"
					maxLength={20}
					label="Password"
				/>
				<div className={style.signUpSection}>
					<div className={style.signUpBtnBackground}>
						<Link
							to="/signUp"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<span className={style.signUpBtn}>Create an Account</span>
						</Link>
					</div>
				</div>

				<Button value="Login" />
			</div>
		</div>
	);
};

export default SignIn;
