import React from 'react';
import styled from '@/styles/styled-components';
import Images from '@/styles/Images';
import Sizes from '@/styles/Sizes';

interface PropsWithSize {
  size: number;
}

const Logo: React.FC<PropsWithSize & {onPress?: () => void}> = ({size, onPress}) => {
  return (
    <Container size={size} onPress={onPress} activeOpacity={0.9}>
      <Icon source={Images.icons.ic_menu_logo} resizeMode={'contain'} size={size - Sizes.hScale(20)} />
    </Container>
  );
};

const Container = styled.TouchableOpacity<PropsWithSize>`
  width: ${(props: PropsWithSize) => props.size}px;
  height: ${(props: PropsWithSize) => props.size}px;
  border-radius: ${(props: PropsWithSize) => props.size / 2}px;
  border-width: 2px;
  border-color: white;
  background-color: #1fc800;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image<PropsWithSize>`
  margin-top: -${Sizes.hScale(5)}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export default Logo;
