const fs = require('fs');
//*
let arrJS = {
	file: 'tasks.json',
	read: function() {
		return JSON.parse(fs.readFileSync(this.file,'utf-8'));
	},
}




let newTask = {
	titulo: 'new task 01', 
	estado: 'terminado'
}

//console.log(JSON.stringify(newTask))

let arrTemp = JSON.parse(fs.readFileSync('./tasks.json', 'utf-8'));
arrTemp.push(newTask)
console.log(arrTemp)

//*
fs.writeFile('./tasks.json', JSON.stringify(arrTemp, null, 2), function(err) {
	if (err) return console.error(err);
	console.log('File Written')
});

