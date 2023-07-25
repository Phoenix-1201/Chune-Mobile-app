import React, {MutableRefObject} from 'react'
import {SignInProps} from '@/screens/SignIn';
import {LayoutAnimation} from 'react-native'
import {useCreateAppUser, useLoginWithToken, useVerifySmsCode} from '@/hooks/Mutations'
import {User} from '@/types'
import {getVersion} from 'react-native-device-info'
import { useStores } from '@/hooks';
import { isEmpty } from 'lodash';

export enum SignInStep {
  Initial,
  Number,
  Code,
}

export function useViewModel(props: SignInProps) {
  const {user, token: tokenStore, alert} = useStores();
  const [step, setStep] = React.useState<SignInStep>(SignInStep.Initial);
  const [number, setNumber] = React.useState('');
  const [code, setCode] = React.useState('');
  const containerMarginLeft = `${-100 * step}%`;
  const [apiCreateAppUser] = useCreateAppUser();
  const [apiVerifySmsCode] = useVerifySmsCode();
  const [apiLoginWithToken] = useLoginWithToken();
  const userDataRef = React.useRef<User|undefined>(undefined);
  const [isLoading, setLoading] = React.useState(false);

  const onResendCode = () => {
    apiCreateAppUser(number, true, false)
      .then(payload => {
      console.log('SignIn::ViewModel::apiCreateAppUser() - Payload Arrived : ', payload);
      userDataRef.current = payload.user;
    }).catch(error => {
      console.log('SignIn::ViewModel::apiCreateAppUser() - Failed to Request Code : ', error);
    });
  };

  const onVerifyCode = async () => {
    const userData = userDataRef.current;
    if (!userData) {
      return;
    }

    if (isEmpty(code)) {
      alert.showWarn('Please enter a valid code');
      return;
    }

    try {
      setLoading(true);
      const { token } = await apiVerifySmsCode(userData.id, code, number);
      const { user: info } = await apiLoginWithToken(token, userData.id);
    }catch(ex){
      console.log('SignIn::ViewModel::onVerifyCode() - Exception Occurred :', ex);
    }finally {
      setLoading(false)
    }
  };

  return {
    step,
    gotoStep: (newStep: SignInStep) => {
      setStep(newStep);
      if (newStep === SignInStep.Code) {
        // Call the api.
        onResendCode()
      }
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    },
    containerMarginLeft,

    number,
    setNumber,

    code,
    setCode,

    onVerifyCode,
    onResendCode,

    isLoading
  };
}
