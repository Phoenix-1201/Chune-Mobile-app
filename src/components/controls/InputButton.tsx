import React from 'react';
import styled from '@/styles/styled-components';
import BaseText from './Text';
import Sizes, {FontSize} from '@/styles/Sizes';
import {isNil} from 'lodash';

export interface Props {
  title: string;
  error?: string;
  value?: string;
  onPress?: () => void;
}

const MyInputButton: React.FC<Props> = ({title, error, value, onPress}) => (
  <Container disabled={isNil(onPress)} onPress={onPress}>
    <Title>{error ? <ErrorTitle>{error}</ErrorTitle> : title}</Title>
    <Value>{value}</Value>
  </Container>
);

export default MyInputButton;

export const BaseContainer = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: ${Sizes.divider}px;
  border-bottom-color: ${(props) => props.theme.colorInputBorder};
  padding-horizontal: ${Sizes.hPadding};
  justify-content: center;
`;

const Container = styled(BaseContainer)`
  height: ${Sizes.heightInputContainer}px;
`;

export const Title = styled(BaseText)`
  fontsize: ${FontSize.inputTitle};
  font-weight: bold;
  color: ${(props) => props.theme.colorTextInputTitle};
`;

const ErrorTitle = styled.Text`
  color: red;
`;

const Value = styled(BaseText)`
  height: ${Sizes.heightInput};
  padding-vertical: 5px;
`;
