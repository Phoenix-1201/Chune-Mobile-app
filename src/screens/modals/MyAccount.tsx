import React from 'react'

import {
    View, Image, TouchableOpacity, Switch
} from 'react-native'

import styled from 'styled-components/native'
import Images from '@/styles/Images'
// import GradientContainer from '@/components/general/GradientContainer'
import { AvenirNextBold, AvenirNextRegular } from '@/components/controls/Text'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '@/constants/Navigation'
import NormalButton from '@/components/controls/NormalButton'
import YellowInput from '@/components/controls/YellowInput'


interface IProps {
    value?: boolean;
    title: string;
    onChange?: (value: boolean) => void;
}
const MenuItem = (props: IProps) => {
    return (
        <Item>
            <NormalText>{props.title}</NormalText>
            <Switch />
        </Item>
    )
}

const MyAccount = () => {
    const navigation = useNavigation();

    const onSave = () => {

    }

    return (
        <Container>
            <Header>
                <Avatar source={Images.avatar.avatar1} />
                <Name>firgodigital</Name>
                <UpdateAvatar blackText>
                    <ButtonText>Update Avatar</ButtonText>
                </UpdateAvatar>
            </Header>
            <View>
                <NormalText>USERNAME</NormalText>
                <Input
                />
            </View>
            <MenuContainer>
                <MenuItem
                    title="Allow others to invite me"
                />
                <MenuItem
                    title="Allow others to invite me"
                />
            </MenuContainer>
            <NormalButton onPress={onSave}>SAVE SETTINGS</NormalButton>
        </Container>
    )
}

export default MyAccount;


const Avatar = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`

const Container = styled(View)`
    flex: 1;
    padding-horizontal: 30px;
    padding-vertical:30px;
    justify-content: space-between;
`

const Header = styled(View)`
    align-items: center;
    justify-content: center;
`

const Content = styled(View)`
    flex: 3;
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

const UpdateAvatar = styled(NormalButton)`
    background-color: #FFED00;;
    width: 200px;
    border-radius: 4px;
    margin-top: 10px;
`

const ButtonText = styled(AvenirNextRegular)`
    font-size: 16px;
    font-weight: 500;
`

const MenuContainer = styled(View)`
    width: 100%;
`

const NormalText = styled(AvenirNextRegular)`
    font-size: 14px;
    font-weight: 500;
`

const Input = styled(YellowInput)`
    background-color: #DBDBDB;
`

const Item = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    border-bottom-width: 1px;
    border-bottom-color: #DCDCDC;
`