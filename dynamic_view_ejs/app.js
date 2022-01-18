const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

const routesMain = require('./routes/main')

const routesDetalle = require('./routes/detalle')

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', routesMain);

app.use('/detalle', routesDetalle);

app.listen(port, () => console.log(`Server Running on ${port}`));