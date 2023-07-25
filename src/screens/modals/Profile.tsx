import React from 'react'

import {
    View, TextInput, TouchableOpacity
} from 'react-native'

import NormalButton from '@/components/controls/NormalButton'
import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'

const Profile = () => {
    return (
        <Container>
            <Header>
                <SmallTitle>Pick A</SmallTitle>
                <Title>Username</Title>
            </Header>
            <InputBox
                placeholder="Enter your username"

            />
            <SmallText>TAP TO SET YOUR AVATAR</SmallText>

            <AvatarContainer>
                <A>A</A>
            </AvatarContainer>
            <NormalButton onPress={() => { }}>SAVE PROFILE NOW</NormalButton>
        </Container>
    )
}

export default Profile;

const Container = styled(View)`
    flex: 1;
    background-color: #FFED00;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`

const Header = styled(View)`
    margin-top: 50px;
`

const SmallTitle = styled(AvenirNextRegular)`
    color: #2C2C2C;
    font-size: 40px;
    text-align: center;
`

const Title = styled(SmallTitle)`
    font-weight:500;
    font-size:50px;
    margin-top: -20px;
`

const InputBox = styled(TextInput)`
    background-color: #EBDA00;
    height: 70px;
    text-align: center;
    width: 100%;
    color: #2C2C2C;
    font-size: 18px;
    border-radius: 8px;
`

const SmallText = styled(AvenirNextRegular)`
    opacity: 0.54;
    color: black;
    font-size: 11px;
    text-align: center;
`

const AvatarContainer = styled(TouchableOpacity)`
    width: 170px;
    height: 170px;
    background-color: #D8D8D8;
    align-items: center;
    justify-content: center;
    border-radius: 85px;

`

const A = styled(AvenirNextRegular)`
    font-size: 130px;
    color: #CDCDCD;
    margin-top: 20px;
`