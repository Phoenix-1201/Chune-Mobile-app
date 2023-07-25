import React from 'react'

import {
    View, TextInput, TouchableOpacity
} from 'react-native'

import NormalButton from '@/components/controls/NormalButton'
import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'

const ClashDone = () => {
    return (
        <Container>
            <Title>{"We Sent Your\nOpponent\nan Invite to\nClash!"}</Title>
        </Container>
    )
}

export default ClashDone;

const Container = styled(View)`
    flex: 1;
    background-color: #FFED00;
    align-items: center;
    justify-content: center;
    padding: 30px;
`

const Title = styled(AvenirNextRegular)`
    font-weight: 500;
    font-size: 48px;
    color: #2C2C2C;
    text-align: center;
`