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
// import CustomPractice from './pages/Practice/CustomPractice/customPractice';
import YourDecks from './pages/YourDecks/yourDecks';
import PublicDecks from './pages/PublicDecks/publicDecks';
import Practice from './pages/Practice/practice';
import InDeckCards from './pages/InDeckCards/InDeckCards';
import authorized from '../utils/authoriseUser/authorised';

function HomePageSelector() {
	return authorized() ? <UserMenu /> : <Landing />;
}

function App() {
	const [currentPage, setCurrentPage] = React.useState('CARDLEY');
	const [viewingDeck, setViewingDeck] = React.useState('outer state');

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
					<Route exact path="/" component={HomePageSelector} />

					{/* <ProtectedRoute
						path="/custom-practice"
						component={() => (
							<CustomPractice />
							// <Practice
							// 	deckToPractice={[
							// 		{
							// 			deck_name: 'French Vocab',
							// 			deck_id: 1,
							// 		},
							// 		{
							// 			deck_name: 'ES6 APIs',
							// 			deck_id: 2,
							// 		},
							// 	]}
							// />
						)}
					/> */}
					<ProtectedRoute path="/practice" component={Practice} />
					<ProtectedRoute
						path="/view-profile"
						component={ViewProfile}
					/>
					<ProtectedRoute
						path="/your-decks"
						component={() => (
							<YourDecks setViewingDeck={setViewingDeck} />
						)}
					/>
					<ProtectedRoute
						path="/public-decks"
						component={PublicDecks}
					/>
					<ProtectedRoute
						path="/cards-in-deck"
						component={() => (
							<InDeckCards viewingDeck={viewingDeck} />
						)}
					/>
					<Route path="*" render={() => <Redirect to="/" />} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
