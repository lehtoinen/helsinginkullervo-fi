const crypto = require('crypto');
const fetch = require('node-fetch');
const queryString = require('query-string');

/**
 * API Reference found at:
 * https://spl.torneopal.fi/taso/rest/help#group-group-get
 */

exports.sourceNodes = (
  { boundActionCreators, createNodeId },
  configOptions
) => {
  const { createNode } = boundActionCreators;
  const { api, key, queries } = configOptions;

  const generateNodeData = (id, type, data) => {
    const nodeContent = JSON.stringify(data);
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    const nodeData = Object.assign({}, data, {
      id,
      parent: null,
      children: [],
      internal: {
        type,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });

    return nodeData;
  };

  // Helper function that processes a match entry to match Gatsby's node structure.
  const parseMatch = match => {
    const matchId = match.match_id;
    const nodeId = createNodeId(`torneopal-match-${matchId}`);
    return generateNodeData(nodeId, 'TorneopalMatch', match);
  };

  // Helper function that processes a group entry to match Gatsby's node structure.
  const parseGroup = group => {
    const {
      competition_id: competitionId,
      category_id: categoryId,
      group_id: groupId,
    } = group;

    const nodeId = createNodeId(
      `torneopal-group-${competitionId}-${categoryId}-${groupId}`
    );
    return generateNodeData(nodeId, 'TorneopalGroup', group);
  };

  // Helper function that fetches based on given query object. Returns a promise.
  const fetchQuery = query => {
    const params = queryString.stringify(query.options);
    const url = `${api}/${query.method}/?api_key=${key}&${params}`;

    console.log(`Fetch Torneopal data: ${url}`);

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        // if the response contain match data, parse
        if (data.matches) {
          data.matches.forEach(match => {
            const nodeData = parseMatch(match);
            createNode(nodeData);
          });
        }

        // if the response contains group data, parse
        if (data.group) {
          const nodeData = parseGroup(data.group);
          createNode(nodeData);
        }
      });
  };

  // Fetch the queries and wait until all are finished.
  return Promise.all(queries.map(fetchQuery));
};
