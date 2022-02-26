let main = document.querySelector('main')

let h2 = document.querySelector('h2')

let anchors = document.querySelectorAll('a')

let paragraphs = document.querySelectorAll('p')

let body = document.querySelector('body')


let name = prompt('Ingrese su nombre');

console.log(name)

if (name != null && name != '') {
		h2.innerText += name;
} else {
	h2.innerText += 'Invitado'
}


h2.style.textTransform = 'uppercase';
/*
h2.forEach(h => {
	if (name != null && name != '') {
		h.innerText += name;
	
	} else {
		h.innerText += 'Invitado'
	}
})

h2.forEach( h => {
	h.style.textTransform = 'uppercase';
})
*/


anchors.forEach( a => {
	a.style.color = '#E51B3E';
})



confirm('Desea colocar un fondo de pantalla?') ? body.classList.add('fondo') : null;


document.querySelectorAll('p:nth-child(2n)').forEach( p => { p.classList.add('destacadoPar')})


document.querySelectorAll('p:nth-child(2n+1)').forEach( p => { p.classList.add('destacadoImpar')})

main.style.display = 'block'