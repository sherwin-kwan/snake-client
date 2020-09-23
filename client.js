const net = require('net');
const constants = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: constants.host,
    port: constants.port
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  });
  conn.on('connect', () => {
    console.log('Successfully connected! GLHF!');
    conn.write(`Name: ${constants.name}`);
  });
  conn.on('error', (error) => {
    console.log(`FATAL ERROR YOU LOST: ${error}`);
  })
  return conn;
}


module.exports = { connect };