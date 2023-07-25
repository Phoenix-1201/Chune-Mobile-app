import React from 'react';
import styled from '@/styles/styled-components';
import Sizes, {FontSize} from '@/styles/Sizes';
import {AvenirNextBold, AvenirNextRegular} from '@/components/controls/Text';
import {Feather} from '@/components';
import {ViewStyle} from 'react-native';

interface Props {
  onPressLogin: () => void;
  style?: ViewStyle;
}

const Initial: React.FC<Props> = ({onPressLogin, style}) => {
  return (
    <Container style={style}>
      <SignInTo>SIGN IN TO</SignInTo>
      <LoginTitle>Create Playlists + Save Chunes</LoginTitle>
      <LoginButton onPress={onPressLogin}>
        <Feather color={'white'} name={'smartphone'} />
        <LoginButtonTitle>Log in with Mobile</LoginButtonTitle>
      </LoginButton>
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
`;

const LoginTitle = styled(AvenirNextRegular)`
  font-size: ${FontSize._20}px;
  color: black;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #4e70a4;
  height: ${Sizes.hScale(43)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 3px;
  margin-top: ${Sizes.hScale(26)}px;
  width: ${Sizes.hScale(202)}px;
`;

const LoginButtonTitle = styled(AvenirNextRegular)`
  font-size: ${FontSize._14}px;
  color: white;
`;
export default Initial;
