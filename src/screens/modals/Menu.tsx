import React from 'react'

import {
    View, Image, TouchableOpacity, ScrollView
} from 'react-native'

import styled from 'styled-components/native'
import Images from '@/styles/Images'
import GradientContainer from '@/components/general/GradientContainer'
import { AvenirNextBold, AvenirNextRegular } from '@/components/controls/Text'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'

interface IMenu {
    title: string;
    description: string;
    onPress: () => void;
}

const MenuItem = (props: IMenu) => {
    return (
        <MenuContainer onPress={props.onPress}>
            <View>
                <MenuTitle>{props.title}</MenuTitle>
                <MenuDescription>{props.description}</MenuDescription>
            </View>
            <Feather name="chevron-right" color="black" size={24} />
        </MenuContainer>
    )
}

const Menu = React.memo(() => {
    const navigation = useNavigation();

    return (

        <Container>
            <ScrollView>
                <Header>
                    <Avatar source={Images.avatar.avatar1} />
                    <Name>firgodigital</Name>
                    <Info>Clasher since Jan 11, 2015</Info>
                </Header>
                <Content>
                    <MenuItem
                        title="Update Profile"
                        description="Review all your ticket purchases to special events"
                        onPress={() => navigation.navigate(Screens.MyAccount)} />
                    <MenuItem
                        title="Payment methods"
                        description="Start clashes, host live events, sell tickets and more"
                        onPress={() => navigation.navigate(Screens.Payment)}
                    />
                    <MenuItem
                        title="Transactions"
                        description="Manage your profile and payment methods"
                        onPress={() => navigation.navigate(Screens.Transactions)} />
                    <MenuItem
                        title="History"
                        description="Manage your profile and payment methods"
                        onPress={() => navigation.navigate(Screens.History)} />
                </Content>
            </ScrollView>
        </Container>

    )
})

export default Menu;


const Avatar = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`

const Container = styled(GradientContainer)`
    flex: 1;
`

const Header = styled(View)`
    height: 250px;
    align-items: center;
    justify-content: center;
`

const Content = styled(View)`
    flex: 3;
    padding-bottom: 30px;
`

const Name = styled(AvenirNextBold)`
    font-size: 19px;
    color: black;
    text-align:center;
    margin-top: 8px;
`

const Info = styled(AvenirNextRegular)`
    font-size: 15px;
    color: black;
    text-align: center;
`

const MenuContainer = styled(TouchableOpacity)`
    flex-direction:row;
    align-items: center;
    flex: 1;
    padding-horizontal: 30px;
    justify-content: space-between;
    border-bottom-color: #E4E4E4;
    border-bottom-width: 1px;
    height: 100px;
`

const MenuTitle = styled(AvenirNextRegular)`
    font-size: 20px;
    color: black;
`

const MenuDescription = styled(AvenirNextRegular)`
    color: #686868;
    font-size: 12px;
    margin-top: 5px;
`