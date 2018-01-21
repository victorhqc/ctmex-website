/* eslint no-new: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';

import {
  injectScript,
} from '../utils/html';

import {
  getColor,
} from '../themes/base';

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${getColor('gray')},
`;

const initMap = () => {
  const position = { lat: 20.674, lng: -100.414 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: position,
  });

  new google.maps.Marker({
    position,
    map,
  });
};

class Map extends Component {
  componentDidMount() {
    if (window.google) {
      initMap();
      return;
    }

    window.initMap = initMap;
    injectScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.G_MAPS_KEY}&callback=initMap`);
  }

  render() {
    return (
      <div>
        <MapWrapper id="map" />
      </div>
    );
  }
}

export default Map;
