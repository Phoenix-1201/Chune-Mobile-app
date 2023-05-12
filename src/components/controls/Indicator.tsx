import React from 'react';
import {useTheme} from '@/styles/styled-components';
import {get} from 'lodash';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const comps = [
  {name: 'ball', comp: BallIndicator},
  {name: 'bar', comp: BarIndicator},
  {name: 'dot', comp: DotIndicator},
  {name: 'material', comp: MaterialIndicator},
  {name: 'pacman', comp: PacmanIndicator},
  {name: 'pulse', comp: PulseIndicator},
  {name: 'skype', comp: SkypeIndicator},
  {name: 'wave', comp: WaveIndicator},
];

interface Props {}

const Indicator: React.FC<Props> = (props) => {
  const theme = useTheme();
  const Component = get(
    comps.find((comp) => comp.name === theme.nameHudIndicator),
    'comp',
    UIActivityIndicator
  );
  return <Component {...props} style={{flex: 0}} />;
};

export default Indicator;
