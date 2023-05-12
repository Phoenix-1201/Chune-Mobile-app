import React from 'react'

import {
    View, TextInputProps, TextInput
} from 'react-native'

import styled from 'styled-components'

interface IProps {

}

const YellowInput = (props: IProps & TextInputProps) => {

    return (
        <Input
            placeholderTextColor="#2C2C2C"
            {...props}
        />
    )
}

export default YellowInput;

const Input = styled(TextInput)`
    background-color: #EBDA00;
    height: 70px;
    width: 100%;
    color: #2C2C2C;
    font-size: 18px;
    border-radius: 8px;
    margin-vertical: 5px;
    padding-horizontal: 15px;
`