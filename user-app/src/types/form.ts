import {
	ArchitectAuthProviders, ArchitectCredentials,
} from 'architect-sdk/lib/core/auth';

export type FormProps = {
	onSetForm: () => void;
	onSubmit: (
		credentials: ArchitectCredentials,
		provider: ArchitectAuthProviders,
		setLoading: (value : boolean) => void,
	) => void;
};
