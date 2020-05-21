import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import './App.css';

import Navbar from './navigation-drawer/navbar';

import SignupPage from './pages/signup/signup';
import LoginPage from './pages/Login/login';
import Home from './pages/Home/home';
import LoggedInHome from './pages/Home/loggedInHome';
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
					{/* do we need a ternary to determine which home route (which checks if user is logged in)? */}
					<Route exact path="/home" component={Home} />
					<ProtectedRoute path="/home" component={LoggedInHome} />
					{/* should we create a sepearte route for loggedInHome?  */}
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
