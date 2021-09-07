import React, { useEffect, useState } from 'react';

import {
	LogoutIcon,
	UserCircleIcon,
} from '@heroicons/react/solid';

import { Button } from '../components';

type UserProps = {
	onLoad: () => Promise<any>;
	onLogout: () => void;
};

export const User = (props : UserProps) : React.ReactElement => {
	const {
		onLoad,
		onLogout,
	} = props;
	const [user, setUser] = useState<any>();

	useEffect(() => {
		onLoad().then(setUser);
	}, []);

	return (
		<>
			<div className="rounded-lg bg-white overflow-hidden shadow">
				<h2 className="sr-only" id="profile-overview-title">
					Profile Overview
				</h2>
				<div className="bg-white p-6">
					<div className="sm:flex sm:items-center sm:justify-between">
						<div className="sm:flex sm:space-x-5">
							<div className="flex-shrink-0">
								<img className="mx-auto h-20 w-20 rounded-full" src="https://essentialz.io/_next/image?url=%2Fassets%2Flogo.svg&w=128&q=75" alt="" />
							</div>
							<div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
								<p className="text-sm font-medium text-gray-600">Welcome back,</p>
								<p className="text-xl font-bold text-gray-900 sm:text-2xl">
									<UserCircleIcon className="w-7 float-left pt-1 mr-2 invisible sm:visible" />
									{user?.email}
								</p>
								<p className="text-sm font-medium text-gray-600">
									Role:
									{' '}
									{user?.role}
								</p>
							</div>
						</div>
						<div className="mt-5 flex justify-center sm:mt-0">
							<Button
								onClick={onLogout}
							>
								<LogoutIcon className="w-6 h-6 mr-2 pb-1" />
								Logout
							</Button>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
					<div className="px-6 py-5 text-sm font-medium text-center">
						<span className="text-gray-600">
							User is
						</span>
						{' '}
						<span className="text-gray-900">
							{user?.active ? 'active' : 'not active'}
						</span>
					</div>
					<div className="px-6 py-5 text-sm font-medium text-center">
						<span className="text-gray-600">Created at</span>
						{' '}
						<span className="text-gray-900">{new Date(user?.createdAt).toDateString()}</span>
					</div>
					<div className="px-6 py-5 text-sm font-medium text-center">
						<span className="text-gray-600">Updated at</span>
						{' '}
						<span className="text-gray-900">{new Date(user?.updatedAt).toDateString()}</span>
					</div>
				</div>
			</div>
			<img className="relative mx-auto top-52 h-36 w-36" src="https://essentialz.io/_next/image?url=%2Fassets%2Flogo.svg&w=128&q=75" alt="" />
		</>
	);
};
