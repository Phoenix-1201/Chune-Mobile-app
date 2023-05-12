import Alert from '@/mobx/Alert';
import LoadingHud from '@/mobx/LoadingHud';
import createUserStore, {UserStore} from './UserStore';
import PushNotification from '@/mobx/PushNotification';
import TokenStore from './TokenStore';
import Window from '@/mobx/Window';
import {AuthPayload} from '@/types';
import BottomSheetNavigation from '@/mobx/BottomSheetNavigation';
import Player from '@/mobx/Player';
import {Instance} from 'mobx-state-tree';

interface Flags {}

export interface Stores {
  user: UserStore;
  notification: PushNotification;
  alert: Alert;
  hud: LoadingHud;
  token: TokenStore;
  window: Window;
  flags: Flags;
  bottomSheetNav: Instance<typeof BottomSheetNavigation>;
  player: Instance<typeof Player>;


  initialize(): Promise<void>;
  logIn(payload: AuthPayload): void;
  logOut(): void;
}

function createStores(): Stores {
  // Create User Store
  const user = createUserStore('user_info_snapshot');

  // Push Notification
  const notification = new PushNotification();

  // Loading Hud
  const hud = new LoadingHud();

  // DropDown Alert
  const alert = new Alert();

  // Token Store
  const token = new TokenStore('user_token');

  // Window
  const window = new Window();

  // flags
  const flags = {}; // Flags

  const bottomSheetNav = BottomSheetNavigation.create();

  const player = Player.create();

  // Assign functions
  const initialize = async function () {
    await user.initialize();
    notification.initialize();
    await token.initialize();
  };

  const logIn = function (loginPayload: AuthPayload) {
    user.logIn(loginPayload.user);
    user.setTokenVerified();
    token.setValue(loginPayload.token);
    notification.subscribe(); // Subscribe to notifications
  };

  const logOut = function () {
    user.logOut();
    token.logOut();
    notification.unsubscribe();
  };

  const store = {
    user,
    notification,
    hud,
    alert,
    token,
    window,
    flags,
    bottomSheetNav,

    initialize,
    logIn,
    logOut,

    player
  };
  return store;
}
// Create Store
const stores = createStores();

export default stores;
