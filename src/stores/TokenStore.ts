import * as Storage from '@/utils/AsyncStorage';
import {isEmpty} from 'lodash';

const _tag = 'TokenStore::';
class TokenStore {
  _token: string | null | undefined;
  _key: string;

  constructor(key: string) {
    this._key = key;
  }

  initialize = () => {
    const self = this;
    return Storage.getString(this._key)
      .then((v: string | null) => {
        if (v) {
          self._token = v;
        }
      })
      .catch((error: Error) => {
        console.log(_tag, 'TokenStore::initialize() - Error while initialization', error);
      });
  };

  get value(): string | null | undefined {
    return this._token;
  }

  get isValid(): boolean {
    return !isEmpty(this._token);
  }

  logOut = () => {
    this._token = undefined;
    Storage.remove(this._key);
  };

  setValue = (value: string) => {
    this._token = value;
    Storage.putString(this._key, value);
  };

  toString(): string {
    return this._key;
  }
}

export default TokenStore;
