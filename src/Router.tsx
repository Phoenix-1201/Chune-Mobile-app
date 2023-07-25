import React, { useEffect, useState } from 'react';
import styled from '@/styles/styled-components';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SplashScreen from 'react-native-splash-screen';
import { enableScreens } from 'react-native-screens';
import { useStores } from '@/hooks';
import { tabBarStyle } from '@/constants';
import { Screens } from '@/constants/Navigation';
import TabBarStyle from '@/constants/TabBarStyle';

// Import Components
import Home from '@/screens/Home';
import { Container } from '@/components';
import Bottom from '@/screens/Bottom';
import { StatusBar } from 'react-native';
import AddPlayListModal from "@/screens/Menu/components/AddPlayListModal";
import PlayLists from "@/screens/Menu/components/PlayLists";
import Songs from "@/screens/Menu/components/Songs";



const Stack = createStackNavigator();
const isTopTabBar = tabBarStyle === TabBarStyle.top;
const Tab = isTopTabBar ? createMaterialTopTabNavigator() : createBottomTabNavigator();
const Drawer = createDrawerNavigator();

enableScreens();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const iosModalOptions: <ParamList extends ParamListBase>(props: {
  route: RouteProp<ParamList, keyof ParamList>;
  navigation: any;
}) => object = ({ route, navigation }) => ({
  ...TransitionPresets.ModalPresentationIOS,
  cardOverlayEnabled: true,
  gestureEnabled: true,
  headerShown: false,
  headerStatusBarHeight: navigation.dangerouslyGetState().routes.indexOf(route) > 0 ? 0 : undefined,
});

const Router: React.FC = () => {
  const store = useStores();
  const [initialized, setInitialized] = useState(false);

  // Initialize Store
  useEffect(() => {
    store.initialize().then(() => {
      SplashScreen.hide();
      setInitialized(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!initialized) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <Stack.Screen name={Screens.home} component={Home} />

          <Stack.Screen name={Screens.bottomPlaylists} component={PlayLists} options={{
            headerShown: true,
            gestureEnabled: true
          }} />
          <Stack.Screen name={Screens.bottomPlaylistSongs} component={Songs} options={{
            headerShown: true,
            gestureEnabled: true
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom />
    </>
  );
};

export default Router;

const TabNavigatorContainer = styled(Container)``;
