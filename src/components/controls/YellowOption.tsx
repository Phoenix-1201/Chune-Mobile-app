import React from 'react'

import {
    View, TouchableOpacity
} from 'react-native'

import styled from 'styled-components'
import Feather from 'react-native-vector-icons/Feather'
import { useActionSheet } from '@expo/react-native-action-sheet';
import { AvenirNextRegular } from './Text'
Feather.loadFont()

interface IProps {
    title: string;
    value?: string;
    options: Array<string>;
    onSelect?: (value: string) => void;
}

const YellowOption = (props: IProps) => {

    const action = useActionSheet()

    const showOptions = () => {
        action.showActionSheetWithOptions({
            options: props.options
        }, (index) => {
            props.onSelect && props.onSelect(props.options[index]);
        })
    }

    return (
        <Container onPress={showOptions}>
            <View>
                <Title>{props.title}</Title>
                {props.value != null && <Title>{props.value}</Title>}
            </View>
            <Feather name="chevron-down" size={24} color="#585858" />
        </Container>
    )
}

export default YellowOption;

const Container = styled(TouchableOpacity)`
    background-color: #EBDA00;
    height: 70px;
    width: 100%;
    border-radius: 8px;
    margin-vertical: 5px;
    flex-direction: row;
    padding-horizontal: 15px;
    align-items: center;
    justify-content: space-between;
`

const Title = styled(AvenirNextRegular)`
    font-size: 18px;
    font-weight: 500;
    color: #2C2C2C;
`