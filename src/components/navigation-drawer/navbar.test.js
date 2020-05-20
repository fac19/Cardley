import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

test('navbar opens, then menu items appear', () => {
	render(<Navbar />);
	const element = screen.getByTestId('hamburger');
	fireEvent.click(element);

	screen.getAllByText('Home');
	screen.getAllByText('Custom Practice');
	screen.getAllByText('Practice');
	screen.getAllByText('View Profile');
});

// test('navbar header corresponds to clicked page', () => {
// 	render(<Navbar />);
// 	const element = screen.getByTestId('hamburger');
// 	fireEvent.click(element);
// 	const customPractice = screen.getByText('Custom Practice');
// 	fireEvent.click(customPractice);
// });

// test('navbar header corresponds to clicked page', () => {});

// test('navbar header corresponds to clicked page', () => {});

// test('navbar header corresponds to clicked page', () => {});

// test('navbar header corresponds to clicked page', () => {});

// test('navbar header corresponds to clicked page', () => {});
