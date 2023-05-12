import React, { useState } from 'react'
import styled from 'styled-components'
import { BoldText, MediumText } from '../controls/Text'
import {
    View, TouchableOpacity
} from 'react-native'

interface IProps {
    titles: Array<string>;
    onPress: (index: number) => void;
    selected: number;
}

const AlertStickyTab = ({ titles, onPress, selected }: IProps) => {

    return (
        <Container>
            <TabBar>
                {titles.map((title, index) =>
                    <ItemContainer key={index}
                        onPress={() => {
                            onPress(index)
                        }}
                        style={{
                            backgroundColor: index === selected ? "black" : "#B6B6B6",
                            borderTopLeftRadius: index === 0 ? 0 : 5,
                            borderBottomLeftRadius: index === 0 ? 0 : 5,
                            borderTopRightRadius: index === titles.length - 1 ? 0 : 5,
                            borderBottomRightRadius: index === titles.length - 1 ? 0 : 5,
                        }}>

                        {index === selected ? <MyBoldText>{title}</MyBoldText> : <NormalText>{title}</NormalText>}
                    </ItemContainer>
                )}
            </TabBar>
        </Container>
    )
}

export default AlertStickyTab;

const Container = styled(View)`
    
    background-color: white;
    align-items: center;
    background-color: #B6B6B6;
    height: 34px;
`

const TabBar = styled(View)`
    flex-direction: row;
    width: 100%;
    background-color: #B6B6B6;
    height: 34px;
    padding: 2px;
`

const ItemContainer = styled(TouchableOpacity)`
    flex: 1;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

const MyBoldText = styled(BoldText)`
    font-size: 10px;
    color: white;
`

const NormalText = styled(MediumText)`
    font-size: 10px;
    color: white;
    opacity: 0.3;
`
