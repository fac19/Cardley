import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

test('navbar opens, then menu items appear', () => {
	// first get navbar button: screen.getBy ...
	render(<Navbar />);
	const element = screen.getByTestId('hamburger');
	// then click button navButton.fireEvent.click ??
	fireEvent.click(element);
	// then screen.getByText 'Home' && screen.getByText 'something else'
	screen.getAllByText('Home');
	screen.getAllByText('Custom Practice');
	screen.getAllByText('Practice');
	screen.getAllByText('View Profile');
});

// test('navbar header corresponds to clicked page', () => {});
