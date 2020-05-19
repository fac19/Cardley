import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './navigation-drawer/navbar';

import SignupPage from './signup/signup';
import LoginPage from './Login/login';
import Home from './Home/home';
import ViewProfile from './ViewProfile/ViewProfile';
import CustomPractice from './CustomPractice/customPractice';
import YourDecks from './YourDecks/yourDecks';
import Practice from './Practice/practice';

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
					<Route exact path="/home" component={Home} />
					<Route exact path="/practice" component={Practice} />
					<Route
						exact
						path="/custom-practice"
						component={CustomPractice}
					/>
					<Route exact path="/view-profile" component={ViewProfile} />
					<Route exact path="/your-decks" component={YourDecks} />
					<Route path="*" render={() => <Redirect to="/" />} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
