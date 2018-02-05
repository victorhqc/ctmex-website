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

import tennisPhase1 from '../../assets/tennis_phase_1.svg';
import tennisPhase2 from '../../assets/tennis_phase_2.svg';
import tennisPhase3 from '../../assets/tennis_phase_3.svg';

const ColBlue = styled.col`
  background-color: ${getColor('persianBlue')};
  color: ${getColor('white')};
`;

const ColRed = styled.col`
  background-color: ${getColor('carnation')};
  color: ${getColor('white')};
`;

const ColYellow = styled.col`
  background-color: ${getColor('seaBuckthorn')};
  color: ${getColor('white')};
`;

const ColGreen = styled.col`
  background-color: ${getColor('mountainMeadow')};
  color: ${getColor('white')};
`;

const Table = styled.table`
  margin: 0 auto;
  color: ${getColor('white')};
  text-align: center;
  font-size: 1.1em;

  td,th {
    padding: ${getPadding('lg')}px;
  }

  h2 {
    color: ${getColor('white')};
    margin: 0;
  }
`;

const MethodTable = () => (
  <Table>
    <colgroup>
      <ColBlue />
      <ColRed />
      <ColYellow />
      <ColGreen />
    </colgroup>
    <thead>
      <tr>
        <th>{TABLE_HEADERS.phases}</th>
        <th>
          <h2>{PHASE_1_TITLE}</h2>
        </th>
        <th>
          <h2>{PHASE_2_TITLE}</h2>
        </th>
        <th>
          <h2>{PHASE_3_TITLE}</h2>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{TABLE_HEADERS.ball}</td>
        <td>{PHASE_1_BALL}</td>
        <td>{PHASE_2_BALL}</td>
        <td>{PHASE_3_BALL}</td>
      </tr>
      <tr>
        <td>{TABLE_HEADERS.courtSize}</td>
        <td>
          <img src={tennisPhase1} alt={PHASE_1_PICTURE} height="250" />
          {map(PHASE_1_COURT_SIZE, (value, key) => (
            <p key={key}>{value}</p>
          ))}
        </td>
        <td>
          <img src={tennisPhase2} alt={PHASE_2_PICTURE} height="250" />
          {map(PHASE_2_COURT_SIZE, (value, key) => (
            <p key={key}>{value}</p>
          ))}
        </td>
        <td>
          <img src={tennisPhase3} alt={PHASE_3_PICTURE} height="250" />
          {map(PHASE_3_COURT_SIZE, (value, key) => (
            <p key={key}>{value}</p>
          ))}
        </td>
      </tr>
      <tr>
        <td>{TABLE_HEADERS.net}</td>
        <td>{PHASE_1_NET}</td>
        <td>{PHASE_2_NET}</td>
        <td>{PHASE_3_NET}</td>
      </tr>
      <tr>
        <td>{TABLE_HEADERS.racketSize}</td>
        <td>{PHASE_1_RACKET_SIZE}</td>
        <td>{PHASE_2_RACKET_SIZE}</td>
        <td>{PHASE_3_RACKET_SIZE}</td>
      </tr>
    </tbody>
  </Table>
);

export default MethodTable;
