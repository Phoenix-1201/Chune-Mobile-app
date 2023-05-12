import React, { useState } from 'react'
import styled from 'styled-components'
import {
    ViewStyle, View, TouchableOpacity
} from 'react-native'
import { AvenirNextMedium, AvenirNextBold } from '../controls/Text'

interface IProps {
    titles: Array<string>;
    onPress: (index: number) => void;
    selected: number;
    style?: ViewStyle;
}

const AlertTab = ({ titles, onPress, selected, style }: IProps) => {

    return (
        <Container style={{ zIndex: 20, ...style }}>
            <TabBar style={{
                zIndex: 20,
            }}>
                {titles.map((title, index) =>
                    <ItemContainer key={index}
                        onPress={() => { onPress(index) }}
                        style={{
                            backgroundColor: index === selected ? "black" : "#B6B6B6",
                        }}>

                        {index === selected ? <MyBoldText>{title}</MyBoldText> : <NormalText>{title}</NormalText>}
                    </ItemContainer>
                )}
            </TabBar>
        </Container>
    )
}

export default AlertTab;

const Container = styled(View)`
    padding-vertical: 10px;
    background-color: white;
    align-items: center;
`

const TabBar = styled(View)`
    flex-direction: row;
    width: 268px;
    background-color: #B6B6B6;
    border-radius: 5px;
    height: 34px;
    padding:2px;
`

const ItemContainer = styled(TouchableOpacity)`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
`

const MyBoldText = styled(AvenirNextBold)`
    font-size: 10px;
    color: white;
`

const NormalText = styled(AvenirNextMedium)`
    font-size: 10px;
    color: white;
    opacity: 0.3;
`
