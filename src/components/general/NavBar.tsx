import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import {
    View, TouchableOpacity,
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import styled from 'styled-components'
import { RegularText } from '../controls/Text'


interface IProps {
    goBack?: () => void;
    title?: string;
}

const NavBar = (props: IProps) => {

    const navigation = useNavigation();

    const goBack = () => {
        if (props.goBack) {
            props.goBack()
        } else {
            navigation.goBack();
        }
    }

    return (
        <Container>
            <BackButton onPress={goBack}>
                <Feather name="chevron-left" size={24} color="black" />
            </BackButton>
            <Title>{props.title}</Title>
            <RightButton disabled>

            </RightButton>
        </Container>
    )

}

export default NavBar;

const Container = styled(View)`
    height: 44px;
    align-items: center;
    padding-horizontal: 5px;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
`

const BackButton = styled(TouchableOpacity)`
    width:30px;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const Title = styled(RegularText)`
    font-size: 15px;
    color: #4B4B4B;
    font-weight: 500;
    text-align: center;
`

const RightButton = styled(BackButton)`

`