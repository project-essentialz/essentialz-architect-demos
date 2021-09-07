import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { routes } from '../routes';

// Service
import client from '../services/architect.service';

export const Home = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const loginUser = () => {
		setLoading(true);
		setError(null);
		client.login({	email: 'nikola@essentialz.io',	password: 'architectdemo2021' }, 'email')
			.then(() => history.push(routes.contactList))
			.catch(() => {
				setLoading(false);
				setError('Something went wrong. Please try again.');
			});
	};

	useEffect(() => {
		if (client.isAuthenticated()) {
			history.replace(routes.contactList);
		}
	}, [history]);

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img
					className="mx-auto h-12 w-auto"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
					alt="Workflow"
				/>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					<span className="font-medium text-indigo-600 hover:text-indigo-500">
						Login so you can start to use our services.
					</span>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<button
								type="button"
								disabled={loading}
								className={`
								w-full
								 flex 
								 justify-center 
								 py-2 px-4 
								 border 
								 border-transparent 
								 rounded-md 
								 shadow-sm 
								 text-sm 
								 font-medium 
								 text-white 
								 ${loading ? 'bg-gray-500' : 'bg-indigo-600'}
								 hover:bg-indigo-700 
								 focus:outline-none 
								 focus:ring-2 
								 focus:ring-offset-2 
								 focus:ring-indigo-500
								 `}
								onClick={loginUser}
							>
								Sign in
							</button>
						</div>

					</form>
				</div>
				<div className="w-full text-center text-red-600">{error}</div>
			</div>

		</div>
	);
};
