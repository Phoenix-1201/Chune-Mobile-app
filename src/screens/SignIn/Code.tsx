import React from 'react';
import styled from '@/styles/styled-components'
import {AvenirNextBold, AvenirNextRegular} from '@/components/controls/Text'
import Sizes, {FontSize} from '@/styles/Sizes'
import MyTextInput, {TextInputDrawable} from '@/components/controls/TextInput'
import {useStores} from '@/hooks'
import {TouchableOpacity} from 'react-native'
import {SignInStep} from '@/screens/SignIn/methods'

export interface Props {
  onBackStep: () => void;
  code: string;
  number: string;
  onChangeCode: (code: string) => void;
  onProceed: () => void;
  onResend: () => void;
  step: SignInStep;
}

const Code: React.FC<Props> = ({
  onBackStep,
  code,
  number,
  onChangeCode,
  onProceed,
  onResend,
  step
}) => {
  const inputRef = React.useRef<any|undefined>();

  React.useEffect( () => {
    //Whenever step changes, just focus the text field
    if (step === SignInStep.Code) {
      inputRef.current?.focus?.();
    }
  }, [step]);

  const _onProceed = () => {
    // Check if the number is a valid mobile number, call the api.
    onProceed();
  }

  const _renderRight = () => {
    return <TextInputDrawable onPress={_onProceed} name={'arrow-right'} />
  };

  const _renderLeft = () => {
    return <TextInputDrawable onPress={onBackStep} name={'chevron-left'} />
  }

  return (
    <Container>
      <SignInTo>SIGN IN TO</SignInTo>
      <LoginTitle>Create Playlists + Save Chunes</LoginTitle>
      <NumberInput
        keyboardType={'phone-pad'}
        value={code}
        onChangeText={onChangeCode}
        placeholder={'Enter Code'}
        textStyle={{textAlign: 'center', fontSize:FontSize._14}}
        inputRef={r => inputRef.current = r}
        renderLeft={_renderLeft}
        renderRight={_renderRight}
      />
      <Narration>{'Check your text messages. We\'ve sent you the code'}</Narration>
      <TouchableOpacity onPress={onResend} style={{marginVertical: Sizes.vScale(5)}}>
        <ResendCode>Resend Code to {number}</ResendCode>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
  justify-content: center;
`;

const SignInTo = styled(AvenirNextBold)`
  font-size: ${FontSize._9}px;
  color: black;
  opacity: 0.5;
`;

const LoginTitle = styled(AvenirNextRegular)`
  font-size: ${FontSize._20}px;
  color: black;
  opacity: 0.5;
`;

const NumberInput = styled(MyTextInput)`
  color: black;
  width: ${Sizes.hScale(260)}px;
`;

const Narration = styled(AvenirNextRegular)`
  margin-top: ${Sizes.vScale(5)}px;
  font-size: ${FontSize._10}px;
  color: #898989;
`;

const ResendCode = styled(AvenirNextRegular)`
  font-size: ${FontSize._10}px;
  color: black;
`
export default Code;
