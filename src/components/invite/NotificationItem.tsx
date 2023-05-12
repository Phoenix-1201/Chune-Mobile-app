import React from 'react'

import {
    View, Image, TouchableOpacity
} from 'react-native'

import styled from 'styled-components'
import { AvenirNextRegular, AvenirNextBold } from '../controls/Text'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'
import { Notification } from '@/hooks/Queries'
import AlertTitle from './AlertTitle'

// export interface IInviteItem {
//     description: string;
//     username: string;
//     avatar1?: string;
//     avatar2?: string;
// }

const NotificationItem = (props: Notification) => {

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate(Screens.AnswerClash, props);
    }

    return (
        <Container onPress={onClick}>
            <Avatars>
                <LeftAvatar source={{ uri: props.contentUser.avatar || "" }} />
                <RightAvatar source={{ uri: props.secondaryUser.avatar || "" }} />
            </Avatars>


            <AlertTitle
                Link={Username}
                Text={Description}
                title={props.sentence}
                style={{ flex: 1, marginLeft: 10 }}
            />
        </Container>
    )
}

export default NotificationItem

const Container = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    padding-horizontal: 20px;
    padding-vertical: 10px;
`

const Avatars = styled(View)`
    width: 60px;
    height: 40px;
`

const LeftAvatar = styled(Image)`
    position: absolute;
    left:0;
    top:0;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color:#D8D8D8;
`

const RightAvatar = styled(LeftAvatar)`
    right:0;
    left: undefined;
    background-color: #BCBCBC;
`

const Description = styled(AvenirNextRegular)`
    font-weight: 500;
    color:black;
    font-size: 12px;
    margin-left: 10px;
`

const Username = styled(AvenirNextBold)`
    font-size: 13px;
    color: black;
    font-weight: bold;
`