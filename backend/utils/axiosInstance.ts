import axios from 'axios';

const baseUrl = process.env.REACT_APP_API;

const axiosInstance = axios.create({
	baseURL: baseUrl,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;
