import React from 'react';
import {ItemContainer, ItemTitle, ListDivider, MenuContainer} from '../';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import {observer} from 'mobx-react';
import {FlatList} from "react-native";
import {Screens} from "@/constants/Navigation";
import {Space} from "@/components";
import {useNavigation} from "@react-navigation/native";
import {hScale} from "@/styles/Sizes";

export enum ListItem {
  Song1,
  Song2
}

const listItems = [
  {title: 'Song 1', key: ListItem.Song1},
  {title: 'Song 2', key: ListItem.Song2}
];

const Songs: React.FC = () => {
  const navigation = useNavigation();

  const _onPressList = (item: ListItem) => {
    switch(item) {
      case ListItem.Song1:
        break;
      case ListItem.Song2:
        break;
      default:
        break;
    }
  };
  return (
    <MenuContainer>
      <FlatList
        data={listItems}
        renderItem={({item, index}) => (<SongItem item={item} key={item.key} onPress={() => _onPressList(item.key)}/>)}
        ItemSeparatorComponent={ListDivider}
      />
    </MenuContainer>
  );
};

export default observer(Songs);

const SongItem: React.FC<{item: {title: string, key: ListItem}, onPress: () => void}> = (props) => (
  <ItemContainer onPress={props.onPress}>
    <ItemTitle>{props.item.title}</ItemTitle>
    <Space width={10} />
    <SLIcon color={'black'} name={'control-play'} size={hScale(18)}/>
  </ItemContainer>
);
