const User = {
	favoriteMovies: ( parent, args, ctx, info ) => {
		const userFavoriteMovies = ctx.movies.filter(
			( movie ) => parent.favoriteMovies.includes( movie.id )
		);
		return userFavoriteMovies;
	}
};

export { User as default };