import React from 'react';
import useViewModel from './methods';
import {BgImage, VideoView, BlurMask} from '../';
import styled from '@/styles/styled-components';
import * as Styles from '@/styles';

import Video from 'react-native-video';
import {useStores} from "@/hooks";
import {observer} from "mobx-react";
import {PlayerMediaInfo} from "@/types";

import { useQueryMediaCollections } from '@/hooks/Queries'
export interface PlayerProps {
}

const Player: React.FC<PlayerProps> = (props) =>{
  const { player:playerStore } = useStores();
  const vm = useViewModel();
  let currMediaInfo: PlayerMediaInfo | null = null;
  if (playerStore.currIndex >= 0) {
    currMediaInfo = playerStore.playList[playerStore.currIndex];
  }
  
  const nextVideo = () => {
    if (playerStore.currIndex != playerStore.playList?.length-1)
    {
      playerStore.setCurrIndex(playerStore.currIndex+1);
    }
    else
    {
      playerStore.setCurrIndex(0);
    }
  }
  return (
    <>
      {!currMediaInfo?.isVideo && (
        <CoverImageContainer>
          <BgImage source={vm.coverImage} />
          <BlurMask />
          <CoverImage source={vm.coverImage} size = {vm.coverImageSize}/>
        </CoverImageContainer>
        )
      }
      {
        (currMediaInfo !== null) && (
          <VideoPlayer
            playInBackground
            source={{uri: currMediaInfo?.mediaUrl}}
            muted={false}
            repeat={false}
            paused={!playerStore.isPlaying}
            onLoad={() => {}}
            onProgress={() => {}}
            onEnd={() => nextVideo()}
          />
        )
      }
    </>
  )
};

export default observer(Player);
const Text = styled.Text`
  color: #ff0000
`;
const CoverImageContainer = styled.View`
  ${Styles.absolute_full}
  align-items: center;
  justify-content: center;  
`;

const VideoPlayer = styled(Video)`
  ${Styles.absolute_full}
  ${Styles.bg_transparent}
`;

const CoverImage = styled.Image<{size: number}>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;


