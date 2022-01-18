let cursada = {
	curso: 'Fullstack',
	turno: 'Morning',
	sede: 'Belgrano'
}

let student1 = {
	nombre: 'Naruto',
	email: 'naturo.uzumaki@email.com',
	...cursada
};

let student2 = {
	nombre: 'Saske',
	email: 'saske.uchija@email.com',
	...cursada
}

console.log(student1);
console.log(student2);

let actionMovies = ['End Game', 'Iron Man 3', 'Captian America'];
let comedyMovies = ['Home alome', 'Hangover'];

let movies = [...actionMovies, ...comedyMovies];

console.log(movies)

let genreComedy = {
	genreName: 'Comedy',
	popularity: 3
}

let homeAlone = {
	name: 'Home Alone',
	duration: 120,
	...genreComedy
}

let hangover = {
	name: 'Hangover',
	duration: 110,
	...genreComedy
}

console.log(homeAlone);
console.log(hangover);

function seenMovies(movieNames){
	movieNames.forEach(function(movie){
		console.log('El usuario ya vio ' + movie)
	});
};										


seenMovies(movies)