import React from 'react';
import styled from '@/styles/styled-components';
import {TouchableOpacity} from 'react-native';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import Text from './Text';
import Colors from '@/styles/Colors';
import Sizes from '@/styles/Sizes';

export interface ButtonProps {
  small?: boolean;
  black?: boolean;
  noShadow?: boolean;
  // whether plain text button or not
  plain?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  onPress?: () => void;
}

export interface TextButtonProps {
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  activeOpacity: number;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({style, children, textStyle, activeOpacity = 0.8, ...props}) => {
  return (
    <ButtonContainer style={style} activeOpacity={activeOpacity} {...props}>
      <ButtonTitle style={textStyle}>{children}</ButtonTitle>
    </ButtonContainer>
  );
};
export default Button;

export const TextButton: React.FC<TextButtonProps> = ({style, children, activeOpacity = 0.8, textStyle}) => {
  return (
    <TouchableOpacity style={style} activeOpacity={activeOpacity}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

// Check props and add other metrics later
const _btnHeightFromProps = (props: ButtonProps) => {
  if (props.plain) {
    return '';
  }
  if (props.small) {
    return `height: ${Sizes.heightSmallButton}px`;
  }
  return `height: ${Sizes.heightButton}px`;
};

const _borderRadius = () => {
  return Sizes.hScale(5);
};

const _shadow = (props: ButtonProps) => {
  if (props.noShadow) {
    return '';
  }
  return `
    shadow-color: #000;
    shadow-offset: { width: 0, height: ${Sizes.hScale(5)} };
    shadow-opacity: 0.15;
    shadow-radius: ${Sizes.hScale(5)}px;
    elevation: 4;
  `;
};

const _backgroundColor = (props: ButtonProps) => {
  if (props.black) {
    return '#000';
  }
  // Default yellow button
  return Colors.yellow;
};

const ButtonContainer = styled.TouchableOpacity`
  ${_btnHeightFromProps};
  border-radius: ${_borderRadius}px;
  ${_shadow}
  background-color: ${_backgroundColor};
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

const _fontSize = () => {
  return 16;
};

const _textColor = (props: ButtonProps) => {
  if (props.black) {
    return 'white';
  }
  return 'black';
};

const ButtonTitle = styled.Text`
  font-size: ${_fontSize}px;
  color: ${_textColor};
`;
