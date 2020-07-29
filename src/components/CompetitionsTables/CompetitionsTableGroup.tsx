import React from 'react';
import classNames from 'classnames';

import { Team } from '../../types';
import Table from '../layout/Table';

import styles from './CompetitionsTableGroup.module.css';

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
      columnTitles={
        <>
          <div />
          <div />
          <div>
            <abbr title="Pelatut ottelut">O</abbr>
          </div>
          <div>
            <abbr title="Voitot">V</abbr>
          </div>
          <div>
            <abbr title="Tasapelit">T</abbr>
          </div>
          <div>
            <abbr title="Häviöt">H</abbr>
          </div>
          <div className="hideSmall">
            <abbr title="Maalit (tehdyt-päästetyt)">M</abbr>
          </div>
          <div>
            <abbr title="Maaliero">+/-</abbr>
          </div>
          <div>
            <abbr title="Pisteet">Pst</abbr>
          </div>
        </>
      }
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
            <div className="hideSmall">
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
