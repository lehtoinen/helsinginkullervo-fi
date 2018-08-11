const crypto = require('crypto');
const fetch = require('node-fetch');
const queryString = require('query-string');

exports.sourceNodes = (
  { boundActionCreators, createNodeId },
  configOptions
) => {
  const { createNode } = boundActionCreators;
  const { api, key, queries } = configOptions;

  // Helper function that processes a match entry to match Gatsby's node structure.
  const parseMatch = match => {
    const nodeId = createNodeId(`torneopal-match-${match.match_id}`);
    const nodeContent = JSON.stringify(match);
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    const nodeData = Object.assign({}, match, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'TorneopalMatch',
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });

    return nodeData;
  };

  // Helper function that fetches based on given query object. Returns a promise.
  const fetchQuery = query => {
    const params = queryString.stringify(query.options);
    const url = `${api}/${query.method}/?api_key=${key}&${params}`;
    console.log(`Fetch Torneopal data: ${url}`);

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        data.matches.forEach(match => {
          const nodeData = parseMatch(match);
          createNode(nodeData);
        });
      });
  };

  // Fetch the queries and wait until all are finished.
  return Promise.all(queries.map(fetchQuery));
};
