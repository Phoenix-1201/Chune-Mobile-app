import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components'
import { AvenirNextBold } from './Text';

interface IProps {
    children: React.ReactNode;
    blackText?: boolean
}

const NormalButton = (props: TouchableOpacityProps & IProps) => {

    return (
        <Container {...props} onPress={props.onPress}>
            <ButtonText style={{ color: props.blackText ? "black" : 'white' }}>
                {props.children}
            </ButtonText>
        </Container>
    )
}

export default NormalButton;

const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: black;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    height: 36px;
`

const ButtonText = styled(AvenirNextBold)`
    color: white;
    font-size: 14px;
`