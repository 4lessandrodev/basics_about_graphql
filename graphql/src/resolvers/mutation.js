import faker from 'faker';
const Mutation = {
	createUser: ( parent, args, ctx, info ) => {
		const user = {
			id: faker.datatype.uuid(),
			name: args.createUserInput.name,
			favoriteMovies: []
		};
		ctx.users.push( user );
		return user;
	}
};

export { Mutation as default };