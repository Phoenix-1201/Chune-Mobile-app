import React, { useEffect, useState } from 'react'

import {
    View, Image, TouchableOpacity, ViewStyle
} from 'react-native'

import styled from 'styled-components'
import Images from '@/styles/Images'
import { AvenirNextBold, AvenirNextRegular } from '../controls/Text'
import LiveView from './LiveView'

interface IWaitingProps {
    name: Array<string>;
    onPress: () => void;
    firstLine?: string;
    secondLine: string;
    buttonTitle?: string;
    style?: ViewStyle;
}
const WaitingClash = (props: IWaitingProps) => {
    return (
        <WaitingContainer style={props.style}>
            <AvatarContainer>
                <Person>
                    <Avatar source={Images.avatar.avatar1} />
                    <Name>{props.name[0]}</Name>
                </Person>
                <View style={{ width: 20 }} />
                <Person>
                    <Avatar source={Images.avatar.avatar2} />
                    <Name>{props.name[1]}</Name>
                </Person>
                <Cover>
                    <VSContainer>
                        <VS>VS</VS>
                    </VSContainer>
                </Cover>
            </AvatarContainer>
            <View>
                <BigText>{props.firstLine || "Start In"}</BigText>
                <BigText>{props.secondLine}</BigText>
            </View>
            <OutlineButton onPress={props.onPress}>
                <ButtonText>{props.buttonTitle || "SET REMINDER"}</ButtonText>
            </OutlineButton>
        </WaitingContainer>
    )
}

interface IDoneProps {
    name: Array<string>;
    onPress: () => void;
}

const DoneClash = (props: IDoneProps) => {
    return (
        <WaitingClash
            name={props.name}
            onPress={props.onPress}
            firstLine={"Winner!"}
            secondLine={"Zyon"}
            buttonTitle="WATCH NOW"
            style={{ backgroundColor: 'black' }}
        />
    )
}

const Body = () => {

    const [status, setStatus] = useState(2);

    useEffect(() => {
        // let counter = 0;
        // const timer = setInterval(() => {
        //     counter = counter + 1;
        //     setStatus(counter % 3)
        // }, 3000)

        // return () => clearInterval(timer)
    }, [])

    return (
        <Container>
            {status == 0 && <WaitingClash name={["Jacky", "Zyon"]} secondLine="27 Minutes" onPress={() => { }} />}
            {status == 1 && <DoneClash name={["Jacky", "Zyon"]} onPress={() => { }} />}
            {status == 2 && <LiveView />}
        </Container>
    )
}

export default Body;

const Container = styled(View)`
    height: 45%;
    width: 100%;
    background-color: red;
`

const WaitingContainer = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 15px;
`

const AvatarContainer = styled(View)`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const Cover = styled(View)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const Person = styled(View)`
    align-items: center;
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

const Avatar = styled(Image)`
    width: 140px;
    height: 140px;
    border-radius: 70px;
`

const Name = styled(AvenirNextRegular)`
    font-size: 19px;
    color: white;
    text-align: center;
    font-weight: 500;
`

const BigText = styled(AvenirNextRegular)`
    font-size: 32px;
    color: white;
    text-align: center;
    font-weight: 500;
    line-height: 34px;
`

const ButtonText = styled(AvenirNextBold)`
    font-size: 14px;
    color: white;
`

const OutlineButton = styled(TouchableOpacity)`
    width: 160px;
    height: 36px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: white;
`