import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db/index.js';
import resolvers from './resolvers/resolvers.js';

const pubsub = new PubSub();

const server = new GraphQLServer(
	{
		resolvers,
		typeDefs: './src/index.graphql',
		context: { db, pubsub }
	}
);
server.start( () => console.log( "Server running..." ) );