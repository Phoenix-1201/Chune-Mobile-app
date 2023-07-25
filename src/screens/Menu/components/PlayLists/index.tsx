import React, { useState } from 'react';
import { AddItem, ItemContainer, ItemTitle, ListDivider, MenuContainer } from '../';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import { observer } from 'mobx-react';
import { FlatList } from "react-native";
import { Screens } from "@/constants/Navigation";
import { Space } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { hScale } from "@/styles/Sizes";
import AddPlayListModal from "@/screens/Menu/components/AddPlayListModal";
import { useOvermind } from '@/store';

export enum ListItem {
  Adamari,
  Chill
}

const listItems = [
  { title: 'Adamari Playlists', key: ListItem.Adamari },
  { title: 'Chill & Cut', key: ListItem.Chill }
];

const PlayLists: React.FC = () => {
  const navigation = useNavigation();
  const [isOpen, setOpen] = useState(false);
  const { state, actions } = useOvermind();
  console.log("--->", state)

  const collections = state.mediaCollections?.mediaCollections || {};

  const data = Object.keys(collections)?.map(o => ({
    title: collections[o].name,
    key: collections[o].id
  }))

  const _onPressList = (item: ListItem) => {
    switch (item) {
      case ListItem.Adamari:
        navigation.navigate(Screens.bottomPlaylistSongs);
        break;
      case ListItem.Chill:
        navigation.navigate(Screens.bottomPlaylistSongs);
        break;
      default:
        break;
    }
  };
  return (
    <MenuContainer>
      <FlatList
        data={listItems}
        renderItem={({ item, index }) => (<PlayListItem item={item} key={item.key} onPress={() => _onPressList(item.key)} />)}
        ItemSeparatorComponent={ListDivider}
      />
      <AddItem onPress={() => setOpen(true)}>
        <SLIcon color="black" name="plus" size={hScale(24)} />
      </AddItem>
      <AddPlayListModal open={isOpen} onCreate={() => setOpen(false)} />
    </MenuContainer>
  );
};

export default observer(PlayLists);

const PlayListItem: React.FC<{ item: { title: string, key: ListItem }, onPress: () => void }> = (props) => (
  <ItemContainer onPress={props.onPress}>
    <ItemTitle>{props.item.title}</ItemTitle>
    <Space width={10} />
    <SLIcon color={'black'} name={'control-play'} size={hScale(18)} />
  </ItemContainer>
);
