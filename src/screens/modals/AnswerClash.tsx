import React from 'react'

import {
    View, Image, Alert
} from 'react-native'

import styled from 'styled-components'
import Images from '@/styles/Images'
import { AvenirNextRegular } from '@/components/controls/Text'
import NormalButton from '@/components/controls/NormalButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'
import { Notification } from '@/hooks/Queries'
// import { useAcceptClash } from '@/hooks/Mutations'
import moment from 'moment'

const AnswerClash = () => {

    const navigation = useNavigation();
    const route = useRoute<any>();
    // const [acceptClash] = useAcceptClash()

    if (route.params == null) return null;

    const notification: Notification = route.params;
    const { username, avatar } = notification.contentUser
    const { name: eventName, days, id: eventId } = notification.event
    const duration = moment(days[0].startDate).diff(days[days.length - 1].endDate, "minute")

    const onAccept = () => {
        // acceptClash(eventId, true)
        // .then(()=>{
        //     navigation.goBack();
        // })
        // .catch((e) => {
        //     console.log(e)
        //     Alert.alert("Failed")
        // })
    }

    const onDecline = () => {
        // acceptClash(eventId, false)
        //     .then(() => {
        //         navigation.goBack();
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //         Alert.alert("Failed")
        //     })
    }

    return (
        <Container>
            <Avatar source={{ uri: avatar }} />
            <Username>{username}</Username>
            <BigFont>Wants to Clash</BigFont>

            <Title>{eventName}</Title>
            <SmallText>{days?.length} ROUNDS IN {duration} MINUTES</SmallText>

            <Row>
                <Flex>
                    <GreenButton onPress={onAccept}>ACCEPT</GreenButton>
                </Flex>
                <View style={{ width: 10 }} />
                <Flex>
                    <RedButton onPress={onDecline}>DECLINE</RedButton>
                </Flex>
            </Row>
            <Row>
                <YellowButton
                    blackText
                    onPress={() => navigation.navigate(Screens.NewDate, notification)}
                >
                    REQUET NEW DATE
                </YellowButton>
            </Row>

            <Splitter />

        </Container>
    )
}

export default AnswerClash;

const Container = styled(View)`
    align-items: center;
    flex: 1;
    padding-top: 50px;
`

const Avatar = styled(Image)`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    resize-mode: cover;
`

const Username = styled(AvenirNextRegular)`
    font-size:40px;
    font-weight: 500;
    color: black;
    text-align: center;
`

const BigFont = styled(AvenirNextRegular)`
    font-size: 45px;
    color: black;
    font-weight: 500;
    margin-top: -20px;
    text-align: center;
`

const Title = styled(Username)`
    font-size: 18px;
    color: #2C2C2C;
`

const SmallText = styled(Username)`
    font-size: 13px;
    color: #2C2C2C;
`

const Row = styled(View)`
    flex-direction: row;
    padding-horizontal: 50px;
    padding-vertical:10px;
`

const GreenButton = styled(NormalButton)`
    background-color: #1FC800;
    border-radius: 4px;
`

const RedButton = styled(GreenButton)`
    background-color: red;
`

const YellowButton = styled(GreenButton)`
    background-color: #FFEF21;
`

const Flex = styled(View)`
    flex: 1;
`

const Splitter = styled(View)`
    width: 100%;
    height: 10px;
    background-color: #EDEDED;
    margin-top: 10px;
`