import style from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from 'route/RoutesConfig';
import ScrollToTop from 'utils/scrollToTop';

function App() {
	return (
		<div className={style.root}>
			<Router>
				<ScrollToTop />
				<RouteConfig />
			</Router>
		</div>
	);
}

export default App;
