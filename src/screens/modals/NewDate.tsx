import React, { useState } from 'react'

import {
    View, Image, Alert
} from 'react-native'

import styled from 'styled-components'
import Images from '@/styles/Images'
import { AvenirNextRegular } from '@/components/controls/Text'
import NormalButton from '@/components/controls/NormalButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Notification } from '@/hooks/Queries'
// import { useRequestNewClashDate } from '@/hooks/Mutations';
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const NewDate = () => {

    const navigation = useNavigation();
    const route = useRoute<any>();
    // const [requestNewDate] = useRequestNewClashDate()
    const [isVisible, setShow] = useState(false)

    if (route.params == null) return null;

    const notification: Notification = route.params;
    const { username, avatar } = notification.contentUser
    const { name: eventName, days, id: eventId } = notification.event
    const duration = moment(days[0].startDate).diff(days[days.length - 1].endDate, "minute")

    const onRequestNewDate = () => {
        setShow(true);
    }

    const handleConfirm = (date: Date) => {
        // requestNewDate(eventId, date)
        //     .then(() => {
        //         navigation.goBack();
        //     })
        //     .catch((e) => {

        //         console.log(e)
        //         Alert.alert("Failed")
        //     })
        setShow(false);
    }

    const hideDatePicker = () => {
        setShow(false)
    }

    return (
        <Container>
            <Avatar source={Images.avatar.avatar1} />
            <Username>{username}</Username>
            <BigFont>Wants to Clash</BigFont>

            <Title>{eventName}</Title>
            <SmallText>{days.length} ROUNDS IN {duration} MINUTES</SmallText>


            <Content>
                <GreyView>
                    <DateText>{moment(days[0].startDate).format("ddd - MMM DD, YYYY hh:mm a")}</DateText>
                </GreyView>
                <Description>Change to request new date & time</Description>
                <NormalButton onPress={onRequestNewDate} >
                    REQUET NEW DATE
                </NormalButton>
            </Content>

            <Splitter />
            <DateTimePickerModal
                isVisible={isVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </Container>
    )
}

export default NewDate;

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

const Content = styled(View)`
    padding-horizontal: 30px;
    padding-vertical:10px;
    width: 100%;
`

const GreyView = styled(View)`
    background-color: #DBDBDB;
    border-radius: 8px;
    height: 70px;
    width: 100%;
    padding-horizontal: 15px;
    justify-content: center;
`

const Splitter = styled(View)`
    width: 100%;
    height: 10px;
    background-color: #EDEDED;
    margin-top: 10px;
`

const DateText = styled(AvenirNextRegular)`
    color: #2C2C2C;
    font-size: 18px;
    font-weight: 500;
`

const Description = styled(AvenirNextRegular)`
    color: #6B6B6B;
    font-size: 14px;
    margin-vertical: 15px;
    text-align: center;
    font-style: italic;
`