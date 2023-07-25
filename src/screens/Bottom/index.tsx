import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from './Header';
import useMethods from './Methods';
import SignIn from '@/screens/SignIn';
import GradientBG from '@/components/GradientBg';
import Sizes from '@/styles/Sizes';
import styled from '@/styles/styled-components';
import {observer} from 'mobx-react';
import Menu from '@/screens/Menu';

interface Props {}

const Component: React.FC<Props> = () => {
  const methods = useMethods();

  const _renderHeader = () => {
    return <Header onPressLogo={methods.onPressLogo} />;
  };

  const _renderSignIn = () => {
    return <SignIn />;
  };

  const _renderMenu = () => {
    return <Menu />;
  };

  const _renderContent = () => {
    return (
      <ContentContainer>
        {methods.user.isLoggedIn ? _renderMenu() : _renderSignIn()}
      </ContentContainer>
    );
  };

  return (
    <BottomSheet
      ref={(r) => (methods.bottomSheetRef.current = r)}
      snapPoints={methods.bottomSnapPoints}
      initialSnap={1}
      renderContent={_renderContent}
      renderHeader={_renderHeader}
      enabledInnerScrolling={false}
      enabledGestureInteraction={true}
      onOpenStart={methods.hideKeyboard}
      onCloseStart={methods.hideKeyboard}
    />
  );
};

const ContentContainer = styled(GradientBG)`
  margin-top: -${Sizes.bottomSheet.redStickerVerticalMargin}px;
`;
export default observer(Component);
