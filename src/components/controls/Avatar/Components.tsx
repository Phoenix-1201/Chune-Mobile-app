import styled from '@/styles/styled-components';
import Sizes from '@/styles/Sizes';
import Colors from '@/styles/Colors';
import * as Styles from '@/styles';
import Text from '@/components/controls/Text';

interface PropsWithSize {
  size?: number;
}

export const AvatarContainer = styled.TouchableOpacity<PropsWithSize>`
  width: ${(props: PropsWithSize) => props.size || Sizes.avatarSmall}px;
  height: ${(props: PropsWithSize) => props.size || Sizes.avatarSmall}px;
  border-radius: ${(props: PropsWithSize) => (props.size || Sizes.avatarSmall) / 2}px;
  background-color: ${Colors.grey220};
  overflow: hidden;
`;

export const AbsFullView = styled.View`
  ${Styles.absolute_full};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const NameAbbr = styled(Text)`
  font-size: 13px;
  font-weight: bold;
`;
