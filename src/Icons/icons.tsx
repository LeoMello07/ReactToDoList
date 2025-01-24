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

export function SvgTest() {
  return (
    <View>
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r="40"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg>
    </View>
  );
}
