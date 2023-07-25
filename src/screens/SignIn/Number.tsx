import React from 'react'
import styled from '@/styles/styled-components'
import {AvenirNextBold, AvenirNextRegular} from '@/components/controls/Text'
import Sizes, {FontSize} from '@/styles/Sizes'
import MyTextInput, {TextInputDrawable} from '@/components/controls/TextInput'
import {useStores} from '@/hooks'
import {pureNumber} from '@/utils'
import {SignInStep} from '@/screens/SignIn/methods'

export interface Props {
  mobileNumber: string;
  onChangeNumber: (number: string) => void;
  onNextStep: () => void;
  step: SignInStep
}

function isValidNumber(number: string) {
  return pureNumber(number).length === 10;
}

const Number: React.FC<Props> = ({mobileNumber, onChangeNumber, onNextStep, step}) => {
  const {alert} = useStores();
  const inputRef = React.useRef<any|undefined>();

  React.useEffect( () => {
    //Whenever step changes, just focus the text field
    if (step == SignInStep.Number) {
      inputRef.current?.focus?.();
    }
  }, [step]);


  const _onNextStep = () => {
    // Check if the number is a valid mobile number, call the api.
    if (!isValidNumber(mobileNumber)) {
      alert.showWarn('Invalid Number')
      return;
    }
    onNextStep();
  };

  const _renderRight = () => {
    return <TextInputDrawable onPress={_onNextStep} name={'arrow-right'} />
  };

  const _renderLeft = () => {
    return <TextInputDrawable onPress={() => {}} name={'arrow-right'} style={{opacity: 0}}/>
  };

  return (
    <Container>
      <SignInTo>SIGN IN TO</SignInTo>
      <LoginTitle>Create Playlists + Save Chunes</LoginTitle>
      <NumberInput
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(999) 999-9999'
        }}
        keyboardType={'phone-pad'}
        value={mobileNumber}
        onChangeText={onChangeNumber}
        placeholder={'Enter Mobile Number'}
        textStyle={{textAlign: 'center', fontSize:FontSize._14}}
        renderRight={_renderRight}
        renderLeft={_renderLeft}
        inputRef={r => (inputRef.current = r)}
      />
      <Narration>{'We\'ll send you a text message a code to login.'}</Narration>
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
export default Number;
