const https = require('https');

https.get('https://speed.hetzner.de/100MB.bin', (download) => {
  download.on('data', data => console.log(data));
  download.on('end', () => console.log('done'));
}).on('error', console.error);
