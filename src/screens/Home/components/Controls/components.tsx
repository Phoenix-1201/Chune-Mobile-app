import React from 'react';
import styled from '@/styles/styled-components';
import Sizes, {FontSize} from '@/styles/Sizes';
import * as Styles from '@/styles';
import {Dimensions, ViewStyle} from 'react-native';
import {Feather} from '@/components';
import {AvenirNextDemiBold, AvenirNextRegular} from "@/components/controls/Text";

export const Container = styled.View`
  ${Styles.absolute_full}
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: ${Sizes.hScale(44)}px;
`;

export const SideControlButton: React.FC<{
  onPress: () => void,
  name: string,
  style?: ViewStyle,
  color?: string,
  isLandscape?: boolean,
  isTop: boolean,
  isRight: boolean,
}> = (props) => {

  const mgVertical = (props.isLandscape)? 10: 43;
  const mgHorizontal = (props.isLandscape)? 30: 20;
  let mgTop = props.isTop ? mgVertical:0;
  let mgLeft = props.isRight ? 0:mgHorizontal;
  let mgRight = props.isRight ? mgHorizontal:0;
  let mgBottom = props.isTop ? 0:mgVertical;
  return (
      <ControlButton onPress={props.onPress} name={props.name} color={props.color} style={{
          ...props.style,
        marginTop: mgTop,
        marginRight: mgRight,
        marginBottom: mgBottom,
        marginLeft: mgLeft
      }} />
  )
};

export const ControlButton: React.FC<{
  onPress: () => void,
  name: string,
  style?: ViewStyle,
  color?: string,
}> = (props) => {
  return (
    <ButtonContainer style={props.style} onPress={props.onPress}>
      <Feather name={props.name} color={props.color ?? 'white'} size={Sizes.hScale(30)} />
    </ButtonContainer>
  )
};

const ButtonContainer = styled.TouchableOpacity`
  width: ${Sizes.hScale(40)};
  height: ${Sizes.vScale(40)};
  align-items: center;
  justify-content: center;
  margin-top: ${Sizes.hScale(25)}px;
`;

export const MiddleButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-self: stretch;
  align-items: center; 
`;

export const ToggleControlsButton = styled.TouchableOpacity`
  ${Styles.absolute_full}
`;

export const PlayControlsContainer = styled.View`
  ${Styles.absolute_full}
  flex-direction: row;
`;

export const CtlBtn = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 3};
  height: 100%;
`;

export const Header = styled.View`
  position: absolute;
  top: ${Sizes.hScale(30)};
  left: ${Sizes.hScale(20)};
`;

export const Title = styled(AvenirNextDemiBold)`
  font-size: ${FontSize._18};
  line-height: 21px;
  color: white;
`;

export const SubTitle = styled(AvenirNextRegular)`
  font-size: ${FontSize._12};
  line-height: 14px;
  color: white;
`;
