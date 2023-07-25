import React from 'react';
import styled from '@/styles/styled-components';
import Sizes, {FontSize} from '@/styles/Sizes';
import {AvenirNextDemiBold} from '@/components/controls/Text';
import Colors from '@/styles/Colors';
import {useStores} from "@/hooks";
import {observer} from "mobx-react";
import useViewModel from "@/screens/Home/components/Player/methods";
import {PlayerMediaInfo} from "@/types";

const Titles: React.FC = () => {
    const {window, player:playerStore} = useStores();

    const mgVertical = (window.isLandscape)? 10: 43;
    const mgHorizontal = (window.isLandscape)? 30: 20;

    let currMediaInfo: PlayerMediaInfo | null = null;

    if (playerStore.currIndex >= 0) {
        currMediaInfo = playerStore.playList[playerStore.currIndex];
    } else {

    }
  return (
    <Container style={{top: mgVertical, left: mgHorizontal}}>
        { currMediaInfo?.title !== '' && <Title>{currMediaInfo?.title}</Title>}
        { currMediaInfo?.subtitle !== '' && <SubTitle>{currMediaInfo?.subtitle}</SubTitle> }
    </Container>
  )
};

export default observer(Titles);

const Container = styled.View`
  position: absolute;
  paddingTop: 5;
`;

const Title = styled(AvenirNextDemiBold)`
  font-size: ${FontSize._18};
  color: ${Colors.white};
`;

const SubTitle = styled(AvenirNextDemiBold)`
  font-size: ${FontSize._12};
  color: ${Colors.white};
`;
