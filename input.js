const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode = true;
  stdin.setEncoding('uft8');
  stdin.resume();

  const handleUserInput = stdin.on('data', () => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  return stdin;
}

module.exports = { setupInput };
