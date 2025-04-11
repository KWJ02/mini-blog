import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SignIn from 'pages/signIn/SignIn';
import SignUp from 'pages/signUp/SignUp';
import NewPost from 'pages/post/new';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/signIn'
				element={<SignIn />}
			/>
			<Route
				path='/signUp'
				element={<SignUp />}
			/>
			<Route
				path='/new'
				element={<NewPost />}
			/>
		</Routes>
	);
};

export default RoutesConfig;
