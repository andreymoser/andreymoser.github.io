const _ = require('highland');

_([1, 2, 3, 4])
  .on('data', console.log)
  .on('end', () => console.log('done'));
