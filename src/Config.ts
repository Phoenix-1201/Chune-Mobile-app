import env from 'react-native-config';

export const AppDetails = {
  appName: 'Chune'
}

export const AppStores = {
  ios: 'id1453895499', // itms-apps://itunes.apple.com/us/app/id1453895499?mt=8
  android: 'com.chune.adamari' // http://play.google.com/store/apps/details?id=
}

export const EndPoint = {
  apiUrl: env.API_URL,
  fileUrl: env.FILE_URL,
  wssUrl: env.WSS_URL,
};

export const OneSignal = {
  appId: 'ad48405c-5a35-4a5e-a5b6-01b7678e03b6',
};

export const SentryConfig = {
  dsn: 'https://29435e0aa2b04d2885892a8c4926ce32@o327848.ingest.sentry.io/5228941'
}

export default {
  AppDetails,
  AppStores,
  EndPoint,
  OneSignal,
  SentryConfig
};
