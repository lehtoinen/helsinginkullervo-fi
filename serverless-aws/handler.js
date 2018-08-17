const https = require('https');

module.exports.build = (event, context, callback) => {
  const options = {
    hostname: 'api.netlify.com',
    method: 'POST',
    path: '/build_hooks/5b76f7c7b13fb15ac2126b30',
  };

  const req = https.request(options, res =>
    res.on('data', () => callback(null, 'OK'))
  );
  req.on('error', error => callback(JSON.stringify(error)));
  req.write('');
  req.end();
};
