const Subscription = {
	createdUser: {
		subscribe ( parent, args, ctx, info ) {
			return ctx.pubsub.asyncIterator( 'createdUser' );
		}
	}
};

export { Subscription as default };