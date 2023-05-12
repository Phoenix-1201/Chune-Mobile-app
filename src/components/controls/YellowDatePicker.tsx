import React, { useState } from 'react'

import {
    View, TouchableOpacity
} from 'react-native'

import styled from 'styled-components'
import { AvenirNextRegular } from './Text'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import Feather from 'react-native-vector-icons/Feather'

interface IProps {
    placeholder: string;
    onSelect?: (value: Date) => void;
    value?: Date;
}

const YellowDatePicker = (props: IProps) => {

    const [isVisible, setShow] = useState(false)

    const onClick = () => {
        setShow(true);
    }

    const handleConfirm = (result: Date) => {
        props.onSelect && props.onSelect(result)
        setShow(false);
    }

    const hideDatePicker = () => {
        setShow(false)
    }

    return (
        <Container onPress={onClick}>
            <Title>
                {props.value == null ? props.placeholder : moment(props.value).format("MMM DD, YYYY hh:mm A")}
            </Title>
            <DateTimePickerModal
                isVisible={isVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Feather name="calendar" size={20} color="#2C2C2C" />
        </Container>
    )
}

export default YellowDatePicker;

const Container = styled(TouchableOpacity)`
    background-color: #EBDA00;
    height: 70px;
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
    padding-horizontal: 15px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

const Title = styled(AvenirNextRegular)`
    font-size: 18px;
    font-weight: 500;
    color: #2C2C2C;
`