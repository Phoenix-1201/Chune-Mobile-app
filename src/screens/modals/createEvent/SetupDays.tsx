import React, { useState, Fragment } from 'react'

import {
    View, TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native'

import NormalButton from '@/components/controls/NormalButton'
import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'
import YellowInput from '@/components/controls/YellowInput'
import YellowButton from '@/components/controls/YellowOption'
import { IRoundInfo } from '@/types'
import YellowDatePicker from '@/components/controls/YellowDatePicker'
// import { useSendInvite } from '@/hooks/Mutations'

const SetupRound = () => {

    // const [sendInvite] = useSendInvite();
    const [rounds, setRounds] = useState<Array<IRoundInfo>>();
    const navigation = useNavigation();
    const route = useRoute<any>();
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

    const _sendInvite = async () => {
        navigation.navigate(Screens.SetupTickets)
        // if (rounds && route.params) {
        //     try {
        //         const res = await sendInvite(rounds, route.params);
        //         console.log(res, rounds)
        //         navigation.goBack();
        //         navigation.goBack();
        //         navigation.navigate(Screens.ClashDone);
        //     } catch (e) {
        //         console.log(e)
        //     }
        // }
    }

    const onSelect = (index: string) => {
        let tmp = [];
        for (let i = 0; i < Number(index); i++) {
            if (rounds && rounds.length > i) {
                tmp.push(rounds[i])
            } else {
                tmp.push({})
            }
        }
        setRounds(tmp)
    }

    const onChangeDuration = (value: string, index: number) => {
        if (rounds) {
            rounds[index] = {
                duration: value,
                ...rounds[index]
            }
            setRounds([...rounds])
        }
        setTimeout(() => {
            console.log(rounds, value, index)
        }, 100)

    }

    const onChangeBeforeDuration = (value: string, index: number) => {
        if (rounds) {
            rounds[index] = {
                beforeDuration: value,
                ...rounds[index]
            }
            setRounds([...rounds])
        }
    }

    const onChangeName = (value: string, index: number) => {
        if (rounds) {
            rounds[index] = {
                roundTitle: value,
                ...rounds[index]
            }
            setRounds([...rounds])
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                <Header>
                    <SmallTitle>Setup Clash</SmallTitle>
                    <Title>Days</Title>
                </Header>
                <ScrollView>
                    <HorizontalPadding>
                        <YellowButton
                            title="Number of days"
                            options={["1", "2", "3", "4", "5"]}
                            value={rounds?.length.toString()}
                            onSelect={onSelect}
                        />
                    </HorizontalPadding>
                    {rounds?.map((item: IRoundInfo, index: number) => (
                        <Fragment key={index}>
                            <Spacer>
                                <SmallText>{"DAY " + (index + 1)}</SmallText>
                                <Line />
                            </Spacer>
                            <HorizontalPadding>
                                <YellowInput
                                    placeholder={`Give Day ${index + 1} a title (optional)`}
                                    // value={item.roundTitle}
                                    onChangeText={value => onChangeName(value, index)}
                                />
                                <YellowDatePicker
                                    placeholder="Start Date & Time"
                                    value={startDate}
                                    onSelect={setStartDate}
                                />
                                <YellowDatePicker
                                    placeholder="End Date & Time"
                                    value={endDate}
                                    onSelect={setEndDate}
                                />
                            </HorizontalPadding>
                        </Fragment>
                    ))}
                    <BottomSpacer />
                </ScrollView>
                <HorizontalPadding>
                    <NormalButton onPress={_sendInvite}>Continue</NormalButton>
                </HorizontalPadding>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default SetupRound;

const Container = styled(View)`
    flex: 1;
    background-color: #FFED00;
    padding-vertical: 30px;
`

const Header = styled(View)`
    margin-top: 10px;
`

const SmallTitle = styled(AvenirNextRegular)`
    color: #2C2C2C;
    font-size: 35px;
    text-align: center;
`

const Title = styled(SmallTitle)`
    font-weight:500;
    font-size:50px;
    margin-top: -20px;
`

const InputBox = styled(TextInput)`
    
`

const SmallText = styled(AvenirNextRegular)`
    color: black;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
`

const HorizontalPadding = styled(View)`
    padding-horizontal: 30px;
`

const Spacer = styled(View)`
    width: 100%;
    padding-left: 30px;
    flex-direction: row;
    align-items: center;
    height: 50px;
`

const Line = styled(View)`
    flex: 1;
    height: 1px;
    background-color: black;
    margin-left: 10px;
`

const BottomSpacer = styled(View)`
    height: 50px;
`