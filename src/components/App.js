import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import './App.css';

import Navbar from './navigation-drawer/navbar';

import SignupPage from './pages/signup/signup';
import LoginPage from './pages/Login/login';
import Landing from './pages/Home/landing';
import UserMenu from './pages/Home/userMenu';
import ViewProfile from './pages/ViewProfile/ViewProfile';
import CustomPractice from './pages/CustomPractice/customPractice';
import YourDecks from './pages/YourDecks/yourDecks';
import Practice from './pages/Practice/practice';

function App() {
	const [currentPage, setCurrentPage] = React.useState('CARDLEY');

	// setCurrentPage('test')
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Navbar
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</header>
				<Switch>
					<Route exact path="/signup" component={SignupPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/landing" component={Landing} />
					<ProtectedRoute path="/home" component={UserMenu} />
					<ProtectedRoute path="/practice" component={Practice} />
					<ProtectedRoute
						path="/custom-practice"
						component={CustomPractice}
					/>
					<ProtectedRoute
						exact
						path="/view-profile"
						component={ViewProfile}
					/>
					<ProtectedRoute
						exact
						path="/your-decks"
						component={YourDecks}
					/>
					<Route path="*" render={() => <Redirect to="/" />} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
