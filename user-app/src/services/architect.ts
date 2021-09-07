import architect from 'architect-sdk';

export const client = architect({
	baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? 'https://architect_demo.essentialz.cloud',
});

export default client;
