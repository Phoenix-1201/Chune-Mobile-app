import {applySnapshot, types} from 'mobx-state-tree';
import {isEmpty, isNil} from 'lodash';
import {defInt, defNumber, defString, nullableDate} from './MSTTypes';
import {User as UserSnapshot} from '@/types';

const User = types
  .model('User', {
    id: defString,
    balance: defNumber,
    chatId: defString,
    playerId: defString,
    //services: types.array(types.frozen),
    //createdAt: types.string,
    //updatedAt: types.string,
    username: defString,
    email: defString,
    //phones${Phone}
    //groups${Group}
    //permissions${Permission}
    fullName: defString,
    //site: types.maybeNull(Site),
    title: defString,
    avatar: defString,
    unreadNotifications: defInt,
    braintreeCustomerId: defString,
    //paymentMethods: types.array(),
    lunchtime: nullableDate,
    firstName: defString,
    middleName: defString,
    lastName: defString,
    dateOfBirth: defString,
    gender: defString,
    //settings${UserSetting}
  })
  .views((self) => ({
    get isLoggedIn(): boolean {
      return !isEmpty(self.id);
    },
    get isProfileUnset(): boolean {
      const unset =
        isEmpty(self.email) ||
        isEmpty(self.fullName) ||
        isEmpty(self.id) ||
        // isEmpty(get(self, 'site.id')) ||
        isEmpty(self.title) ||
        isNil(self.lunchtime);
      return unset;
    },
  }))
  .actions((self) => ({
    update: (data: UserSnapshot) => {
      try {
        console.log('UserInfoStore::update() - updating user info data ', data);
        applySnapshot(self, data);
      } catch (ex) {
        console.log('UserInfoStore::update() - Error occurred', ex);
      }
    },
    logOut: () => {
      // Apply empty snapshot
      applySnapshot(self, {});
    },
    logIn: (data: UserSnapshot) => {
      try {
        // TODO: This should be change later
        console.log('User::logIn() - updating user info data ', data);
        applySnapshot(self, data);
      } catch (ex) {
        console.log('User::logIn() - Error occurred', ex);
      }
    },
  }));

// Add a volatile state to the User, And please keep in mind that it won't be observable by default (The volatile state)
export default User.extend(self => {
  let _isTokenVerified = false;
  return {
    views: {
      get isTokenVerified() {
        return _isTokenVerified;
      }
    },
    actions: {
      setTokenVerified(){
        _isTokenVerified = true;
      }
    }
  }
});
