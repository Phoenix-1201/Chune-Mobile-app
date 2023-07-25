import React, {useState} from 'react';
import {Alert, Linking, Animated, PanResponder, Dimensions} from 'react-native';
import {getVersion} from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {useStores} from '@/hooks';
import { useQueryMediaCollections } from '@/hooks/Queries'

import {AppUpdate} from '@/constants';
import {
  useCreateAppUser,
  useLoginWithToken,
  useVerifySmsCode,
} from '@/hooks/Mutations';
import {MediaCollection, Member, MemberContainer, PlayerMediaInfo, User} from '@/types';
import getYoutubeVideoUrl, {isYoutubeUrl} from "@/utils/youtube";

const tag = 'Home.Methods::';

function createLogoAnimation(value: Animated.Value, delay: number = 1000) {
  return Animated.spring(value, {
    toValue: 1,
    friction: 0.1,
    delay,
    useNativeDriver: true,
  });
}

function useViewModel() {
  const {hud, user, token, alert, player: playerStore} = useStores();
  const navigation = useNavigation();
  const screen = Dimensions.get('screen');
  const isLand = screen.width > screen.height;
  const [isSearch, setIsSearch] = useState(false);
  const [isArticleDetails, setIsArticleDetails] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [call, {data:mediaCollections}] = useQueryMediaCollections();
  
  const fetchPlayerList = () => {
      call();
  };
  const parsePlayerList = () => {
    // @ts-ignore
    if (mediaCollections) {

      const playerMediaList:PlayerMediaInfo[] = []
      const mediaMembers: Member[] = mediaCollections.map(mediaCollection => mediaCollection.members.map(member => member.member))
          .reduce((acc, cur) => acc.concat(cur), []);

      const urlParseReqList:any[] = []
      mediaMembers.forEach(mediaMember => {
        const subtitle = (mediaMember.description !== null) ? mediaMember.description:
            mediaMember.creators.map(creator => creator.name).join(',');

        const isVideo = isYoutubeUrl(mediaMember.source);
          playerMediaList.push({
          mediaId: mediaMember.id,
          title: mediaMember.name,
          subtitle: subtitle,
          isVideo: isVideo,
          mediaUrl: ''
        })
        if (isVideo) {
          urlParseReqList.push(getYoutubeVideoUrl(mediaMember.source))
        } else {
          urlParseReqList.push(new Promise((resolve => resolve(mediaMember.source))));
        }
      })

      // console.log('urlParseReqList', urlParseReqList)
      Promise.all(urlParseReqList).then(results => {
        for (let i = 0; i < results.length; i++) {
          const result = results[i];
          playerMediaList[i].mediaUrl = result
        }
        console.log('playerMediaList', playerMediaList)
        playerStore.setPlayList(playerMediaList);
        playerStore.setCurrIndex(0);
        playerStore.setPlaying(true);
      })
    }
  }

  const onPressSearch = (action: boolean) => {
    setIsSearch(action);
  };

  const onPressArticleDetails = (action: boolean) => {
    setIsArticleDetails(action);
  }

  return {
    isLand,
    onPressSearch,
    onPressArticleDetails,
    isSearch,
    isArticleDetails,
    isOpen,
    setOpen,
    fetchPlayerList,
    parsePlayerList,
    mediaCollections
  };
}

export default useViewModel;

// Expose other methods that will be used
