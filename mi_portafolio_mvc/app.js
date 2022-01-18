const express = require('express');
const routesMain = require('./routers/main');

const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', routesMain);

app.listen(3000, () => console.log('Server Running on 3000'));