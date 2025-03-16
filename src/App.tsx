import style from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from '@/route/RoutesConfig';

function App() {
	return (
		<div className={style.root}>
			<Router>
				<RouteConfig />
			</Router>
		</div>
	);
}

export default App;
