const express = require('express');
const app = express();
const port = 3000;

const routerSort = require('./router/router.js');

app.use(express.json());

app.get('/v1', (req, res) => {
    res.send('Hello World');
});

app.use('/v1', routerSort);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});