import React, { useState, Fragment } from 'react'

import {
    View, TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native'

import NormalButton from '@/components/controls/NormalButton'
import styled from 'styled-components'
import { RegularText, OutlierText } from '@/components/controls/Text'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'
import YellowInput from '@/components/controls/YellowInput'
import YellowButton from '@/components/controls/YellowOption'
import { IRoundInfo, IEventInfo } from '@/types'
import { useSendInvite } from '@/hooks/Mutations'

const SetupRound = () => {

    const [sendInvite] = useSendInvite();
    const [rounds, setRounds] = useState<Array<IRoundInfo>>();
    const navigation = useNavigation();
    const route = useRoute<any>();

    const _sendInvite = async () => {
        if (rounds && route.params) {
            try {
                const res = await sendInvite(rounds, route.params);
                console.log(res, rounds)
                navigation.goBack();
                navigation.goBack();
                navigation.navigate(Screens.ClashDone);
            } catch (e) {
                console.log(e)
            }
        }
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
                    <Title>Rounds</Title>
                </Header>
                <ScrollView>
                    <HorizontalPadding>
                        <YellowButton
                            title="Number of rounds"
                            options={["1", "2", "3", "4", "5"]}
                            value={rounds?.length.toString()}
                            onSelect={onSelect}
                        />
                    </HorizontalPadding>
                    {rounds?.map((item: IRoundInfo, index: number) => (
                        <Fragment key={index}>
                            <Spacer>
                                <SmallText>{"ROUND " + (index + 1)}</SmallText>
                                <Line />
                            </Spacer>
                            <HorizontalPadding>
                                <YellowButton
                                    title={"Duration of Round " + (index + 1)}
                                    options={["30s", "1mins", "2mins", "3mins", "4mins", "5mins", "6mins"]}
                                    value={item.duration}
                                    onSelect={value => onChangeDuration(value, index)}
                                />
                                <YellowInput
                                    placeholder={`Give Round ${index + 1} a title (optional)`}
                                    // value={item.roundTitle}
                                    onChangeText={value => onChangeName(value, index)}
                                />
                                <YellowButton
                                    title={`Duration before Round ${index + 2} starts`}
                                    options={["30s", "1mins", "2mins", "3mins", "4mins", "5mins", "6mins"]}
                                    value={item.beforeDuration}
                                    onSelect={value => onChangeBeforeDuration(value, index)}
                                />
                            </HorizontalPadding>
                        </Fragment>
                    ))}
                    <BottomSpacer />
                </ScrollView>
                <HorizontalPadding>
                    <NormalButton onPress={_sendInvite}>Send Invite Now</NormalButton>
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

const SmallTitle = styled(RegularText)`
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

const SmallText = styled(RegularText)`
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