
const connect = require('./client').connect;

const setupInput = (connection) => {
  let interval;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const autoMode = (bool) => {
    // Makes snake go around in an 8 by 8 square
    if (bool) {
      const directions = ['up', 'right', 'down', 'left'];
      let i = 0; let j = 0;
      interval = setInterval(() => {
        connection.write(`Move: ${directions[j % 4]}`);
        i++;
        if (i == 7) {
          i = 0;
          j++;
        }
      }, 100);
    } else {
      clearInterval(interval);
    }
  };
  const handleUserInput = (key) => {
    console.log(`A key was pressed!: ${key}`);
    switch (key) {
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
        break;
      case 'e':
        connection.write('Say: YES');
        break;
      case 'r':
        connection.write('Say: NO');
        break;
      case 't':
        connection.write('Say: MAYBE');
        break;
      case 'x':
        autoMode(true);
        break;
      case 'z':
        autoMode(false);
        break;
      case 'p':
        // Play again
        connection.end();
        connect();
        break;
    }
  };
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
}

module.exports = { setupInput };
