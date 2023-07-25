import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';
import Images from '@/styles/Images';
import useViewModel from './Methods';
import {useStores} from '@/hooks';
import Overlay from './components/Overlay';
import Bottom from '@/screens/Bottom';
import ArticleDetails from "@/screens/modals/ArticleDetails"


import {
  Screen
} from './components';
import Player from './components/Player';
import Controls from './components/Controls';
import Titles from './components/Titles'
import SeekDisplay from '@/screens/Home/components/SeekDisplay';
import {observer} from "mobx-react";
import {useNavigation} from "@react-navigation/native";
import {Screens} from "@/constants/Navigation";
import { useOvermind } from '@/store';
import Search from "@/screens/Search";

const Home: React.FC<{}> = () => {
  const vm = useViewModel();
  const navigation = useNavigation();
  const { state, actions } = useOvermind();

  React.useEffect(() => {    
    actions.mediaCollections.getMediaCollections();
    vm.fetchPlayerList();
  }, []);

  React.useEffect(() => {
      vm.parsePlayerList();
  }, [vm.mediaCollections])

  return (
    <Screen>
      <Player />
      <Controls onFullScreen={() => {}}
                onArticleDetails={() => vm.onPressArticleDetails(true)}
                onToggleControls={(isOpen) => {vm.setOpen(isOpen)}}
                isOpen={vm.isOpen}
                onSearch={() => vm.onPressSearch(true)}
                onAdd={() => navigation.navigate(Screens.bottomPlaylists)}
      />
      {/*<SeekDisplay/>*/}
      <Overlay isEnabled={!vm.isOpen} onShowControls={(isOpen: boolean) => {vm.setOpen(isOpen)}}/>
      {vm.isSearch && <Search cancel={()=>vm.onPressSearch(false)}/>}
      {vm.isArticleDetails && <ArticleDetails cancel={()=>vm.onPressArticleDetails(false)}/>}
      <Titles />
    </Screen>
  );
};

// Wrap component here, like observe
export default observer(Home);
