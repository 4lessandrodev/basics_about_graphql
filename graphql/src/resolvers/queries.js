const Query = {
	users: ( parent, args, ctx, info ) => ctx.db.users,
	actors: ( parent, args, ctx, info ) => ctx.db.actors,
	movies: ( parent, args, ctx, info ) => ctx.db.movies,
};

export { Query as default };