import React from 'react';

import { View } from 'react-native'
import useViewModel from './methods';
import { Container } from './components'
import Loading from '@/components/Loading'
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '@/constants/Navigation';
import MainMenu from './components/MainMenu';
import PlayLists from './components/PlayLists';
import Songs from './components/Songs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

// import EventDetail from '@/screens/eventDetail'
import MenuView from '@/screens/modals/Menu'
import Profile from '@/screens/modals/Profile'
import Payment from '@/screens/modals/Payment'
import StartClash from '@/screens/modals/createEvent/StartClash'
import SetupRound from '@/screens/modals/createEvent/SetupRound'
import ClashDone from '@/screens/modals/createEvent/ClashDone'
import InviteList from '@/screens/modals/InviteList'
import AnswerClash from '@/screens/modals/AnswerClash'
import NewDate from '@/screens/modals/NewDate'
import MyAccount from '@/screens/modals/MyAccount'
import Transactions from '@/screens/modals/Transactions'
import History from '@/screens/modals/History'
import TicketPurchases from '@/screens/modals/TicketPurchases'
import CreateEvent from '@/screens/modals/createEvent/CreateEvent'
import CreateLiveEvent from '@/screens/modals/createEvent/CreateLiveEvent'
import TalkShow from '@/screens/modals/createEvent/TalkShow'
import Notifications from '@/screens/modals/Notifications'
import PhysicalEvent from '@/screens/modals/createEvent/PhysicalEvent';
import SetupDays from '@/screens/modals/createEvent/SetupDays';
import SetupTickets from '@/screens/modals/createEvent/SetupTickets';

import { useOvermind } from '@/store';


const Stack = createStackNavigator();

export interface MenuProps { }
const Menu: React.FC<MenuProps> = (props) => {

  // const { state, actions } = useOvermind();
  // const users = await actions.users.getUsers();
  // console.log(users, 'users');

  const vm = useViewModel(props);

  return (
    <Container>
      {!vm.isCheckingToken &&
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false
            }}
          >
            <Stack.Screen name={Screens.bottomMainMenu} component={MainMenu} />
            <Stack.Screen name={Screens.bottomPlaylists} component={PlayLists} />
            <Stack.Screen name={Screens.bottomPlaylistSongs} component={Songs} />

            <Stack.Screen name={Screens.Menu} component={MenuView} />
            <Stack.Screen name={Screens.Profile} component={Profile} />
            <Stack.Screen name={Screens.Payment} component={Payment} />
            <Stack.Screen name={Screens.StartClash} component={StartClash} />
            <Stack.Screen name={Screens.SetupRound} component={SetupRound} />
            <Stack.Screen name={Screens.ClashDone} component={ClashDone} />
            <Stack.Screen name={Screens.InviteList} component={InviteList} />
            <Stack.Screen name={Screens.AnswerClash} component={AnswerClash} />
            <Stack.Screen name={Screens.NewDate} component={NewDate} />
            <Stack.Screen name={Screens.MyAccount} component={MyAccount} />
            <Stack.Screen name={Screens.Transactions} component={Transactions} />
            <Stack.Screen name={Screens.History} component={History} />
            <Stack.Screen name={Screens.TicketPurchases} component={TicketPurchases} />
            <Stack.Screen name={Screens.CreateEvent} component={CreateEvent} />
            <Stack.Screen name={Screens.Notifications} component={Notifications} />
            <Stack.Screen name={Screens.CreateLiveEvent} component={CreateLiveEvent} />
            <Stack.Screen name={Screens.TalkShow} component={TalkShow} />
            <Stack.Screen name={Screens.PhysicalEvent} component={PhysicalEvent} />
            <Stack.Screen name={Screens.SetupDays} component={SetupDays} />
            <Stack.Screen name={Screens.SetupTickets} component={SetupTickets} />
            
          </Stack.Navigator>
          
        </NavigationContainer>
      }
      {vm.isCheckingToken && <Loading />}
      
    </Container>
  );
};

export default Menu;
