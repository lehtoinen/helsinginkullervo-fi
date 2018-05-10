'use strict';

// /.netlify/functions/getFixtures

var request = require('request');
var config = require('dotenv').config({
  path: '.env.development',
});

var statusCode = 200;
var headers = {
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Proxies calls to the SPL API
 * Expects env vars to have the API access token as SPL_TOKEN
 * @param {*} event             provided by Netlify when function is invoked
 * @param {*} context           provided by Netlify when function is invoked
 * @param {function} callback   used to return a response or an error when function execution is completed
 * @see {@link https://www.netlify.com/docs/functions/} for information on Netlify functions
 */
export function handler(event, context, callback) {
  const url = `https://spl.torneopal.fi/taso/rest/getMatches?api_key=${
    process.env.SPL_TOKEN
  }`;

  request({ url, qs: event.queryStringParameters }, function(
    err,
    response,
    body
  ) {
    if (!err && response.statusCode === 200) {
      return callback(null, { statusCode, headers, body });
    } else {
      // empty response
      return callback(null, {
        statusCode,
        headers,
        body: '',
      });
    }
  });
}
