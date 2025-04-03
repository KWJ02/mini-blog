import { AxiosError } from 'axios';

/**
 *
 * @param error
 * @returns 에러 상태 코드에 따른 에러 메세지 반환
 */
const errorHandler = (error: AxiosError) => {
	const statusCode = error.status;
	const responseMessage = error.response?.data as { message: string };

	switch (statusCode) {
		case 409:
			return responseMessage.message;
	}
};

export default errorHandler;
