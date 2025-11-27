const express = require('express');
const app = express();
const port = 3000;

const routerSort = require('./router/router.js');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/v1', (req, res) => {
    res.send('Hello World');
});
app.use('/v1', routerSort);

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});