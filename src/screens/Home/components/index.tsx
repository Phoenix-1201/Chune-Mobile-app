import Video from 'react-native-video';
import styled from '@/styles/styled-components';
import * as Styles from '@/styles';
import {Container} from '@/components';
import Colors from '@/styles/Colors';
import {AvenirNextDemiBold} from '@/components/controls/Text';
import {Dimensions} from 'react-native';
import {BlurView} from '@react-native-community/blur';

export const Screen = styled(Container)`
  ${Styles.center}
  background-color: ${Colors.black};
`;

export const BgImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  ${Styles.absolute_full}
`;

export const VideoView = styled.View`
  ${Styles.absolute_full}
`;

export const VideoPlayer = styled(Video)`
  ${Styles.absolute_full}
  ${Styles.bg_transparent}
`;

export const SeekView = styled(VideoView)``;

export const Progress = styled.View`
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(255, 255, 255, 0.6);
  border-right-color: ${Colors.white};
  border-right-width: 1px;
  width: 200px;
  padding-right: 10px;
`;

export const Time = styled(AvenirNextDemiBold)`
  font-size: 25px;
  color: ${Colors.white};
`;

export const Wrapper = styled.View`
  ${Styles.absolute_full}
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${Styles.bg_transparent}
  padding-horizontal: 15px;
  padding-top: 60px;
`;

export const Duration = styled(AvenirNextDemiBold)`
  font-size: 14px;
  color: ${Colors.white};
`;

export const BtnView = styled.View`
  ${Styles.absolute_full}
  flex-direction: row;
`;

export const Btn = styled.TouchableOpacity`
  flex: 1;
  align-self: stretch;
`;

export const Control = styled.View`
  ${Styles.absolute_full}
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.Image`
  ${Styles.background_image}
`;

export const BtnControl = styled(VideoPlayer)``;

export const CtlView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 75px;
  margin-bottom: 40px;
`;

export const BtnReplay = styled.TouchableOpacity`
  width: 33%;
  height: ${Dimensions.get('screen').width * 0.4}px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  ${Styles.absolute_top}
  padding-left: 26px;
  padding-right: 10px;
  padding-top: 28px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
`;

export const SearchBtn = styled.TouchableOpacity`
  padding: 10px;
`;

export const BlurMask = styled(BlurView)`
  ${Styles.absolute_full};
`;
