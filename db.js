// db.js
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  port: 8889, // Modifiez le port ici si nécessaire pour MAMP/XAMPP... (par défaut 8889 --> MAMP) 
  user: 'root',           //(port 3306 utilisé par défaut pour les installations MySQL standard)
  password: 'root',
  database: 'nodemvc',
};

console.log('dbConfig:', dbConfig);

const pool = mysql.createPool(dbConfig);

module.exports = pool;
