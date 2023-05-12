import React from 'react'

import {
    View, TextInput
} from 'react-native'

import styled from 'styled-components'
import Feather from 'react-native-vector-icons/Feather'

interface IProps {

}

const SearchBar = React.memo((props: IProps) => {
    return (
        <Container>
            <Feather name="search" color={"white"} size={16} />
            <MyTextInput
                placeholderTextColor="white"
                placeholder="SEARCH"
                underlineColorAndroid="transparent"
                returnKeyType="search"
            />
        </Container>
    )
})

export default SearchBar;

const Container = styled(View)`
    width: 100%;
    height: 44px;
    background-color: black;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
`

const MyTextInput = styled(TextInput)`
    padding-horizontal: 15px;
    font-size: 12px;
    line-height: 16px;
    color: white;
    height: 100%;
    flex: 1;
`