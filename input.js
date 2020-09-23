let connection;

const handleUserInput = (data) => {
  console.log(`A key was pressed!: ${data}`);
  // if (key == 'w') {
  //   console.log('Key is w!!!');
  // } else {
  //   console.log('w was not pressed! Key I got was actually: ');
  //   console.log(key);
  // };
  switch(data) {
    case '\u0003':
      process.exit();
      break;
    case 'a':
      console.log('left');
      connection.write('Move: left')
      break;
    case 'w':
      console.log('up');
      connection.write('Move: up')
      break;
    case 'd':
      console.log('right');
      connection.write('Move: right');
      break;
    case 's':
      console.log('down');
      connection.write('Move: down');
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode = true;
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };
