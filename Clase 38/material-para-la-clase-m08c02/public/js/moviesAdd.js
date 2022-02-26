window.onload = function () {
	let titulo = document.querySelector('.moviesAddTitulo')
	let formulario = document.querySelector('#formulario');
	let article = document.querySelector('article');
	titulo.innerHTML = 'AGREGAR PELÍCULA';
	titulo.classList.add('titulo');
	article.classList.add('fondoTransparente');
	formulario.classList.add('fondoCRUD');


	let moviesAddTitle = document.querySelector('.moviesAddTitulo')

	moviesAddTitle.onmouseover = () => {
		let colorRandom = Math.floor(Math.random()*16777215).toString(16);
		moviesAddTitle.style.color = '#' + colorRandom;
	}


	let title = document.querySelector('#titulo');

	let secretArr = ['s', 'e', 'c', 'r', 'e', 't', 'o']

	let estadoSecreto = 0;

	title.addEventListener('keydown', (e) => {
		console.log(estadoSecreto)
		e.key == secretArr[estadoSecreto] ? estadoSecreto += 1 : estadoSecreto = 0;
		estadoSecreto == 7 ? alert('✨Secreto Magico!!✨') : null;
	})

}