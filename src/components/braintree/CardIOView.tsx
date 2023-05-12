import React, {Component, ReactElement} from 'react';
import {requireNativeComponent} from 'react-native';

export interface Props {
  languageOrLocale:
    | 'ar'
    | 'da'
    | 'de'
    | 'en'
    | 'en_AU'
    | 'en_GB'
    | 'es'
    | 'es_MX'
    | 'fr'
    | 'he'
    | 'is'
    | 'it'
    | 'ja'
    | 'ko'
    | 'ms'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'pt_BR'
    | 'ru'
    | 'sv'
    | 'th'
    | 'tr'
    | 'zh-Hans'
    | 'zh-Hant'
    | 'zh-Hant_TW';
  guideColor?: string;
  useCardIOLogo: boolean;
  hideCardIOLogo: boolean;
  allowFreelyRotatingCardGuide: boolean;
  scanInstructions: string;
  scanOverlayView?: ReactElement;
  scanExpiry: boolean;
  scannedImageDuration: number;
  detectionMode: 'cardImageAndNumber' | 'cardImageOnly' | 'automatic';
  onScanCard: () => any;
  hidden: boolean;
}

class CardIOView extends Component<Props> {
  displayName = 'CardIOView';

  statics = {
    cardImageAndNumber: 'cardImageAndNumber',
    cardImageOnly: 'cardImageOnly',
    automatic: 'automatic',
  };

  static defaultProps = {
    onScanCard: () => {},
    useCardIOLogo: false,
    hideCardIOLogo: true,
    hidden: false,
    scanExpiry: true,
    allowFreelyRotatingCardGuide: true,
    detectionMode: 'cardImageAndNumber',
    scannedImageDuration: 2,
    scanInstructions: 'Hold card here. It will scan automatically.',
  };

  render() {
    return <RCTCardIOView {...this.props} />;
  }
}

const RCTCardIOView = requireNativeComponent('RCTCardIOView');

export default CardIOView;
