import React from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'

interface IProps {
    title: string;
    renderBack: () => React.ReactNode;
    renderLeft?: () => React.ReactNode;
    renderCenter?: () => React.ReactNode;
    renderRight?: () => React.ReactNode;
    onPress?: () => void;
}

const Button = (props: IProps) => (
    <ButtonContainer onPress={props.onPress}>
        <Background>
            <LineContainer>
                {props.renderBack()}
                <TextLayer>
                    <Left>{props.renderLeft && props.renderLeft()}</Left>
                    <Center>{props.renderCenter && props.renderCenter()}</Center>
                    <Right>{props.renderRight && props.renderRight()}</Right>
                </TextLayer>
            </LineContainer>

            <LinearGradient
                colors={["#FFED0000", "#FFED0033", "#FFED00FF", "#FFED00FF"]}
                locations={[0, 0.4, 0.7, 1]}
                end={{ x: 0, y: 1 }}
                start={{ x: 0, y: 0 }}
                style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }}
            />
        </Background>
        <Title>{props.title}</Title>
    </ButtonContainer>
)

const CreateEvent = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Button
                    renderBack={() => (
                        <GreyImage source={{ uri: "" }} />
                    )}
                    renderRight={() => <Small>LIVE</Small>}
                    title="Live Online Event"
                    onPress={() => navigation.navigate(Screens.CreateLiveEvent)}
                />
                <Button
                    renderBack={() => (
                        <>
                            <GreyImage source={{ uri: "" }} />
                            <View style={{ width: 3 }} />
                            <GreyImage source={{ uri: "" }} />
                        </>
                    )}
                    renderRight={() => <Small>LIVE</Small>}
                    renderLeft={() => <Small>LIVE</Small>}
                    title="Online Clash"
                    onPress={() => navigation.navigate(Screens.StartClash)}
                />
                <Button
                    renderBack={() => (
                        <GreyImage source={{ uri: "" }} />
                    )}
                    renderRight={() => <Small>LIVE</Small>}
                    renderLeft={() => <Small>{"CALL IN\n(800)555-1212"}</Small>}
                    title="Talk Show"
                    onPress={() => navigation.navigate(Screens.TalkShow)}
                />
                <Button
                    renderBack={() => (
                        <GreyImage source={{ uri: "" }} />
                    )}
                    renderCenter={() => <Small>{"SEAT #1902\nSECTION #910"}</Small>}
                    title="Physical Event"
                    onPress={() => navigation.navigate(Screens.PhysicalEvent)}
                />
            </ScrollView>
        </Container>
    )
}

export default CreateEvent;

const Container = styled(View)`
    flex: 1;
    background-color: #FFED00
    padding: 20px;
`

const ButtonContainer = styled(TouchableOpacity)`
    width: 100%;
    align-items:center;
    height: 120px;
    margin-vertical: 10px;
    justify-content: flex-end;
`

const Title = styled(AvenirNextRegular)`
    color: #2C2C2C;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
`

const Background = styled(View)`
    width: 100%;
    height: 100%;
    align-items: center;
    position: absolute;
    top:0;
    left:0;
`

const LineContainer = styled(View)`
    width: 250px;
    height: 100%;
    border-radius: 4px;
    border-width: 1px;
    border-color: #C8C6A9;
    padding: 3px;
    flex-direction: row;
`

const TextLayer = styled(View)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const GreyImage = styled(Image)`
    flex: 1;
    background-color: #C8C6A9;
    border-radius: 4px;
`

const Left = styled(View)`
    align-items: flex-start;
`

const Center = styled(View)`
    align-items: center;
`

const Right = styled(View)`
    align-items: flex-end;
`

const Small = styled(AvenirNextRegular)`
    font-size: 11px;
    color: black;
    font-weight: 500;
    text-align:center;
`