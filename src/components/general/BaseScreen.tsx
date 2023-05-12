import React, { useRef, useEffect, useState } from 'react'

import {
    View, StatusBar, StatusBarStyle, TouchableWithoutFeedback, Keyboard
} from 'react-native'

import styled from 'styled-components';
import BottomBar from './BottomBar';
import Animated from 'react-native-reanimated'
import Constants from '@/constants'
import { useNavigation } from '@react-navigation/native';

interface IBaseProps {
    children?: React.ReactNode;
    statusBarStyle?: StatusBarStyle;
}

const BaseScreen = (props: IBaseProps) => {

    const [backgroundColor, setBackgroundColor] = useState("black");
    const navigation = useNavigation();

    let fall = new Animated.Value(1);

    useEffect(() => {
        navigation.addListener("focus", () => {
            StatusBar.setBarStyle(props.statusBarStyle || "dark-content");
            setBackgroundColor(props.statusBarStyle == "light-content" ? "black" : "white");
        })
    }, [])

    return (
        <Container>
            <Animated.View style={{
                flex: 1,
                paddingTop: Constants.ToolbarHeight,
                backgroundColor,
                opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)),
            }}>
                {props.children}
            </Animated.View>
            <BottomBar
                callbackNode={fall}
            />

        </Container >
    )
}

export default BaseScreen;

const Container = styled(View)`
    flex: 1;
    background-color: black;
`

const TouchFeedback = styled(TouchableWithoutFeedback)`
    flex: 1;
`