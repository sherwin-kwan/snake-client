const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  });
  conn.on('connect', () => {
    console.log('Successfully connected! GLHF!');
    conn.write('Name: PQR');
    const directions = ['up', 'right', 'down', 'left'];
    let i = 0; let j = 0;
    // const interval = setInterval(() => {
    //   conn.write(`Move: ${directions[j % 4]}`);
    //   i++;
    //   if (i == 7) {
    //     i = 0;
    //     j++;
    //   }
    // }, 100);
  });
  conn.on('error', (error) => {
    console.log(`FATAL ERROR YOU LOST: ${error}`);
  })
  return conn;
}


module.exports = { connect };