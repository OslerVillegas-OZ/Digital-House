let actionMovies = ['End Game', 'Iron Man 3', 'Captian America'];

for(movie of actionMovies){
	console.log('Great movie ' + movie);
}

let anime = {
	name: 'Haikyuu',
	genre: 'Sports',
	type: 'volleyball',
} 

for (key in anime) {
	console.log(key + ': ' + anime[key]);
}