import { GraphQLServer } from 'graphql-yoga';

const db_users = [
	{
		id: "1",
		name: "Neo",
		age: 25,
		avatar: "https://aws.com/bucket/xyx/image1.png",
		grades: [ 5.5, 7.8, 9.2, 4.5 ]
	},
	{
		id: "2",
		name: "Morphel",
		age: 32,
		avatar: "https://aws.com/bucket/xyx/image2.png",
		grades: [ 9.5, 9.8, 9.2, 9.5 ]
	},
	{
		id: "3",
		name: "Oráculo",
		age: 57,
		avatar: "https://aws.com/bucket/xyx/image3.png",
		grades: [ 10, 10, 10, 9.9 ]
	},
	{
		id: "4",
		name: "O Arquiteto",
		age: 87,
		avatar: "https://aws.com/bucket/xyx/image2.png",
		grades: [ 10, 10, 10, 9.9 ]
	},
];

const typeDefs = `#graphql
	type Query {
		getUsers: [UserType!]!
		getUserById (id: String!): UserType
	}

	type Mutation {
		createUser (user: UserInput): UserType!
	}

	input UserInput {
		name: String!
		age: Int!
	}

	type UserType {
		id: ID!
		name: String!
		age: Int!
		avatar: String
		grades: [Float]
	}
`;

const resolvers = {
	Query: {
		getUsers: ( parent, args, ctx, info ) => {
			return db_users;
		},
		getUserById: ( parent, args, ctx, info ) => {
			return db_users.find( ( user ) => user.id == args.id );
		}
	},
	Mutation: {
		createUser: ( parent, args, ctx, info ) => {
			const user = {
				id: db_users.length + 1,
				name: args.user.name,
				age: args.user.age,
				avatar: "no_image.jpsg",
				grades: [ 0, 0, 0, 0 ]
			};
			db_users.push( user );
			return user;
		}
	}
};

const server = new GraphQLServer( { typeDefs, resolvers } );
server.start( () => console.log( "Graphql Server is running..." ) );