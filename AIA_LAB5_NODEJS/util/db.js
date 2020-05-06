const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'hbstudent',
    database: 'fight-shop',
    password: 'hbstudent'
});

module.exports = pool.promise();