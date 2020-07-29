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

    const nodeData = {
      ...data,
      ...{
        id,
        parent: null,
        children: [],
        internal: {
          type,
          content: nodeContent,
          contentDigest: nodeContentDigest,
        },
      },
    };

    return nodeData;
  };

  // Helper function that processes a match entry to match Gatsby's node structure.
  const generateMatchNode = (match, injectData = {}) => {
    const matchId = match.match_id;
    const nodeId = createNodeId(`torneopal-match-${matchId}`);

    const nodeData = generateNodeData(nodeId, 'TorneopalMatch', {
      ...match,
      ...injectData,
    });

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

    const nodeData = generateNodeData(nodeId, 'TorneopalGroup', {
      ...group,
      ...injectData,
    });

    return nodeData;
  };

  // Helper function that processes a team entry to match Gatsby's node structure.
  const generateTeamNode = (team, injectData = {}) => {
    const { team_id: teamId, club_id: clubId, players } = team;
    const nodeId = createNodeId(`torneopal-team-${clubId}-${teamId}`);

    const nodeData = generateNodeData(nodeId, 'TorneopalTeam', {
      ...team,
      ...injectData,
      ...{
        // filter out players that have not played any games for the team
        players: players.filter((player) => parseInt(player.matches, 10) > 0),
      },
    });

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

  // Pluck team specific data from matches
  const teams = uniqBy(
    matches.map(
      ({
        club_A_id,
        team_A_id,
        team_B_id,
        category_id,
        category_name,
        group_id,
      }) => ({
        team_id: club_A_id === club_id ? team_A_id : team_B_id,
        category_id,
        category_name,
        group_id,
      })
    ),
    JSON.stringify
  );

  // Fetch all groups
  for (const { category_id, group_id } of teams) {
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

  for (const { category_id, team_id, category_name, group_id } of teams) {
    const teamsData = await fetchQuery({
      method: 'getTeam',
      options: {
        competition_id,
        category_id,
        team_id,
      },
    });

    createNode(
      generateTeamNode(teamsData.team, {
        competition_id,
        category_id,
        category_name,
        group_id,
      })
    );
  }
};
