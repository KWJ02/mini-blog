import { AxiosError } from 'axios';

const errorHandler = (error: AxiosError) => {
	const statusCode = error.status;
	const responseMessage = error.response?.data as { message: string };

	switch (statusCode) {
		case 409:
			return responseMessage.message;
	}
};

export default errorHandler;
