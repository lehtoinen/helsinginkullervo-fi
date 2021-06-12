import React from 'react';
import classNames from 'classnames';

import { Team } from '../../types';
import Table from '../layout/Table';

import * as styles from './CompetitionsTableGroup.module.css';

type Props = {
  title: string;
  teams: Team[];
};

const Group = ({ title, teams }: Props) => (
  <>
    <div className={styles.title}>
      <h4>{title}</h4>
    </div>
    <Table
      className={styles.table}
      columnTitles={[
        <div key={`${title}-coltitle-1`} />,
        <div key={`${title}-coltitle-2`} />,
        <div key={`${title}-coltitle-3`}>O</div>,
        <div key={`${title}-coltitle-4`}>V</div>,
        <div key={`${title}-coltitle-5`}>T</div>,
        <div key={`${title}-coltitle-6`}>H</div>,
        <div key={`${title}-coltitle-7`} className={styles.hideSmall}>
          M
        </div>,
        <div key={`${title}-coltitle-8`}>+/-</div>,
        <div key={`${title}-coltitle-9`}>Pst</div>,
      ]}
      rows={teams.map((team) => {
        const goalsTotal = team.goalsFor - team.goalsAgainst;
        return (
          <div
            key={team.id}
            className={classNames({
              [styles.highlight]: team.name.toLowerCase().includes('kullervo'),
            })}
          >
            <div>{team.standing}</div>
            <div className={styles.teamCell}>{team.name}</div>
            <div>{team.matchesPlayed}</div>
            <div>{team.matchesWon}</div>
            <div>{team.matchesTied}</div>
            <div>{team.matchesLost}</div>
            <div className={styles.hideSmall}>
              {team.goalsFor}-{team.goalsAgainst}
            </div>
            <div>{`${goalsTotal > 0 ? '+' : ''}${goalsTotal}`}</div>
            <div>{team.points}</div>
          </div>
        );
      })}
    />
  </>
);

export default Group;
