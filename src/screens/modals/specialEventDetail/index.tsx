import React, { useEffect, useState } from 'react'

import {
    View, TouchableWithoutFeedback, Keyboard
} from 'react-native'

import styled from 'styled-components';
import BaseScreen from '@/components/general/BaseScreen';
import NavBar from '@/components/general/NavBar';

import Body from '@/components/eventDetail/Body'
import CommentView from '@/components/eventDetail/CommentView'

const EventDetail = () => {



    return (
        <BaseScreen>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <NavBar title="Clash of the titans" />
                    <Body />
                    <CommentView />
                </View>
            </TouchableWithoutFeedback>
        </BaseScreen>
    )
}

export default EventDetail;

const Container = styled(View)`

`