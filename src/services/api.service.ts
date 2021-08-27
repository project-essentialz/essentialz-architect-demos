// Architect client
import {
	client,
	ArchitectSchema,
} from './architect.service';

type CRUDServiceProps = {
	id?: string;
	description?: string;
	successHandler: (data : any) => any;
	errorHandler: (error : any) => any;
};

export class CRUDService {
	constructor(private readonly project : keyof ArchitectSchema) {}

	get = (props : CRUDServiceProps) : void => {
		client[this.project]
			.getAll()
			.then(props.successHandler)
			.catch(props.errorHandler);
	};

	delete = ({
		id = '',
		successHandler,
		errorHandler,
	} : CRUDServiceProps) : void => {
		client[this.project]
			.delete(id)
			.then(successHandler)
			.catch(errorHandler);
	};

	create = (props : CRUDServiceProps) : void => {
		client[this.project]
			.create({ description: props.description })
			.then(props.successHandler)
			.catch(props.errorHandler);
	};

	update = ({
		id = '',
		description,
		successHandler,
		errorHandler,
	} : CRUDServiceProps) : void => {
		client[this.project]
			.update(id, { description })
			.then(successHandler)
			.catch(errorHandler);
	};
}
