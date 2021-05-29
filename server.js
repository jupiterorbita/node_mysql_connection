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
// // 1. ----------- mysql connection ---------
// const mysql = require('mysql');

// // 2. --- mysql config -------
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: db_name
// })

// // 3. --- mysql connection to db ---
// connection.connect((err) => {
//     if (err) {
//         console.log('>>> ERROR connecting to MySQL <<<\n', err)
//         // throw err;
//     };
//     console.log('*** MySQL connected! ***')
// })

//--------- create the db in Workbench ---------
// new schema -> node_demo_db (utf-8)
// query:
// USE node_demo_db;

// CREATE TABLE authors (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   name varchar(50),
//   city varchar(50),
//   PRIMARY KEY (id)
// );


// // 4a. -- just creating some data to put in ---
// authorsArray = [
//     { name: 'Michaela Lehr', city: 'Berlin' },
//     { name: 'Michael Wanyoike', city: 'Nairobi' },
//     { name: 'James Hibbard', city: 'Munich' },
//     { name: 'Karolina Gawron', city: 'Wroclaw' }
// ]
// // 4b. -- map over the array to insert each entry 
// authorsArray.map( (author, i) => {
//     connection.query('INSERT INTO authors SET ?', author, (err, res) => {
//             if (err) throw err;
//             console.log('----> INSERTED => id:', res.insertId);
//         })
// })

// // 4. CREATE/INSERT one entry entries:
// const author1 = { name: 'Craig Buckler', city: 'Exmouth'};
// connection.query('INSERT INTO authors SET ?', author1, (err, res) => {
//     if (err) throw err;
//     console.log('----> INSERTED => id:', res.insertId);
// })




// // --- making a query ---
// connection.query('SELECT * FROM authors', (err, rows) => {
//     if (err) console.log(err);
//     console.log('got data back');
//     console.log(rows) // array
//     console.log(rows.length)
    
//     rows.map( (row, i ) => {
//         console.log(`${row.name}, lives in ${row.city}`)
//     })
// })


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`--== server started on port ${port} for REQuests and RESpond to =--`);
})

