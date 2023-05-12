import React from 'react'

import {
    View, TouchableOpacity
} from 'react-native'

import styled from 'styled-components';
import Feather from 'react-native-vector-icons/Feather'
import { AvenirNextBold, AvenirNextRegular } from '../controls/Text';

interface IProps {
    time: string;
}

const TimeButton = (props: IProps) => {

    return (
        <Container>
            <PlusButton>
                <Feather name="plus" color="white" size={20} />
            </PlusButton>
            <Content>
                <Name>STARTS IN</Name>
                <TimeText>{props.time}</TimeText>
            </Content>
        </Container>
    )
}

export default TimeButton;

const Container = styled(View)`
    height: 28px;
    border-radius: 2px;
    flex-direction: row;
    overflow: hidden;
`

const PlusButton = styled(TouchableOpacity)`
    width: 25px;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #A5A5A5;
`

const Content = styled(View)`
    width: 95px;
    align-items: center;
    justify-content: center;
    background-color: #C4C4C4;
`

const Name = styled(AvenirNextBold)`
    font-size: 7px;
    line-height:8px;
    color: black;
    margin-top: 4px;
`

const TimeText = styled(AvenirNextRegular)`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: black;
`