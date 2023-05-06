import { Client as Appwrite, Databases, Account } from 'appwrite';

const server = {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: '6456bbf463ac75114384'
};

const client = new Appwrite();
const account = new Account(client);
client.setEndpoint(server.endpoint).setProject(server.project);
const sdk = { account };
export { sdk, server };