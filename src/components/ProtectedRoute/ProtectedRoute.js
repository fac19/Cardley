// component
// checkts whether user is logged in by calling util function authorised
// if they are logged in, let them access route by returning Route component which library provides
// if they aren't logged in, redirect them to login by returning Route component whic lib provdes but with different props
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import authorised from '../../utils/authorised';
import Home from '../Home/home';

export default function ProtectedRoute({ path, component }) {
	if (authorised()) {
		return <Route exact path={path} component={component} />;
	}
	return <Redirect to="/login" />;
}

ProtectedRoute.propTypes = {
	path: PropTypes.string,
	component: PropTypes.func,
};

ProtectedRoute.defaultProps = {
	path: '/',
	component: Home,
};
