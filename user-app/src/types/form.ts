import {
	ArchitectAuthProviders,
} from 'architect-sdk/lib/core/auth';
import React from 'react';

export type FormProps = {
	onSetForm: () => void;
	onSubmit: (
		email: string,
		password: string,
		provider: ArchitectAuthProviders,
		e : React.FormEvent<HTMLFormElement>,
		setLoading: (value : boolean) => void,
	) => void;
};
