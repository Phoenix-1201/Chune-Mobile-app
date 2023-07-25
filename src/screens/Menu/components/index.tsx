import styled from '@/styles/styled-components'
import Sizes, { FontSize } from '@/styles/Sizes'
import GradientBG from '@/components/GradientBg'
import { AvenirNextRegular } from '@/components/controls/Text';


const menuViewHeight = Sizes.bottomSheet.mainMenuSnap - Sizes.bottomSheet.redStickerVerticalMargin;

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${menuViewHeight}px;
`;

export const MenuContainer = styled(GradientBG)`
  flex: 1;
  paddingBottom:30px
`;

export const ItemContainer = styled.TouchableOpacity`
  height: ${Sizes.vScale(97)}px;
  flex-direction:row;
  padding-horizontal: ${Sizes.hScale(20)}px;
  align-items: center;
  justify-content: flex-start;
`;

export const ItemTitle = styled(AvenirNextRegular)`
  font-size: ${FontSize._20}px;
  color: black;
`;

export const ItemContent = styled.View`
  flex: 1;
`

export const ItemDescription = styled(AvenirNextRegular)`
  font-size: 12px;
  line-height: 16px;
  color: #686868;
`

export const ListDivider = styled.View`
  height: 1;
  background-color:#e4e4e4;
`;

export const AddItem = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  align-self: center;
`;

export const ModalView = styled.View`
  background-color: white;
  border-radius: 12px;
  padding-horizontal: 30px;
  padding-top: 15px;
  padding-bottom: 22px;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(AvenirNextRegular)`
  font-size: ${FontSize._15};
  line-height: 18px;
  color: black
`;

export const Logo = styled.Image`
  height: ${FontSize._20};
  width: ${FontSize._20};
`;

export const LogoView = styled.View`
  background-color: #1fc800;
  width: 30px;
  height: 30px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 3px;
`;

export const AddInput = styled.TextInput`
  font-family: AvenirNext-Regular;
  font-size: ${FontSize._15};
  color: black;
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: 100%;
  padding-vertical: 5px;
  padding-horizontal: 1px;
  margin-top: 30px;
`;

export const AddBtn = styled.TouchableOpacity`
  padding-vertical: 5px;
  padding-horizontal: 10px;
  margin-top: 120px;
`;

export const BtnText = styled(AvenirNextRegular)`
  font-size: ${FontSize._15}
  line-height: 18px;
  color: #FF0000;
`;
