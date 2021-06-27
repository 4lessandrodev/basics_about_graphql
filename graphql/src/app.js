import { GraphQLServer } from 'graphql-yoga';
import db from './db/index.js';
import resolvers from './resolvers/resolvers.js';

const server = new GraphQLServer(
	{
		resolvers,
		typeDefs: './src/index.graphql',
		context: db
	}
);
server.start( () => console.log( "Server running..." ) );