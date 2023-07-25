import React from 'react';
import styled from '@/styles/styled-components';
import * as Styles from '@/styles';
import {ViewProps, StyleSheet} from 'react-native';
import {AvenirNextBold, AvenirNextRegular} from '@/components/controls/Text';
import Sizes, {FontSize} from '@/styles/Sizes';

const SeekDisplay: React.FC = (props) => {
  return (
    <Container pointerEvents={'none'}>
      <DurationText>0:00</DurationText>
      <Slider progress={0.5} >
        <CurrentTimeText>1:37</CurrentTimeText>
      </Slider>
      <DurationText>3:38</DurationText>
    </Container>
  )
};

const Container = styled.View<ViewProps>`
  ${Styles.absolute_full}
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DurationText = styled(AvenirNextRegular)`
  color: white;
  font-size: ${FontSize._15}px;
  margin-top: ${Sizes.vScale(90)}px;
  margin-horizontal: ${Sizes.hScale(18)}px;
`;

const Slider = styled.View<ViewProps & {progress: number}>`
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: ${props => props.progress * 100}%;
  background-color: rgba(216, 216, 216, 0.44);
  border-right-width: ${StyleSheet.hairlineWidth}px;
  border-right-color: white;
  align-items: flex-end;
  justify-content: center;
  padding-right: 15px;
`;

const CurrentTimeText = styled(AvenirNextRegular)`
  color: white;
  font-size: ${FontSize._44}px;
`;

export default SeekDisplay;
