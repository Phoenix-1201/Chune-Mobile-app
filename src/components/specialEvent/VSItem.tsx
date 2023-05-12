import React from 'react'

import {
    View, Image, TouchableOpacity
} from 'react-native'

import styled from 'styled-components'
import { AvenirNextBold, AvenirNextRegular } from '../controls/Text'
import TimeButton from './TimeButton';

import { useNavigation } from '@react-navigation/native';
import { Screens } from '@/constants/Navigation';
import Images from '@/styles/Images';


export interface IPerformer {
    id: string;
    name: string;
    avatar: string;
    score: string;
}

export interface IPerformers {
    id: string;
    performer: IPerformer;
}

export interface EventDay {
    id: string;
    name: string;
    description?: string;
    avatar?: string;
    performers: Array<IPerformers>;
}

const VSItem = React.memo((props: EventDay) => {
    const left = props.performers[0].performer;
    const right = props.performers[1].performer;
    const startIn = "45 mins"

    const navigation = useNavigation();

    const onDetail = () => {
        navigation.navigate(Screens.EventDetail, props);
    }

    return (
        <Container>
            <Header>
                <View>
                    <Title>{props.name}</Title>
                    <Description>{props.description}</Description>
                </View>
                <TimeButton time={startIn} />
            </Header>
            <Content onPress={onDetail}>
                <Avatar source={left?.avatar ? { uri: left?.avatar } : Images.avatar.avatar1} />
                <Avatar source={right?.avatar ? { uri: right?.avatar } : Images.avatar.avatar2} />
                <TextLine>
                    <LeftRow>
                        <LeftName>{left?.name}</LeftName>
                        <LeftScore>{left?.score || "5-3-0"}</LeftScore>
                    </LeftRow>
                    <RightRow>
                        <RightName>{right?.name}</RightName>
                        <RightScore>{right?.score || "5-3-0"}</RightScore>
                    </RightRow>
                </TextLine>
                <Center>
                    <VSContainer>
                        <VS>VS</VS>
                    </VSContainer>
                </Center>
            </Content>
        </Container>
    )
})

export default VSItem;

const Container = styled(View)`
    border-top-width: 10px;
    border-top-color: white;
    background-color: #F4F4F4;
`

const Header = styled(View)`
    height: 50px;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 15px;
    justify-content: space-between;
`

const Content = styled(TouchableOpacity)`
    height: 170px;
    width: 100%;
    flex-direction: row;
`

const Avatar = styled(Image)`
    flex: 1;
    height: 100%;
    resize-mode: cover;
`

const Center = styled(View)`
    position: absolute;
    width: 100%;
    left:0;
    bottom: 10px;
    align-items: center;
    justify-content: center;
`

const TextLine = styled(Center)`
    bottom: 25px;
    flex-direction: row;
    width: 100%;
`

const VSContainer = styled(View)`
    width: 67px;
    height: 67px;
    border-radius: 33.5px;
    border-width: 4px;
    border-color: #FFED00;
    background-color: #1FC800;
    align-items: center;
    justify-content: center;
`

const VS = styled(AvenirNextBold)`
    color: #FFEC0A;
    font-size: 38px;
    line-height: 52px;
    margin-left: 2px;
    margin-top: 2px;
`

const LeftRow = styled(View)`
    flex: 1;
    align-items: flex-end;
`

const RightRow = styled(View)`
    flex: 1;
    align-items: flex-start;
`

const LeftName = styled(AvenirNextRegular)`
    font-size: 15px;
    line-height: 20px;
    color: white;
    font-weight: 500;
    background-color: black;
    padding-right:40px;
    padding-left: 10px;
`

const LeftScore = styled(AvenirNextRegular)`
    font-size: 10px;
    line-height: 14px;
    color: white;
    font-weight: 500;
    background-color: black;
    padding-right: 40px;
    padding-left: 10px;
`

const RightScore = styled(LeftScore)`
    padding-right: 10px;
    padding-left: 40px;
`

const RightName = styled(LeftName)`
    padding-right: 10px;
    padding-left: 40px;
`

const Title = styled(AvenirNextRegular)`
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #898989;
`

const Description = styled(AvenirNextRegular)`
    font-size: 10px;
    line-height: 14px;
    color: #898989;
    width: 200px;
    overflow: hidden;
`