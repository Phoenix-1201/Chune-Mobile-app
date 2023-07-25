import React from 'react';
import styled from '@/styles/styled-components';
import Sizes from '@/styles/Sizes';

const signInHeight = Sizes.bottomSheet.loginSnap - Sizes.bottomSheet.redStickerVerticalMargin;

export const Container = styled.View`
  height: ${signInHeight}px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  width: 300%;
  height: 100%;
`;
