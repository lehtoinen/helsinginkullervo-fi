import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import xor from 'lodash/xor';
import orderBy from 'lodash/orderBy';

import { RootState, Group, GroupNode, TableFilters } from '../types';
import { updateFilters } from '../state/actions';
import FilterType from '../enum/FilterType';
import { parseGroup } from '../utils/torneopalParser';
import parseCompetitions from '../utils/parseCompetitions';
import useUserHasInteracted from '../hooks/useUserHasInteracted';

import CompetitionsTables from '../components/CompetitionsTables/CompetitionsTables';
import Filter from '../components/Filter';

const Competitions = () => {
  const userHasInteracted = useUserHasInteracted();

  const filters = useSelector((state: RootState) => state.tableFilters);
  const dispatch = useDispatch();

  const data: GroupsQueryData = useStaticQuery(groupsQuery);
  const groups: Group[] = (data?.groups?.edges ?? []).map((edge) =>
    parseGroup(edge.node)
  );

  const competitions = parseCompetitions(groups);

  const onChangeFilter = (property: 'competition', value: string) => {
    const filterValues = xor(filters[property]?.slice(0) ?? [], [value]);
    dispatch(updateFilters(FilterType.TABLES, { [property]: filterValues }));
  };

  const filterGroups = (groups: Group[], filters: TableFilters) => {
    const competitionFilters = (
      filters.competition ?? []
    ).filter((competition) => competitions.includes(competition)); // removing non-active competitions

    return competitionFilters.length
      ? groups.filter((group) => competitionFilters.includes(group.competition))
      : groups;
  };

  const filteredGroups = orderBy(
    filterGroups(groups, filters),
    ['competition'],
    ['asc']
  ).slice(0, !userHasInteracted ? 2 : undefined);

  return (
    <>
      <Filter
        group="tables"
        property="competition"
        options={competitions}
        selected={filters.competition}
        onChange={(value) => onChangeFilter('competition', value)}
        legend="Näytä sarjataulukot:"
      />
      <CompetitionsTables groups={filteredGroups} />
    </>
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
          competition_id
          category_name
          group_name
          live_standings {
            team_name
            team_id
            current_standing
            points_home
            points_away
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
