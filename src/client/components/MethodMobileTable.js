import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

import {
  TABLE_HEADERS,

  PHASE_1_TITLE,
  PHASE_1_BALL,
  PHASE_1_PICTURE,
  PHASE_1_COURT_SIZE,
  PHASE_1_NET,
  PHASE_1_RACKET_SIZE,

  PHASE_2_TITLE,
  PHASE_2_BALL,
  PHASE_2_PICTURE,
  PHASE_2_COURT_SIZE,
  PHASE_2_NET,
  PHASE_2_RACKET_SIZE,

  PHASE_3_TITLE,
  PHASE_3_BALL,
  PHASE_3_PICTURE,
  PHASE_3_COURT_SIZE,
  PHASE_3_NET,
  PHASE_3_RACKET_SIZE,
} from '../../locales/es/method';

import {
  getColor,
  getPadding,
} from '../themes/base';

import {
  mediaQuery,
} from '../themes/utils';

import tennisPhase1 from '../../assets/tennis_phase_1.svg';
import tennisPhase2 from '../../assets/tennis_phase_2.svg';
import tennisPhase3 from '../../assets/tennis_phase_3.svg';

const notATable = `
table, thead, tbody, th, tr, td {
  display: block;
}

tbody {
  display: flex;
  flex-wrap: wrap;
}

/* Hide table headers (but not display: none;, for accessibility) */
thead tr {
  display: none;
}

tr {
  width: 100%;
  border: 1px solid ${getColor('white')};
}

td {
  /* Behave  like a "row" */
  border: none;
  border-bottom: 1px solid ${getColor('white')};
  position: relative;
  padding-left: 40%;
}

td:before {
  display: block;
  position: absolute;
  width: 40%;
  left: 0;
}

/*
Label the data
*/

td:nth-of-type(1):before { content: "Étapa"; }
td:nth-of-type(2):before { content: "Pelota"; }
td:nth-of-type(3):before { content: "Tamaño de cancha"; }
td:nth-of-type(4):before { content: "Red"; }
td:nth-of-type(5):before { content: "Tamaño de raqueta"; }
`;

const Table = styled.table`
  color: ${getColor('white')};
  text-align: center;
  font-size: 1.1em;

  td,th {
    padding: ${getPadding('lg')}px;
  }

  th {
    background-color: ${getColor('persianBlue')};
  }

  tr:nth-child(1) {
    background-color: ${getColor('carnation')};
  }
  tr:nth-child(2) {
    background-color: ${getColor('seaBuckthorn')};
  }
  tr:nth-child(3) {
    background-color: ${getColor('mountainMeadow')};
  }

  h2 {
    color: ${getColor('white')};
    margin: 0;
  }

  ${mediaQuery('sm', notATable)}
`;

const MethodMobileTable = () => (
  <Table>
    <thead>
      <tr>
        <th><h2>{TABLE_HEADERS.phases}</h2></th>
        <th><h2>{TABLE_HEADERS.ball}</h2></th>
        <th><h2>{TABLE_HEADERS.courtSize}</h2></th>
        <th><h2>{TABLE_HEADERS.net}</h2></th>
        <th><h2>{TABLE_HEADERS.racketSize}</h2></th>
      </tr>
    </thead>
    <tbody>
      <tr id="phase-1">
        <td><h2>{PHASE_1_TITLE}</h2></td>
        <td>{PHASE_1_BALL}</td>
        <td>
          <img src={tennisPhase1} alt={PHASE_1_PICTURE} height="250" />
          {map(PHASE_1_COURT_SIZE, (value, key) => (
            <p key={key}>{value}</p>
          ))}
        </td>
        <td>{PHASE_1_NET}</td>
        <td>{PHASE_1_RACKET_SIZE}</td>
      </tr>
      <tr id="phase-2">
        <td><h2>{PHASE_2_TITLE}</h2></td>
        <td>{PHASE_2_BALL}</td>
        <td>
          <img src={tennisPhase2} alt={PHASE_2_PICTURE} height="250" />
          {map(PHASE_2_COURT_SIZE, (value, key) => (
            <p key={key}>{value}</p>
          ))}
        </td>
        <td>{PHASE_2_NET}</td>
        <td>{PHASE_2_RACKET_SIZE}</td>
      </tr>
      <tr id="phase-3">
        <td><h2>{PHASE_3_TITLE}</h2></td>
        <td>{PHASE_3_BALL}</td>
        <td>
          <img src={tennisPhase3} alt={PHASE_3_PICTURE} height="250" />
          {map(PHASE_3_COURT_SIZE, (value, key) => (
            <p key={key}>{value}</p>
          ))}
        </td>
        <td>{PHASE_3_NET}</td>
        <td>{PHASE_3_RACKET_SIZE}</td>
      </tr>
    </tbody>
  </Table>
);

export default MethodMobileTable;
