/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform, UIManager } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import StoresProvider from '@/stores/Provider';
import LoadingHud from '@/components/hud';
import DropdownAlert from '@/components/DropdownAlert';
import { ThemeProvider } from '@/styles/styled-components';
import Router from '@/Router';
import Themes from '@/styles/Themes';
import createApolloClient from '@/ApolloClient';
import Bottom from '@/screens/Bottom';
import Feather from 'react-native-vector-icons/Feather';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import RemixIcon from '@/components/controls/Icon';
import * as Sentry from '@sentry/react-native';
import { SentryConfig } from '@/Config';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from '@/store';

Sentry.init({
  dsn: SentryConfig.dsn,
});

const overmind = createOvermind(config, {
  devtools: false,
});

console.disableYellowBox = true;

const client = createApolloClient();

Feather.loadFont();
RemixIcon.loadFont();
SLIcon.loadFont();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: React.FC = () => {
  return (
    <Provider value={overmind}>
      <ApolloProvider client={client}>
        <StoresProvider>
          <ActionSheetProvider>
            <ThemeProvider theme={Themes.base}>
              <Router />
              <LoadingHud />
              <DropdownAlert />
            </ThemeProvider>
          </ActionSheetProvider>
        </StoresProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
