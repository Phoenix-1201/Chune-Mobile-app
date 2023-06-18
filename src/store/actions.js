import { AppDetails } from '@/Config';
import * as internalActions from '@/store/internalActions';
// import store from 'store/dist/store.modern';

const TOKEN_NAME = AppDetails.appName.toLowerCase() + '-token';

export const internal = internalActions;

// const ModalName = [
//   'deleteDeployment',
//   'deleteSandbox',
//   'feedback',
//   'forkServerModal',
//   'liveSessionEnded',
//   'moveSandbox',
//   'netlifyLogs',
//   'newSandbox',
//   'preferences',
//   'searchDependencies',
//   'share',
//   'signInForTemplates',
//   'userSurvey',
//   'liveSessionEnded'
// ];

/*
*
*/
export const setStoredAuthToken = async ({ state }) => {
  // return store.set(TOKEN_NAME, { token: state.authToken, userId: state.user.id });
};

/*
*
*/
export const getStoredAuthToken = async () => {
  // if (!store.get(TOKEN_NAME)) return store.set(TOKEN_NAME, { token: null, userId: null });
  // return store.get(TOKEN_NAME);
};

/*
*
*/
export const removeStoredAuthToken = async () => {
  // return store.remove(TOKEN_NAME);
};

/*
*
*/
export const logout = async ({ state, actions }) => {
  state.user = null;
  state.isLoggedIn = false;
  state.authToken = null;

  await actions.removeStoredAuthToken();
  return true;
};

/*
*
*/
export const login = async ({ effects, state, actions }, variables) => {
  try {
    const { login } = await effects.gql.mutations.login(variables);

    state.user = login.user;
    state.isLoggedIn = true;
    state.authToken = login.token;

    await actions.setStoredAuthToken();
    return true;

  } catch (e) {
    await actions.removeStoredAuthToken();
    state.errors = e.response.errors;
  }
}

/*
*
*/
export const loginWithToken = async ({ effects, state, actions }, variables) => {
  if (!variables.token || !variables.userId) {
    state.isAuthenticating = false;
    return;
  }

  try {
    const { loginWithToken } = await effects.gql.mutations.loginWithToken(variables);

    state.user = loginWithToken.user;
    state.isLoggedIn = true;
    state.authToken = variables.token;
    state.isAuthenticating = false;

    await actions.setStoredAuthToken();
    return true;

  } catch (e) {
    console.log('e', e);
    state.isAuthenticating = false;
    await actions.removeStoredAuthToken();
    state.errors = e.response.errors;
  }
}

/*
*
*/
export const focusInput = ({ state }) => {
  state.errors = [];
};

/*
*
*/
export const connectionChanged = ({ state }, connected) => {
  state.connected = connected;
};
















/*
*
*/
export const signInClicked = ({ state }, redirectTo) => {
  state.signInModalOpen = true;
  state.redirectOnLogin = redirectTo || '';
};

/*
*
*/
export const signOutClicked = async ({ state, effects, actions }) => {
  effects.analytics.track('Sign Out', {});
  state.workspace.openedWorkspaceItem = 'files';
  if (state.live.isLive) {
    actions.live.internal.disconnect();
  }
  await effects.api.signout();
  effects.jwt.reset();
  state.user = null;
  effects.browser.reload();
};

/*
*
*/
export const signInButtonClicked = async ({ actions, state }, options) => {
  if (!options) {
    await actions.internal.signIn({
      useExtraScopes: false,
    });
    state.signInModalOpen = false;
    return;
  }
  await actions.internal.signIn(options);
  state.signInModalOpen = false;
};

/*
*
*/
export const modalOpened = ({ state, effects }, props) => {
  effects.analytics.track('Open Modal', { modal: props.modal });
  state.currentModal = props.modal;
  if (props.modal === 'preferences' && props.itemId) {
    state.preferences.itemId = props.itemId;
  } else {
    state.currentModalMessage = props.message || null;
  }
};

/*
*
*/
export const modalClosed = ({ state }) => {
  state.currentModal = null;
};

/*
*
*/
export const toggleSignInModal = ({ state }) => {
  state.signInModalOpen = !state.signInModalOpen;
};

/*
*
*/
export const addNotification = ({ effects }, { message, type, timeAlive }) => {
  console.log(type, 'type addNotification')
  effects.notificationToast.add({
    message,
    // status: effects.notificationToast.convertTypeToStatus(type),
    timeAlive: timeAlive * 1000,
  });
};

/*
*
*/
export const removeNotification = ({ state }, id) => {
  const notificationToRemoveIndex = state.notifications.findIndex(
    notification => notification.id === id
  );

  state.notifications.splice(notificationToRemoveIndex, 1);
};

/*
*
*/
export const notificationAdded = ({ effects }, { title, notificationType, timeAlive }) => {
  console.log(notificationType, 'notificationType notificationAdded')
  effects.notificationToast.add({
    message: title,
    // status: convertTypeToStatus(notificationType),
    timeAlive: timeAlive ? timeAlive * 1000 : undefined,
  });
};

/*
*
*/
export const notificationRemoved = ({ state }, { id }) => {
  const { notifications } = state;
  const notificationToRemoveIndex = notifications.findIndex(
    notification => notification.id === id
  );

  state.notifications.splice(notificationToRemoveIndex, 1);
};

/*
*
*/
export const track = ({ effects }, { name, data }) => {
  effects.analytics.track(name, data);
};
