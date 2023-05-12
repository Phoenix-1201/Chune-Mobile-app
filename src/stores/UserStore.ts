import User from '@/mobx/User';
import * as Storage from '@/utils/AsyncStorage';
import {applySnapshot, getSnapshot, onAction, Instance} from 'mobx-state-tree';

/**
 * Create User Store Synchronised with Local Storage
 * @param key
 */
function createUserStore(key: string): UserStore {
  const store = User.create() as UserStore;

  store.initialize = function () {
    // When module is loading, just load into state.
    return Storage.getObject(key)
      .then((snapshot: any) => {
        if (snapshot) {
          applySnapshot(store, snapshot);
        }
      })
      .catch((e: Error) => {
        console.error('UserStore::initialize() : Error Occurred:', e);
      });
  };

  function scheduleWrite2Storage() {
    if (store._saveTimeoutHandler) {
      clearTimeout(store._saveTimeoutHandler);
    }
    // Save to local storage
    store._saveTimeoutHandler = setTimeout(() => {
      console.log('scheduleWrite2Storage(): Saving state to local storage');
      Storage.putObject(key, getSnapshot(store));
    }, 300);
  }

  // When any action is called, store the data.
  onAction(store, () => {
    scheduleWrite2Storage();
  });

  return store;
}

export interface UserStore extends Instance<typeof User> {
  initialize: () => Promise<void>;
  _saveTimeoutHandler: any;
}

export default createUserStore;
