const users = [
	{
		id: "82230174-a9ff-4bb4-a996-bf859e6fb6bf",
		name: "John",
		favoriteMovies: [ "87562ba7-d8b0-4f29-ad87-513393287848" ]
	}
];

const actors = [
	{
		id: "dc2196ad-50ce-41c3-a4b8-864f8516f50e",
		name: "Keano Reeves",
		age: 27,
		gender: "M",
		movies: [ "87562ba7-d8b0-4f29-ad87-513393287848" ]
	}
];

const movies = [
	{
		id: "87562ba7-d8b0-4f29-ad87-513393287848",
		name: "Matrix",
		year: 1999,
		rate: 5,
		comments: [ "8b497bc9-1ff4-4e8a-9648-4244e832f16c" ]
	}
];

const comments = [
	{
		id: "8b497bc9-1ff4-4e8a-9648-4244e832f16c",
		author: "82230174-a9ff-4bb4-a996-bf859e6fb6bf",
		text: "Good movie"
	}
];

const db = { users, actors, comments, movies };
export { db as default };