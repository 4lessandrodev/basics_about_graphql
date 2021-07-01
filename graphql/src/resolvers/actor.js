const Actor = {
	movies: ( parent, args, ctx, info ) => {
		const moviesActor = ctx.db.movies
			.filter( ( movie ) => parent.movies
				.includes( movie.id ) );
		return moviesActor;
	}
};

export { Actor as default };