let tasks = require('./taskList');

let arrArg = process.argv;
let arg = process.argv[2];

switch (arg){
	case ('list'):
		console.log('List of Tasks');
		console.log(tasks.read());
		break
		case ('helpMe'):
			console.log(tasks.helpMe());
			break
	case undefined:
		console.log('Warning - Need to pass and action')
		break
	case ('deleteLast'):
		console.log('Task Deleted')
		console.log(tasks.deleteLast());
		break
	case ('addTask'):
		if(arrArg[3] !== undefined && arrArg[4] !== undefined){
			tasks.addTask(arrArg[3], arrArg[4]);

			console.log('New Task Added');
			console.log('titulo:'+ arrArg[3] + ', estado:' + arrArg[4])
		} else {
			console.log('Need the Title and State arguments');
		}
		break
	default:
		console.log('Me no understand')
}

