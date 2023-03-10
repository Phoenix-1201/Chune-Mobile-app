import TabBarStyle from './TabBarStyle';
import {Platform} from 'react-native';

export const tabBarStyle = TabBarStyle.top;

export const AppUpdate = {
  link2App: () => {
    return Platform.OS === 'ios'
      ? 'itms-apps://itunes.apple.com/us/app/id1410169907?mt=8'
      : 'http://play.google.com/store/apps/details?id=com.flute.tech';
  },
  title: 'ChewBox',
  message:
    'A new version of ChewBox is available. For best experience, update your app by tapping "Update".',
};
