export type Task = {
	id: string;
	description: string;
	updatedAt: number;
	createdAt: string;
};

export type Contact = {
	id?: string;
	pictureUrl: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	meta?: Record<string, any>
	updatedAt?: number;
	createdAt?: string;
};
