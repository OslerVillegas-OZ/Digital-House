const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => console.log('Server Running on 3000'));

app.get('/', (req, res) => {
	let htmlPath = path.resolve(__dirname, './views/index.html')
	res.sendFile(htmlPath)
})


/*
app.get('/', function(res, res) {
	res.send('Welcome to Valhalla')
});

app.get('/contacto', function(req, res) {
	res.send('Leave your info')
});


//console.log(app);

app.get('/', function(req, res){
	res.send('Welcome to Valhalla')
})
*/