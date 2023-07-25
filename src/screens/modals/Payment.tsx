import React from 'react'

import {
    View, TouchableOpacity, Image
} from 'react-native'

import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'
import NormalButton from '@/components/controls/NormalButton'
import Images from '@/styles/Images'

const Payment = () => {
    return (
        <Container>
            <Header>
                <SmallTitle>Support A</SmallTitle>
                <Title>Clashers</Title>
            </Header>
            <Description>{"SHOW YOUR SUPPORT BY SENDING\nYOUR FAVORITE CLASHER\nSOME FUNDS"}</Description>
            <Center>
                <Button>
                    <Card source={Images.icons.visa}/>
                    <Card source={Images.icons.mastercard}/>
                    <Card source={Images.icons.discover}/>
                    <Card source={Images.icons.amex}/>
                </Button>
                <Button>
                    <Logo source={Images.icons.paypal} style={{ width: 175, height: 50, resizeMode: 'cover' }} />
                </Button>
                <Button>
                    <Logo source={Images.icons.android} style={{ width: 186, height: 31 }} />
                </Button>
                <Button>
                    <Logo source={Images.icons.apple} style={{ width: 85, height: 40 }} />
                </Button>
            </Center>

            <NormalButton onPress={() => { }}>SKIP</NormalButton>
        </Container>
    )
}

export default Payment;

const Container = styled(View)`
    flex: 1;
    background-color: #FFED00;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`

const Header = styled(View)`
    margin-top: 30px;
`

const SmallTitle = styled(AvenirNextRegular)`
    color: #2C2C2C;
    font-size: 40px;
    text-align: center;
`

const Title = styled(SmallTitle)`
    font-weight:500;
    font-size:50px;
    margin-top:-20px;
`

const Description = styled(AvenirNextRegular)`
    font-size: 15px;
    line-height: 20px;
    color: black;
    text-align: center;
    margin-top: 30px;
    font-weight: 600;
`

const Button = styled(TouchableOpacity)`
    background-color: #EBDA00;
    height: 70px;
    border-radius: 8px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

const Center = styled(View)`
    width: 100%;
    margin-bottom: 10px;
`

const Logo = styled(Image)`
    resize-mode: contain
`

const Card = styled(Image)`
    width: 70px;
    height: 42px;
    resize-mode: contain;
`