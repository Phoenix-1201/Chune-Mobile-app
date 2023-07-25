import React from 'react';
import styled from '@/styles/styled-components';
import AdamariLogo from '@/components/AdamariLogo';
import Colors from '@/styles/Colors';
import Sizes from '@/styles/Sizes';
import { Feather } from '@/components';
import { useStores } from '@/hooks';
import { observer } from 'mobx-react';
import { mediaCollections } from "@/gql/Queries";
import { AvenirNextBold, AvenirNextRegular } from '@/components/controls/Text';

export interface HeaderProps {
  onPressLogo: () => void;
}

const logoSize = Sizes.bottomSheet.headerHeight;

const Header: React.FC<HeaderProps> = ({ onPressLogo }) => {
  const { bottomSheetNav, user } = useStores();
  const notifications = 2;

  React.useEffect(() => {
    // Whenever user is logged out, just clear the bottom sheet navigation
    if (!user.isLoggedIn) {
      bottomSheetNav.initialize();
    }
  }, [user.isLoggedIn]);


  return (
    <Container>
      <RedBlock />
      {bottomSheetNav.canGoBack &&
        <BackButton onPress={() => { bottomSheetNav.goBack(); }}>
          <BackText>BACK</BackText>
        </BackButton>
      }
      <AdamariLogo size={logoSize} onPress={onPressLogo} />
      <BadgeContainer>
        <BadgeNumber>{notifications}</BadgeNumber>
      </BadgeContainer>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  height: ${logoSize}px;
`;

const RedBlock = styled.View`
  background-color: ${Colors.primary};
  position: absolute;
  left: 0px;
  right: 0px;
  top: ${Sizes.bottomSheet.redStickerVerticalMargin}px;
  bottom: ${Sizes.bottomSheet.redStickerVerticalMargin}px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: ${Sizes.hScale(10)}px;
  top: ${Sizes.bottomSheet.redStickerVerticalMargin + 5}px;
  bottom: ${Sizes.bottomSheet.redStickerVerticalMargin + 5}px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding-horizontal: 10px;
  border-radius: 3px;
`;

const BadgeContainer = styled.View`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 10px;
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  shadow-color: black;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10;
`

const BadgeNumber = styled(AvenirNextBold)`
  font-size: 14px;
  color: red;
`

const BackText = styled(AvenirNextRegular)`
  font-size: 10px;
  font-weight: 600;
  color: white;
`

export default observer(Header);
