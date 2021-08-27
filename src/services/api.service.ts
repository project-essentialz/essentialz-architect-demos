// Architect client
import {
	client,
	ArchitectSchema,
} from './architect.service';

type CRUDServiceProps = {
	id?: string;
	description?: any;
	onSuccess: (data : any) => any;
	onError: (error : any) => any;
};

export class CRUDService {
	constructor(private readonly project : keyof ArchitectSchema) {}

	get = (props : CRUDServiceProps) : void => {
		client[this.project]
			.getAll()
			.then(props.onSuccess)
			.catch(props.onError);
	};

	delete = ({
		id = '',
		onSuccess,
		onError,
	} : CRUDServiceProps) : void => {
		client[this.project]
			.delete(id)
			.then(onSuccess)
			.catch(onError);
	};

	create = (props : CRUDServiceProps) : void => {
		client[this.project]
			.create({ description: props.description })
			.then(props.onSuccess)
			.catch(props.onError);
	};

	update = ({
		id = '',
		description,
		onSuccess,
		onError,
	} : CRUDServiceProps) : void => {
		client[this.project]
			.update(id, { description })
			.then(onSuccess)
			.catch(onError);
	};
}
