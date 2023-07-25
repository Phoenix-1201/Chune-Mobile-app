import Feather from 'react-native-vector-icons/Feather';
import styled from '@/styles/styled-components';
import * as Styles from '@/styles';
import {Container} from '@/components';
import Colors from '@/styles/Colors';
import {AvenirNextDemiBold, AvenirNextRegular} from '@/components/controls/Text';
import {FontSize} from "@/styles/Sizes";

export const Screen = styled(Container)`
  z-index: 10000;
  padding-top: 30px;
`;

export const Header = styled.View`
  padding-top: 9px;
  padding-bottom: 9px;
  background-color: ${Colors.black};
  ${Styles.center}
`;

export const Title = styled(AvenirNextDemiBold)`
  font-size: ${FontSize._15};
  line-height: 18px;
  color: ${Colors.white};
`;

export const CancelBtn = styled.TouchableOpacity`
  ${Styles.absolute_top}
  left: 17;
  top: 9;
`;

export const CancelText = styled(AvenirNextRegular)`
  font-size: ${FontSize._13};
  line-height: 18px;
  color: ${Colors.white};
`;

export const SearchView = styled.View`
  margin-horizontal: 5px;
  margin-top: 5px;
  border-radius: 2px;
  height: 43px;
  background-color: ${Colors.black};
  opacity: 0.46;
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled(Feather)`
  padding-left: 20px;
`;

export const Input = styled.TextInput`
  padding-left: 11px;
  padding-right: 10px;
  font-size: ${FontSize._13};
  line-height: 18px;
  letter-spacing: 0.4;
  color: ${Colors.white};
  font-family: AvenirNext-Regular;
`;

export const ListView  = styled.View`
  flex-direction: row;
  margin-horizontal: 15px;
  margin-top: 16px;
`;

export const IconView = styled.View`
  margin-right: 13px;
  margin-top: 1px;
`;

export const DescView = styled.View`
  margin-right: 5px;
  flex: 1;
`;

export const Desc = styled(AvenirNextRegular)`
  color: ${Colors.white};
  font-size: ${FontSize._15};
  line-height: 20px;
  margin-bottom: 6px;
`;

export const DescTitle = styled(AvenirNextDemiBold)`
  color: ${Colors.white};
  font-size: ${FontSize._15};
  line-height: 18px;
  margin-bottom: 5px;
`;

export const Border = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d1d1d1;
  opacity: 0.68;
  margin-top: 8px;
`;

export const PinView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
`;

export const PinTitle = styled(AvenirNextRegular)`  
  font-size: ${FontSize._15};
  line-height: 34px;
  color: ${Colors.white}
`;

export const Scroll = styled.ScrollView`
  flex: 1;
`;

export const Time = styled(AvenirNextRegular)`
  font-size: ${FontSize._12};
  color: rgba(255, 255, 255, 0.48);
  width: 69px;
`;

export const BottomPadding = styled.View`
  height: 100px;
`;
