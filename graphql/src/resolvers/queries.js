const Query = {
	users: ( parent, args, ctx, info ) => ctx.users,
	actors: ( parent, args, ctx, info ) => ctx.actors,
	movies: ( parent, args, ctx, info ) => ctx.movies,
};

export { Query as default };