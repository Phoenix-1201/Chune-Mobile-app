import React from 'react';
import styled from '@/styles/styled-components';
import * as Styles from '@/styles';
import LinearGradient from 'react-native-linear-gradient';
import {BgImage} from '@/screens/Home/components/index';
import { useStores } from '@/hooks';
import Images from '@/styles/Images';
import {observer} from 'mobx-react';

export interface OverlayProps {
  isEnabled: boolean;
  onShowControls: (isOpen: boolean) => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
    const {window, player:playerStore} = useStores();
  return (
    <Container pointerEvents={props.isEnabled ? 'auto' : 'none'}>
      <Button onPress={() => !playerStore.isFirst() && playerStore.goPrevious()}/>
      <Button onPress={() => {props.onShowControls(true)}}/>
      <Button onPress={() => !playerStore.isLast() && playerStore.goNext()}/>
    </Container>
  )
};

const Container = styled.View`
  flex-direction: row;
  ${Styles.absolute_full};
  top: 90px;
  bottom: 90px; 
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
`;

export default Overlay;
