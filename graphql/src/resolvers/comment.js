const Comment = {
	author: ( parent, args, ctx, info ) => {
		return ctx.db.users.find( ( user ) => parent.author === user.id );
	}
};

export { Comment as default };