import React, {useState} from 'react';
import {
  Container,
  ControlButton,
  ToggleControlsButton,
  MiddleButtonsContainer,
  PlayControlsContainer,
  CtlBtn, SideControlButton
} from './components';
import Images from '@/styles/Images';
import {BgImage} from '../';
import {useStores} from '@/hooks';
import {observer} from "mobx-react";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


export interface ControlsProps {
  onToggleControls: (isOpen: boolean) => void;
  onFullScreen: () => void;
  onArticleDetails: () => void;
  isOpen: boolean;
  onSearch: () => void;
  onAdd: () => void;
}

const Controls: React.FC<ControlsProps> = (props) => {
  const {window, player:playerStore} = useStores();
  return (
    <Container >
      <BgImage source={window.isPortrait ? Images.background.bg_control_overlay : Images.background.bg_control_overlay_land}
               resizeMode={'cover'}
               width={window.size.width}
               height={window.size.height}
      />
      {props.isOpen && <ToggleControlsButton onPress={() => props.onToggleControls(false)}/>}
      {props.isOpen && <SideControlButton isTop={true} isRight={true} isLandscape={window.isLandscape}
                                          onPress={() => props.onAdd()} name={'plus-circle'} /> }
      {!props.isOpen && <SideControlButton isTop={true} isRight={true} isLandscape={window.isLandscape}
                                           onPress={() => {
                                             props.onSearch();
      }} name={'search'} /> }
      {props.isOpen && <MiddleButtonsContainer>
          <ControlButton onPress={() => !playerStore.isFirst() && playerStore.goPrevious()} name={'rewind'} />
          {playerStore.isPlaying && <ControlButton onPress={() => playerStore.setPlaying(false)} name={'pause'} />}
          {!playerStore.isPlaying && <ControlButton onPress={() => playerStore.setPlaying(true)} name={'play'} />}
          <ControlButton onPress={() => !playerStore.isLast() && playerStore.goNext()} name={'fast-forward'} />
      </MiddleButtonsContainer>}
      <SimpleLineIcons onPress={() => {props.onArticleDetails()}} name={'arrow-right-circle'} size={30} color="white" style={{position: 'absolute', bottom: 50, right: 70}}/>
      <SideControlButton isRight={true} isTop={true} isLandscape={window.isLandscape}
                         onPress={() => {}} name={'maximize'}  />
    </Container>
  )
};

export default observer(Controls);
