/**
 * Simple mobx flag that indicates update.
 */
import {observable, action, computed} from 'mobx';

class Flag<Params> {
  @observable _flag: number = 0;
  _params?: Params;

  @computed
  get value(): {flag: number; params?: Params} {
    return {flag: this._flag, params: this._params};
  }

  @action.bound
  signal(params: Params) {
    this._flag = this._flag + 1;
    this._params = params;
  }
}

export default Flag;
