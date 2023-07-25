import React, { useState } from 'react'

import {
    View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView
} from 'react-native'

import NormalButton from '@/components/controls/NormalButton'
import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'
import YellowDatePicker from '@/components/controls/YellowDatePicker'
import YellowButton from '@/components/controls/YellowOption'

const PhysicalEvent = () => {
    const navigation = useNavigation();
    const [startDate, setDate] = useState<Date | undefined>();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");

    const next = () => {
        navigation.navigate(Screens.SetupDays)
    }

    return (
        <Container>
            <AvoidingView behavior="padding" keyboardVerticalOffset={20}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header>
                        <SmallText>PHYSICAL EVENT</SmallText>
                    </Header>

                    <Center>
                        <InputBox
                            placeholder="Event Name"
                            placeholderTextColor="#2C2C2C"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />
                        <InputBox
                            placeholder="Event Description"
                            placeholderTextColor="#2C2C2C"
                            value={name}
                            onChangeText={setName}
                            multiline={true}
                            style={{ height: 150 }}
                        />
                    </Center>

                </ScrollView>
            </AvoidingView>
            <NormalButton onPress={next}>Continue</NormalButton>
        </Container>
    )
}

export default PhysicalEvent;

const Container = styled(View)`
    flex: 1;
    background-color: #FFED00;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`

const Header = styled(View)`
    margin-top: 20px;
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

const InputBox = styled(TextInput)`
    background-color: #EBDA00;
    height: 70px;
    width: 100%;
    color: #2C2C2C;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 10px;
    padding-horizontal: 15px;
`

const SmallText = styled(AvenirNextRegular)`
    color: black;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    letterSpacing: 3;
    margin-bottom: 30px;
`

const Center = styled(View)`
    width: 100%;
    margin-top: 20px;
`

const AvoidingView = styled(KeyboardAvoidingView)`
    width: 100%;
    flex:1 ;
`