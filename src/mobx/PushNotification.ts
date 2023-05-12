import OneSignal, {OpenResult, ReceivedNotification} from 'react-native-onesignal';
import {OneSignal as Config} from '../Config';
import {action, observable} from 'mobx';

class PushNotification {
  @observable playerId?: string;
  @observable notification?: ReceivedNotification;
  @observable openResult?: OpenResult; // Notification Open Result

  initialize() {
    const self = this;
    try {
      OneSignal.init(Config.appId, {kOSSettingsKeyInFocusDisplayOption: 0});
      OneSignal.provideUserConsent(true);
      // OneSignal.inFocusDisplaying(2)
      OneSignal.addEventListener('ids', (device) => {
        self.setPlayerId(device);
      });
    } catch (ex) {
      console.log('PushNotification:: initialize() - ', 'Exception occurred', ex);
    }
  }

  subscribe() {
    // Clear all current cache
    this.notification = undefined;
    this.playerId = undefined;
    this.openResult = undefined;
    try {
      OneSignal.addEventListener('received', this.setNotification);
      OneSignal.addEventListener('opened', this.setOpenResult);
    } catch (error) {
      console.log('PushNotification::subscribe() - Error Occurred', error);
    }
  }

  @action.bound
  unsubscribe() {
    // Clear all current cache
    this.notification = undefined;
    this.playerId = undefined;
    this.openResult = undefined;
    try {
      OneSignal.removeEventListener('received', this.setNotification);
      OneSignal.removeEventListener('opened', this.setOpenResult);
    } catch (error) {
      console.log('PushNotification::unsubscribe() - Error Occurred', error);
    }
  }

  @action.bound
  setPlayerId(playerId: string) {
    this.playerId = playerId;
  }

  @action.bound
  setNotification(notification: ReceivedNotification) {
    this.notification = notification;
  }

  @action.bound
  setOpenResult(openResult: OpenResult) {
    this.openResult = openResult;
  }
}

export default PushNotification;
