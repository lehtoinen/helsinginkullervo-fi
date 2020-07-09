import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { RootState, Group, GroupNode } from '../types';
import { updateFilters } from '../state/actions';
import FilterType from '../enum/FilterType';
import { parseGroup } from '../utils/torneopalParser';

import CompetitionsTables from '../components/CompetitionsTables/CompetitionsTables';

const Competitions = () => {
  const filters = useSelector((state: RootState) => state.tableFilters);
  const dispatch = useDispatch();

  const data: GroupsQueryData = useStaticQuery(groupsQuery);
  const groups: Group[] = (data?.groups?.edges ?? []).map((edge) =>
    parseGroup(edge.node)
  );

  const onUpdateFilters = (property: string, values: string[]) =>
    dispatch(updateFilters(FilterType.TABLES, { [property]: values }));

  return (
    <CompetitionsTables
      groups={groups}
      filters={filters}
      updateFilters={onUpdateFilters}
    />
  );
};

type GroupsQueryData = {
  groups: {
    edges: {
      node: GroupNode;
    }[];
  };
};

const groupsQuery = graphql`
  query GroupsQuery {
    groups: allTorneopalGroup {
      edges {
        node {
          id
          title
          competition_id
          category_name
          group_name
          live_standings {
            team_name
            team_id
            current_standing
            points
            matches_played
            matches_tied
            matches_lost
            matches_won
            goals_for
            goals_against
          }
          # Documenting the player stats fields here for future use.
          # player_statistics {
          #   player_name
          #   team_id
          #   team_name
          #   standing
          #   goals
          # }
        }
      }
    }
  }
`;

export default Competitions;
