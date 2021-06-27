const Movie = {
	comments: ( parent, args, ctx, info ) => {
		const postComments = ctx.comments.filter(
			( comment ) => parent.comments.includes( comment.id ) );
		return postComments;
	}
};

export { Movie as default };