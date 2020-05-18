import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersistentDrawerLeft from './navigation-drawer/navbar';

function App() {
	const [currentPage, setCurrentPage] = React.useState('CARDLEY');
	// setCurrentPage('test')
	return (
		<div className="App">
			<header className="App-header">
				<PersistentDrawerLeft
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
