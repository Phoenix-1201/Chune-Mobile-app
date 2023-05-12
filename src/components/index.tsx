import styled from '@/styles/styled-components';
import React from 'react';
import {View} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import FIcon from 'react-native-vector-icons/Feather';
import Sizes from '@/styles/Sizes';
import * as Styles from '@/styles';

export const Container = styled.View`
  flex: 1;
  align-self: stretch;
`;

export const RowContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const AbsoluteContainer = styled.View`
  ${Styles.absolute_full};
`;

export const Space: React.FC<{width?: number, height?: number}> = ({width, height}) => {
  return <View style={{width: width ?? 0, height: height ?? 0}}/>
};

export const Fill: React.FC = () =>{
  return <View style={{flex: 1}} />
};

export const Feather: React.FC<IconProps> = (props) => {
  return <FIcon size={props.size || Sizes.defaultIconSize}{...props} />
};
