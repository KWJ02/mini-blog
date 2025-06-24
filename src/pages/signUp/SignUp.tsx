import style from './SignUp.module.css';
import Title from 'components/title';
import Input from 'components/input';
import Button from 'components/button';
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'utils/axiosInstace';
import errorHandler from 'utils/errorHandler';
import { Modal } from 'components/modal';
import Card from 'components/card';
import Layout from 'components/layout';

interface FormData {
	userId: string;
	userPw: string;
	confirmPw: string;
	userName: string;
}

interface FormError {
	idError: boolean;
	pwError: boolean;
	nameError: boolean;
}

interface FormErrorMessage {
	idErrorMessage: string;
	pwErrorMessage: string;
	nameErrorMessage: string;
}

const SignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<FormData>({
		userId: '',
		userPw: '',
		confirmPw: '',
		userName: '',
	});

	const [error, setError] = useState<FormError>({
		idError: false,
		pwError: false,
		nameError: false,
	});

	const [errorMessage, setErrorMessage] = useState<FormErrorMessage>({
		idErrorMessage: '',
		pwErrorMessage: '',
		nameErrorMessage: '',
	});

	const [isActiveModal, setIsActiveModal] = useState<boolean>(false);
	const [sucessMessage, setSucessMessage] = useState<string>('');

	/**
	 * 입력값을 검증하는 함수
	 * @param args FormData 타입의 입력값 객체
	 * @returns void
	 */
	const checkInputValid = (args: FormData): boolean => {
		const idRegex = /^[A-Za-z0-9]+$/;
		const pwRegex = /^[A-Za-z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/-]+$/;
		const nameRegex = /^[A-Za-z0-9가-힣]+$/;

		let valid = true;
		// 아이디 형식에 안맞거나, 길이가 5 이하인 경우 무효
		if (!idRegex.test(args.userId) || args.userId.length < 6) {
			//                  { idError: true, ...prev }로 하면
			//                  객체의 덮어쓰는 방식에 따라 idError가 기존 prev값으로 덮어씌워져 버려 값이 변경되지 않음
			setError((prev) => ({ ...prev, idError: true }));
			setErrorMessage((prev) => ({ ...prev, idErrorMessage: '영어, 숫자로 이루어진 6자 이상을 입력해주세요.' }));
			valid = false;
		}
		// 영숫자 및 특수문자 이외, 7글자 이하면 무효
		if (!pwRegex.test(args.userPw) || args.userPw.length < 8) {
			setError((prev) => ({ ...prev, pwError: true }));
			setErrorMessage((prev) => ({
				...prev,
				pwErrorMessage: '영어와 숫자, 특수문자로 이루어진 8글자 이상을 입력해주세요.',
			}));
			valid = false;
		}
		// 영숫자 및 한글 이외의 글자로 이루어져 있거나, 1글자 이하일 경우 무효
		if (!nameRegex.test(args.userName) || args.userName.length < 2) {
			setError((prev) => ({ ...prev, nameError: true }));

			setErrorMessage((prev) => ({
				...prev,
				nameErrorMessage: '두 글자 이상 입력해주세요.',
			}));
			valid = false;
		}

		return valid;
	};

	const userIdInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, userId: e.target.value.trim() }));
	};

	const userPwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, userPw: e.target.value.trim() }));
	};

	const confirmPwInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, confirmPw: e.target.value.trim() }));
	};

	const userNameInput = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, userName: e.target.value.trim() }));
	};

	// 엔터키도 연동하기
	const signUp = () => {
		const isValid = checkInputValid(formData);

		if (isValid) {
			axiosInstance
				.post('/auth/signUp', {
					userId: formData.userId,
					userPw: formData.userPw,
					userName: formData.userName,
				})
				.then((response) => {
					setSucessMessage(response.data.message);
					setIsActiveModal(true);
				})
				.catch((e) => {
					const result = errorHandler(e) || '';
					setError((prev) => ({ ...prev, idError: true }));
					setErrorMessage((prev) => ({ ...prev, idErrorMessage: result }));
				});
		}
	};

	return (
		<div className={style.root}>
			<Modal
				display={isActiveModal}
				onClick={() => {
					setIsActiveModal(false);
					navigate('/signIn', { replace: true });
				}}
			>
				<Layout
					flex={1}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<Card value={sucessMessage} />
				</Layout>
			</Modal>

			<div className={style.signUpContainer}>
				<Title value='Sign Up' />
				<Input
					type='text'
					value={formData.userId}
					onChange={userIdInput}
					marginTop='20px'
					maxLength={20}
					label='ID'
					placeholder='아이디를 입력해주세요.'
					error={error.idError}
					errorMessage={errorMessage.idErrorMessage}
					onFocus={() => setError((prev) => ({ ...prev, idError: false }))}
				/>

				<Input
					type='password'
					value={formData.userPw}
					onChange={userPwInput}
					marginTop='8px'
					maxLength={20}
					label='Password'
					placeholder='비밀번호를 입력해주세요.'
					error={error.pwError}
					errorMessage={errorMessage.pwErrorMessage}
					onFocus={() => setError((prev) => ({ ...prev, pwError: false }))}
				/>
				<Input
					type='password'
					value={formData.confirmPw}
					onChange={confirmPwInput}
					marginTop='8px'
					maxLength={20}
					label='Confirm Password'
					placeholder='비밀번호 확인'
					error={formData.userPw !== formData.confirmPw}
					errorMessage='입력한 비밀번호와 일치하지 않습니다.'
				/>
				<Input
					type='text'
					value={formData.userName}
					onChange={userNameInput}
					onKeyDown={(e) => {
						if (e.code === 'Enter') signUp();
					}}
					marginTop='8px'
					maxLength={30}
					label='UserName'
					placeholder='활동명을 입력해주세요.'
					error={error.nameError}
					errorMessage={errorMessage.nameErrorMessage}
					onFocus={() => setError((prev) => ({ ...prev, nameError: false }))}
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
					onClick={signUp}
				/>
			</div>
		</div>
	);
};

export default SignUp;
