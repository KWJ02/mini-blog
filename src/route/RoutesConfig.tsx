import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SignIn from 'pages/signIn/SignIn';
import SignUp from 'pages/signUp/SignUp';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/signIn"
				element={<SignIn />}
			/>
			<Route
				path="/signUp"
				element={<SignUp />}
			/>
		</Routes>
	);
};

export default RoutesConfig;
