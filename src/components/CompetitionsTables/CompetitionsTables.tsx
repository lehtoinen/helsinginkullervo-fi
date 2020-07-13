import React from 'react';

import { Group } from '../../types';

import CompetitionsTableGroup from './CompetitionsTableGroup';

type Props = {
  groups?: Group[];
};

const CompetitionsTables = ({ groups = [] }: Props) => {
  return (
    <>
      {groups.map((group) => (
        <CompetitionsTableGroup
          key={`${group.competition}: ${group.group}`}
          title={`${group.title}`}
          teams={group.teams}
        />
      ))}
    </>
  );
};

export default CompetitionsTables;
