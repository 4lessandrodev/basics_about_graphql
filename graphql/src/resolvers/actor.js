const Actor = {
	movies: ( parent, args, ctx, info ) => {
		const moviesActor = ctx.movies
			.filter( ( movie ) => parent.movies
				.includes( movie.id ) );
		return moviesActor;
	}
};

export { Actor as default };