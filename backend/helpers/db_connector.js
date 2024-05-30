const mysql = require('mysql2/promise');
const config = require('./config');

async function query(sql, params) {
   const connection = await mysql.createConnection(config.db1);
 const [results, ] = await connection.execute(sql, params);
 
  return results;
}


async function test_connection() {
     const rows = await query(
      `SELECT id
       FROM users `
    );
  
     const data = rows;
     return {
      data,
    };
  }
   
module.exports = {
  query,  test_connection
}