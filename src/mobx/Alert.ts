import {action, observable, computed} from 'mobx';
import {DropdownAlertType} from 'react-native-dropdownalert';

class Alert {
  _title = '';
  _message = '';
  _type: DropdownAlertType = 'success';

  @observable _visible = false;

  @computed
  get visible() {
    return this._visible;
  }

  @computed
  get payload() {
    return {
      title: this._title,
      message: this._message,
      type: this._type,
    };
  }

  @action.bound
  show(type: DropdownAlertType, message: string, title?: string) {
    this._type = type;
    this._message = message;
    this._title = title ?? 'Chune';
    this._visible = true;
  }

  @action.bound
  hide() {
    this._visible = false;
  }

  showError(message: string, title?: string) {
    this.show('error', message, title);
  }

  showInfo(message: string, title?: string) {
    this.show('info', message, title);
  }

  showWarn(message: string, title?: string) {
    this.show('warn', message, title);
  }

  showSuccess(message: string, title?: string) {
    this.show('success', message, title);
  }
}

export default Alert;
