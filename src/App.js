import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import SearchPage from './containers/SearchPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />

				<Switch>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route path='/' exact>
						<Home />
					</Route>
				</Switch>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
