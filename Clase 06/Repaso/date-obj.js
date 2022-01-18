let today = new Date();

console.log(today);
console.log(today.toUTCString());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getDate());

let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();

let months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul', 'August', 'September', 'October', 'November', 'December']

console.log('hoy es el ' + day + ' de ' + months[month] + ' de ' + year);

// Date
let fecha = new Date();

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+fecha.getDay()+' del mes '+fecha.getMonth()+' del año '+fecha.getFullYear())
