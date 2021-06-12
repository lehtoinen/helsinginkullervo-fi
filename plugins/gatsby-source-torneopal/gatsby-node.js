/* eslint-disable camelcase */
const crypto = require('crypto');
const fetch = require('node-fetch');
const queryString = require('query-string');
const uniqBy = require('lodash/uniqBy');

/**
 * API Reference found at:
 * https://spl.torneopal.fi/taso/rest/help#group-group-get
 */

exports.sourceNodes = async ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions;
  const { api, key, club_id, competition_id } = configOptions;

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
  const generateMatchNode = (match, injectData = {}) => {
    const matchId = match.match_id;
    const nodeId = createNodeId(`torneopal-match-${matchId}`);

    const nodeData = Object.assign(
      { ...injectData },
      generateNodeData(nodeId, 'TorneopalMatch', match)
    );

    return nodeData;
  };

  // Helper function that processes a group entry to match Gatsby's node structure.
  const generateGroupNode = (group, injectData = {}) => {
    const {
      competition_id: competitionId,
      category_id: categoryId,
      group_id: groupId,
    } = group;

    const nodeId = createNodeId(
      `torneopal-group-${competitionId}-${categoryId}-${groupId}`
    );

    const nodeData = Object.assign(
      { ...injectData },
      generateNodeData(nodeId, 'TorneopalGroup', group)
    );

    return nodeData;
  };

  // Helper function that fetches based on given query object. Returns a promise.
  const fetchQuery = async (query) => {
    const params = queryString.stringify(query.options);
    const url = `${api}/${query.method}/?api_key=${key}&${params}`;

    console.log(`Fetch Torneopal data: ${url}`);

    const response = await fetch(url);
    return response.json();
  };

  const matchesData = await fetchQuery({
    method: 'getMatches',
    options: {
      club_id,
      competition_id,
    },
  });

  const matches = matchesData.matches || [];
  matches.forEach((match) => createNode(generateMatchNode(match)));

  const groups = uniqBy(
    matches.map(({ category_id, group_id }) => ({
      category_id,
      group_id,
    })),
    JSON.stringify
  );

  for (const { category_id, group_id } of groups) {
    const groupData = await fetchQuery({
      method: 'getGroup',
      options: {
        competition_id,
        category_id,
        group_id,
        matches: '0', // '0' = ei ottelulistausta
      },
    });

    createNode(generateGroupNode(groupData.group));
  }
};
