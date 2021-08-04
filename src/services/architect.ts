import architect, { ArchitectResource } from "architect-sdk";

type ArchitectSchema = {
    tasks: ArchitectResource;
}

const client = architect<ArchitectSchema>({
    baseUrl: process.env.REACT_APP_ARCHITECT_PROJECT_URL ?? '',
});

export default client;