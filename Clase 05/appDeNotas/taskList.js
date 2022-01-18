const fs = require('fs');

let taskList = {
	file: 'tasks.json',
	read: function() {
			return JSON.parse(fs.readFileSync(this.file,'utf-8'));
	},
	helpMe: function() { 
		let helping = 'List of valid arguments\nhelpMe     - shows this list\nlist       - shows the list of tasks\ndeleteLast - deletes the last task in the list\naddTask    - adds a new task to the list';
		return helping
	},
	deleteLast: function() {
		let arrTemp = JSON.parse(fs.readFileSync(this.file,'utf-8'));
		let taskDeleted = arrTemp.pop();
		fs.writeFile(this.file, JSON.stringify(arrTemp, null, 2), function(err) {
			if(err) return console.error(err);
		});
		return taskDeleted;
	},
	addTask: function(arr1, arr2) {
		let newTask = {
			titulo: arr1, 
			estado: arr2
		}

		let arrTemp = JSON.parse(fs.readFileSync(this.file,'utf-8'));
		arrTemp.push(newTask);

		fs.writeFile(this.file, JSON.stringify(arrTemp, null, 2), function(err){
			if(err) return console.error(err);
		})

		return newTask
	}
}

module.exports = taskList;