const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();
const port = 3000;

const readRoute = require('./routes/read');
const createRoute = require('./routes/create');
//const updateRoute = require('./routes/update');
//const deleteRoute = require('./routes/delete');

app.use(bodyParser);
app.use(readRoute);
app.use(createRoute);
//app.use(updateRoute);
//app.use(deleteRoute);

app.listen(port, () => {console.log(`example app listening oon port ${port} !`)});
