import { AxiosError } from 'axios';

/**
 * 요청 실패 시 axios error 객체에 담긴 message 반환
 * @param error
 * @returns 에러 상태 코드에 따른 에러 메시지 반환
 */
const errorHandler = (error: AxiosError) => {
	const statusCode = error.status;
	const responseMessage = error.response?.data as { message: string };

	switch (statusCode) {
		case 401:
			return responseMessage.message;
		case 404:
			return responseMessage.message;
		case 409:
			return responseMessage.message;
		case 500:
			return 'Server Error';
	}
};

export default errorHandler;
