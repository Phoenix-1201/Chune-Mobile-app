import React from 'react'

import {
    View, Image
} from 'react-native'

import styled from 'styled-components'
import Images from '@/styles/Images'
import { RegularText } from '../controls/Text';
import Video from 'react-native-video';

const LiveView = () => {
    return (
        <Container>
            <LiveStream>
                <Live source={{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}} />
                <Live source={{uri:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}} />
            </LiveStream>
            <Bottom>
                <UserInfo>
                    <Name>Jacky <Score>5-3-0</Score></Name>
                    <SmallText>238 Forwards • $0.43</SmallText>
                </UserInfo>
                <BottomCenter>
                    <TimeContainer>
                        <TimeText>1:31</TimeText>
                    </TimeContainer>
                    <RoundText>ROUND 3</RoundText>
                </BottomCenter>
                <UserInfo>
                    <Name>Zyon <Score>5-3-0</Score></Name>
                    <SmallText>238 Forwards • $0.43</SmallText>
                </UserInfo>
            </Bottom>
        </Container>
    )
}

export default LiveView;

const Container = styled(View)`
    flex: 1;
    height: 100%;
    background-color: black;
`

const LiveStream = styled(View)`
    flex-direction: row;
    flex: 1;
`

const Bottom = styled(View)`
    height: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom-color: #E4E4E4;
    border-bottom-width: 1px;
    flex-direction: row;
`

const Live = styled(Video)`
    flex: 1;
    height: 100%;
    resize-mode: cover;
`

const UserInfo = styled(View)`
    flex: 1;
    align-items: center;
`

const BottomCenter = styled(View)`
    width: 100px;
    height: 100%;
    align-items: center;
`

const TimeContainer = styled(View)`
    width: 80px;
    background-color: #1FC800;
    height:30px;
    align-items: center;
    justify-content: center;
`

const TimeText = styled(RegularText)`
    color: white;
    font-size: 17px;
    font-weight: 500;
`

const RoundText = styled(RegularText)`
    color: #4B4B4B;
    font-size: 10px;
    font-weight: 500;
    margin-top: 3px;
`

const Name = styled(RegularText)`
    color: #4B4B4B;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
`

const Score = styled(RegularText)`
    color: #4B4B4B;
    font-size: 10px;
    opacity: 0.35;
`

const SmallText = styled(RegularText)`
    color: #4B4B4B;
    font-size: 9px;
`