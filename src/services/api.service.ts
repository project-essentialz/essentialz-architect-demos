// Architect client
import {
	client,
	ArchitectSchema,
} from './architect.service';

type Props = {
	id?: string;
	description?: any;
	onSuccess: (data : any) => any;
	onError: (error : any) => any;
};

export class ArchitectWrapper {
	constructor(private readonly project : keyof ArchitectSchema) {}

	read = (props : Props) : void => {
		client[this.project]
			.getAll()
			.then(props.onSuccess)
			.catch(props.onError);
	};

	delete = ({
		id = '',
		onSuccess,
		onError,
	} : Props) : void => {
		client[this.project]
			.delete(id)
			.then(onSuccess)
			.catch(onError);
	};

	create = (props : Props) : void => {
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
	} : Props) : void => {
		client[this.project]
			.update(id, { description })
			.then(onSuccess)
			.catch(onError);
	};
}
