import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// Service
import client from '../services/architect.service';

// Routes
import { routes } from '../routes';

type Props = RouteProps & {
	Component: React.FC;
}

export const ProtectedRoute = ({ Component, ...rest }: Props) => {
	return (
		<Route {...rest} render={() => (client.isAuthenticated() ? <Component /> : <Redirect to={routes.home} />)} />
	);
};
