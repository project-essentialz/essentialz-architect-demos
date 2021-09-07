export type Contact = {
	id: string;
	pictureUrl: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	meta?: Record<string, any>
	updatedAt?: number;
	createdAt?: string;
}

export type ContactFormData = Contact & {file?: File}
