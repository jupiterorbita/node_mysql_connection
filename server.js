//npm i express cors dotenv mysql
// https://www.sitepoint.com/using-node-mysql-javascript-client/
const express = require('express');
const cors = require('cors');

const app = express(); // execute and store the return function of express
app.use(express.json()); // req.body undefined without this!
app.use(cors); // allow server to accept requests

// === ENV ===
// require('dotenv').config()
// console.log(process.env);
// environment vars from .env
// const port = process.env.PORT;
const port = 8000;
const db_name = "node_demo_db"; //same as in MySQL workbench

require('./mysql_connection')(db_name);


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`--== server started on port ${port} for REQuests and RESpond to =--`);
})

