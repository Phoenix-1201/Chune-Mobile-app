import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { ItemContainer, ItemTitle, ListDivider, MenuContainer, ItemContent, ItemDescription } from './';
import { Space, Feather } from '@/components';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { Screens } from '@/constants/Navigation';
import { useStores } from '@/hooks';
import { observer } from 'mobx-react';
import SubscriptionModal from './SubscriptionModal';

export enum MenuItem {
  Playlists,
  SpecialEvents,
  TicketPurchases,
  CreateEvent,
  MyAccount
}

const menuItems = [
  { title: 'Playlists', key: MenuItem.Playlists, description: "Listen to your saved playlists and popular playlists" },
  { title: 'Special Events', key: MenuItem.SpecialEvents, description: "Buy tickets to upcoming special events" },
  { title: 'Ticket Purchases', key: MenuItem.TicketPurchases, description: "Review all your ticket purchases to special events" },
  { title: 'Create an event', key: MenuItem.CreateEvent, description: "Start clashes, host live events, sell tickets and more" },
  { title: 'My Account', key: MenuItem.MyAccount, description: "Manage your profile and payment methods" },
];

const MainMenu = () => {
  const navigation = useNavigation();
  const navigationLength = useNavigationState((state) => state.routes.length);
  const { bottomSheetNav } = useStores();
  const route = useRoute();

  console.log("========>", route, navigation)

  useEffect(() => {
    bottomSheetNav.update(navigationLength);
  }, [navigationLength]);

  React.useEffect(() => {
    if (bottomSheetNav.backActionFlag > 0) {
      navigation.goBack();
    }
  }, [bottomSheetNav.backActionFlag]);

  const _onPressMenu = (item: MenuItem) => {
    switch (item) {
      case MenuItem.Playlists:
        navigation.navigate(Screens.bottomPlaylists);
        break;
      case MenuItem.SpecialEvents:
        navigation.navigate(Screens.InviteList)
        break;
      case MenuItem.TicketPurchases:
        navigation.navigate(Screens.TicketPurchases)
        break;
      case MenuItem.CreateEvent:
        navigation.navigate(Screens.CreateEvent)
        break;
      case MenuItem.MyAccount:
        navigation.navigate(Screens.Menu)
        break;
      default:
        break;
    }
  };
  return (
    <MenuContainer>
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => (
          <MainMenuItem item={item} onPress={() => _onPressMenu(item.key)} key={item.key} />
        )}
        ItemSeparatorComponent={ListDivider}
      />
      <SubscriptionModal />
    </MenuContainer>
  )
};

export default observer(MainMenu);

const MainMenuItem: React.FC<{ item: { title: string, key: MenuItem, description: string }, onPress: () => void }> = (props) => {
  return (
    <ItemContainer onPress={props.onPress}>
      <ItemContent>
        <ItemTitle>{props.item.title}</ItemTitle>
        <ItemDescription>{props.item.description}</ItemDescription>
      </ItemContent>
      <Space width={10} />
      <Feather color={'black'} name={'chevron-right'} size={24} />
    </ItemContainer>
  );
};
