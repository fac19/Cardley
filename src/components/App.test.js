import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App components renders the navbar', () => {
	render(<App />);
	screen.getByTestId('hamburger');
	screen.getByText('CARDLEY');
});
