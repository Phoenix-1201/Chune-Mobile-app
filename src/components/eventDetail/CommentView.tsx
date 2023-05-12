import React, { useState, useEffect, useRef, MutableRefObject } from 'react'

import {
    View, TextInput, Keyboard, LayoutAnimation, TouchableOpacity
} from 'react-native'

import styled from 'styled-components'
import { BoldText } from '../controls/Text';
import Feather from 'react-native-vector-icons/Feather'
import CommentList from './CommentList'

interface IProps {
}

const CommentView = (props: IProps) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [focus, setFocus] = useState('none');
    const leftInputRef = useRef<TextInput>() as MutableRefObject<TextInput>;
    const rightInputRef = useRef<TextInput>() as MutableRefObject<TextInput>;

    const [leftText, setLeftText] = useState("");
    const [rightText, setRightText] = useState("");

    useEffect(() => {
        Keyboard.addListener('keyboardWillShow', (e) => {
            setKeyboardHeight(e.endCoordinates.height);
            LayoutAnimation.configureNext(LayoutAnimation.create(
                e.duration,
                LayoutAnimation.Types['keyboard'],
                LayoutAnimation.Properties.scaleXY
            ))
        })
        Keyboard.addListener('keyboardWillHide', (e) => {
            setKeyboardHeight(0)
            LayoutAnimation.configureNext(LayoutAnimation.create(
                e.duration,
                LayoutAnimation.Types[e.easing],
                LayoutAnimation.Properties.opacity
            ))
        })
    })

    const onClickTextInput = (status: string) => {
        setFocus(status);
        LayoutAnimation.configureNext(LayoutAnimation.create(
            500,
            LayoutAnimation.Types['keyboard'],
            LayoutAnimation.Properties.opacity
        ))
    }

    const getStyle = (type: string): any => {
        switch (type) {
            case 'container':
                return (
                    keyboardHeight > 0 ?
                        { position: 'absolute', width: '100%', bottom: keyboardHeight - 50, } :
                        { flex: 1, position: 'relative', paddingBottom: 25, }
                )
            case 'leftText':
                return ({
                    height: keyboardHeight > 0 ? 150 : 54,
                    marginBottom: keyboardHeight > 0 ? 50 : 0,
                    backgroundColor: keyboardHeight > 0 ? 'white' : '#F4F4F4',
                    width: focus == 'right' ? 0 : (focus == 'left' ? '100%' : '50%'),
                    paddingHorizontal: focus == 'right' ? 0 : 10,
                    // textAlign: focus == 'none' ? 'right' : 'left'
                })
            case 'rightText':
                return ({
                    borderLeftWidth: 1,
                    height: keyboardHeight > 0 ? 150 : 54,
                    marginBottom: keyboardHeight > 0 ? 50 : 0,
                    backgroundColor: keyboardHeight > 0 ? 'white' : '#F4F4F4',
                    width: focus == 'left' ? 0 : (focus == 'right' ? '100%' : '50%')
                })
        }
    }

    const onSend = () => {
        Keyboard.dismiss();

        setLeftText("");
        setRightText("");
    }

    return (
        <Container style={getStyle('container')}>
            
            {keyboardHeight == 0 && <CommentList
                data={[
                    [{ name: "oneLove", comment: "some comment would go here ...", createdAt: new Date() }],
                    [{ name: "oneLove", comment: "some comment would go here ...", createdAt: new Date() }],
                ]}
            />}
            <Header style={{ height: keyboardHeight > 0 ? 60 : 0 }} >
                {keyboardHeight > 0 && <LeftButton><Feather name="thumbs-up" size={24} color="white" /></LeftButton>}
                {keyboardHeight > 0 && <Title>{"TITLE"}</Title>}
                {keyboardHeight > 0 && <RightButton><Feather name="dollar-sign" size={24} color="white" /></RightButton>}
            </Header>
            <InputContainer>
                <TextLine
                    ref={leftInputRef}
                    value={leftText}
                    onChangeText={setLeftText}
                    multiline
                    style={getStyle('leftText')}
                    onFocus={() => onClickTextInput('left')}
                    onBlur={() => onClickTextInput('none')}
                    placeholder="Say something..."
                    placeholderTextColor="#D1D1D1"
                />
                <TextLine
                    ref={rightInputRef}
                    value={rightText}
                    onChangeText={setRightText}
                    multiline
                    style={getStyle('rightText')}
                    onFocus={() => onClickTextInput('right')}
                    onBlur={() => onClickTextInput('none')}
                    placeholder="Say something..."
                    placeholderTextColor="#D1D1D1"
                />
                {keyboardHeight > 0 && <SendButton onPress={onSend}>
                    <ButtonText>Send</ButtonText>
                </SendButton>}
            </InputContainer>
        </Container>
    )
}

export default CommentView;

const Container = styled(View)`
    flex: 1;
    padding-bottom: 50px;
`

const TextLine = styled(TextInput)`
    height: 54px;
    background-color: white;
    border-top-width: 1px;
    border-top-color: #D8D8D8;
    padding-bottom: 10px;
    border-left-color: #D8D8D8;
    padding-horizontal:10px;
    background-color: #F4F4F4;
    font-size: 10px;
    color: black;
`

const Header = styled(View)`
    height: 60px;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 15px;
    justify-content: space-between;
`

const InputContainer = styled(View)`
    flex-direction: row;
    background-color: white;
    width: 100%;
`

const Title = styled(BoldText)`
    font-size: 14px;
    line-height: 19px;
    color: black;
`

const LeftButton = styled(TouchableOpacity)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: black;
`

const RightButton = styled(LeftButton)`
    background-color: #1FC800;
`

const SendButton = styled(TouchableOpacity)`
    background-color: black;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    position: absolute;
    bottom: 10px;
    left: 40px;
    right: 40px;
    height: 36px;
`

const ButtonText = styled(BoldText)`
    color: white;
    font-size: 14px;
`