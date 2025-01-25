import React from 'react';
import {View} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

export function CirclesSplash() {
  return (
    <Svg width="200" height="183" viewBox="0 0 200 183" fill="none">
      <Circle cy="83" r="100" fill="#8FE1D7" fillOpacity="0.5" />
      <Circle cx="100" cy="13" r="100" fill="#8FE1D7" fillOpacity="0.5" />
    </Svg>
  );
}
