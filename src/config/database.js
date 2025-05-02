const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'tracker',
  user: 'root',
  password: 'root'   
});

connection.connect((err) => {
  if (err) {
    console.log(err);
} else {
    console.log("connection created with mysql successfully");
}
});

module.exports = connection;