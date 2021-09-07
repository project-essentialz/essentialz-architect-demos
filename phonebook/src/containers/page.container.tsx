import React from 'react';
import { useHistory } from 'react-router';

// Components
import { Button } from '../components/button.component';

// Routes
import { routes } from '../routes';

// Service
import client from '../services/architect.service';

export const PageContainer: React.FC = (props) => {
	const { children } = props;
	const { push, location: { pathname } } = useHistory();

	const logout = () => {
		client.logout();
		push(routes.home);
	};

	return (
		<div className="container mx-auto py-16">
			{pathname !== routes.home && (
				<div className=" w-full px-5 py-3 fixed -top-0 flex flex-row-reverse">
					<Button onClick={logout}>Logout</Button>
				</div>
			)}
			{children}
		</div>
	);
};
