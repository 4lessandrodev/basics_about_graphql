import faker from 'faker';
const Mutation = {
	createUser: ( parent, args, ctx, info ) => {
		const user = {
			id: faker.datatype.uuid(),
			name: args.createUserInput.name,
			favoriteMovies: []
		};
		ctx.db.users.push( user );
		ctx.pubsub.publish( 'createdUser', { createdUser: user } );
		return user;
	}
};

export { Mutation as default };