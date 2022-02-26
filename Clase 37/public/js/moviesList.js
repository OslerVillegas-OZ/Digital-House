let body = document.querySelector('body');

let h1 = document.querySelector('h1');

if (confirm('Desea modo oscuro')) {
	body.style.backgroundColor = '#7F7F7F'
	body.classList.add('fondoMoviesList');
}

h1.innerText = 'LISTADO DE PELICULAS';

h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.fontSize = '20px';