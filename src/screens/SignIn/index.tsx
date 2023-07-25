import React from 'react'
import Initial from './Initial'
import Number from './Number'
import Code from './Code'
import Loading from '@/components/Loading'
import {TabsContainer, Container} from './Components'
import {SignInStep, useViewModel} from '@/screens/SignIn/methods'

export interface SignInProps {}

const Component: React.FC<SignInProps> = (props) => {
  const vm = useViewModel(props);
  return (
    <Container>
      <TabsContainer style={{marginLeft: vm.containerMarginLeft}}>
        <Initial
          onPressLogin={() => vm.gotoStep(SignInStep.Number)} />
        <Number
          mobileNumber={vm.number}
          onChangeNumber={vm.setNumber}
          onNextStep={() => vm.gotoStep(SignInStep.Code)}
          step = {vm.step}
        />
        <Code
          number={vm.number}
          code={vm.code}
          onChangeCode={vm.setCode}
          onBackStep={() => vm.gotoStep(SignInStep.Number)}
          onProceed={vm.onVerifyCode}
          onResend={vm.onResendCode}
          step = {vm.step}
        />
      </TabsContainer>
      {vm.isLoading && (<Loading />)}
    </Container>
  );
};

export default Component;
