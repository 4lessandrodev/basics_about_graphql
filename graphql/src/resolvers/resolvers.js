import Query from './queries.js';
import Mutation from './mutation.js';
import Movie from './movie.js';
import Comment from './comment.js';
import Actor from './actor.js';
import User from './user.js';
import Subscription from './subscription.js';

const resolvers = {
	Query,
	Mutation,
	Movie,
	Comment,
	Actor,
	User,
	Subscription
};

export { resolvers as default };