module.exports = (db_name) => {
    // 1. ----------- mysql connection ---------
    const mysql = require('mysql');

    // 2. --- mysql config -------
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: db_name
    })

    // 3. --- mysql connection to db ---
    connection.connect((err) => {
        if (err) {
            console.log('>>> ERROR connecting to MySQL <<<\n', err)
            // throw err;
        };
        console.log('*** MySQL connected! ***')
    })

    // 4a. -- just creating some data to put in ---
    authorsArray = [
        { name: 'Michaela Lehr', city: 'Berlin' },
        { name: 'Michael Wanyoike', city: 'Nairobi' },
        { name: 'James Hibbard', city: 'Munich' },
        { name: 'Karolina Gawron', city: 'Wroclaw' }
    ]
    // 4b. -- map over the array to insert each entry 
    authorsArray.map( (author, i) => {
        connection.query('INSERT INTO authors SET ?', author, (err, res) => {
                if (err) throw err;
                console.log('----> INSERTED => id:', res.insertId);
            })
    })

    // 4. CREATE/INSERT one entry entries:
    const author1 = { name: 'Craig Buckler', city: 'Exmouth'};
    connection.query('INSERT INTO authors SET ?', author1, (err, res) => {
        if (err) throw err;
        console.log('----> INSERTED => id:', res.insertId);
    })

    // --- making a query ---
    connection.query('SELECT * FROM authors', (err, rows) => {
        if (err) console.log(err);
        console.log('got data back');
        console.log(rows) // array
        console.log(rows.length)
        
        rows.map( (row, i ) => {
            console.log(`${row.name}, lives in ${row.city}`)
        })
    })
}