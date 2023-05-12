import {action, computed, observable} from 'mobx';

class LoadingHud {
  @observable _counter: number = 0;

  @computed
  get isVisible(): boolean {
    return this._counter > 0;
  }

  @action.bound
  show() {
    this._counter += 1;
  }

  @action.bound
  hide() {
    this._counter = Math.max(this._counter - 1, 0);
  }

  @action.bound
  reset() {
    this._counter = 0;
  }
}

export default LoadingHud;
