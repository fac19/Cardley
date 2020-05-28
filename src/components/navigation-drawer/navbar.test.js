import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './navbar';

test('navbar opens, then menu items appear', () => {
	render(<Navbar />);
	const element = screen.getByTestId('hamburger');
	fireEvent.click(element);

	screen.getAllByText('Log in');
	screen.getAllByText('Sign up');
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
