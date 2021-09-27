import client, { ArchitectResource } from "architect-sdk";

export type Contact = {
  id: string;
  pictureUrl: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type ArchitectSchema = {
  contact: ArchitectResource<Contact>;
};

const baseUrl = import.meta.env.VITE_BASE_URL;

if (typeof baseUrl !== "string") throw Error("Bad base url parameter");

export const architectSDK = client<ArchitectSchema>({
  baseUrl,
});
