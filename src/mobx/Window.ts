import {observable, action, computed} from 'mobx';
import {Dimensions, StatusBar, Platform} from 'react-native';

export interface Size {
  width: number;
  height: number;
}

class Window {
  @observable _size: Size = {width: 0, height: 0};

  constructor() {
    this._updateWindow(Dimensions.get('window'));

    const self = this;
    Dimensions.addEventListener('change', ({window}) => {
      self._updateWindow(window);
    });
  }

  isAndroid = Platform.OS === 'android';
  isiOS = Platform.OS === 'ios';

  @computed
  get width(): number {
    return this._size.width;
  }

  @computed
  get height(): number {
    return this._size.height;
  }

  @computed
  get size(): Size {
    return this._size;
  }

  @computed get isPortrait(): boolean {
    return this.size.width <= this.size.height;
  }

  @computed get isLandscape(): boolean {
    return this.size.width > this.size.height;
  }

  @action.bound
  _updateWindow(size: Size) {
    if (this.isAndroid) {
      size.height -= StatusBar?.currentHeight ?? 0;
    }
    this._size = {
      width: size.width,
      height: size.height,
    };
  }
}

export default Window;
