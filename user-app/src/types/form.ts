import {
	ArchitectAuthProviders,
} from 'architect-sdk/lib/core/auth';

export type FormProps = {
	onSetForm: () => void;
	onSubmit: (
		email: string,
		password: string,
		provider: ArchitectAuthProviders,
	) => void;
};
