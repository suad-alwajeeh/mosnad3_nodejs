const { test_connection } = require('./db_connector');

async function main() {
  const isConnected = await test_connection();
  if (isConnected) {
    console.log('Connection to MySQL database is successful!');
  } else {
    console.error('Failed to connect to MySQL database.');
  }
}

main();