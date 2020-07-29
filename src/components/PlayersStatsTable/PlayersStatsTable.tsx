import React from 'react';

import { PlayerStats } from '../../types';
import Table from '../layout/Table';

import styles from './PlayersStatsTable.module.css';

type Props = {
  players?: PlayerStats[];
};

const PlayersStatsTable = ({ players = [] }: Props) => (
  <Table
    columnTitles={
      <>
        <div />
        <div />
        <div>
          <abbr title="Ottelut">O</abbr>
        </div>
        <div>
          <abbr title="Maalit">M</abbr>
        </div>
        <div>
          <abbr title="Varoitukset">V</abbr>
        </div>
        <div>
          <abbr title="Ulosajot">U</abbr>
        </div>
      </>
    }
    rows={players.map((player) => (
      <div key={player.name}>
        <div>{player.shirtNumber}</div>
        <div className={styles.nameCell}>{player.name}</div>
        <div>{player.matches}</div>
        <div>{player.goals}</div>
        <div>{player.warnings}</div>
        <div>{player.suspensions}</div>
      </div>
    ))}
  />
);

/**
 * {`${shirt_number}
 * ${first_name} ${last_name}
 * ${matches}
 * ${goals}
 * ${warnings}
 * ${suspensions}`}
 */

// <>
//   {players.map((group) => (
//     <PlayersTableGroup
//       key={`${group.competition}: ${group.group}`}
//       title={`${group.competition}: ${group.group}`}
//       teams={group.teams}
//     />
//   ))}
// </>

export default PlayersStatsTable;

/**
 * 
 * type Props = {
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
        <div />
        <div />
        <div>O</div>
        <div>V</div>
        <div>T</div>
        <div>H</div>
        <div className={styles.hideSmall}
          M
        </div>,
        <div>+/-</div>
        <div>Pst</div>
      ]}
      rows={teams.map((team) => {
        const goalsTotal = player.goalsFor - player.goalsAgainst;
        return (
          <div
            key={player.id}
            className={classNames({
              [styles.highlight]: player.name.toLowerCase().includes('kullervo'),
            })}
          >
            <div>{player.standing}</div>
            <div className={styles.teamCell}>{player.name}</div>
            <div>{player.matchesPlayed}</div>
            <div>{player.matchesWon}</div>
            <div>{player.matchesTied}</div>
            <div>{player.matchesLost}</div>
            <div className={styles.hideSmall}>
              {player.goalsFor}-{player.goalsAgainst}
            </div>
            <div>{`${goalsTotal > 0 ? '+' : ''}${goalsTotal}`}</div>
            <div>{player.points}</div>
          </div>
        );
      })}
    />
  </>
);

 */
