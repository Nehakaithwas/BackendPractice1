const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', async (req, res) => {
    try {
        res.send("<h1>Hello form your server</h1>");
    }
    catch (err) {
        res.send(err);
    }
})

app.listen(procees.env.PORT, () => {
    console.log(`server is listending on ${port} port `);
})