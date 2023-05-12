import React from 'react'
import { FlatList, View } from 'react-native'
import styled from 'styled-components'
import { AvenirNextBold, AvenirNextRegular } from '../controls/Text'
import moment from 'moment'

interface IComment {
    name: string;
    comment: string;
    createdAt: Date;
}
interface IProps {
    data: Array<Array<IComment>>;
}

const CommentItem = (props: IComment) => {
    return (
        <>
            <Header>
                <Name>{props.name}</Name>
                <TimeText>{moment(props.createdAt || new Date()).format('HH:mm A')}</TimeText>
            </Header>
            <Comment>{props.comment}</Comment>
        </>
    )
}

const CommentList = (props: IProps) => {

    return (
        <Container>
            <FlatList
                style={{ padding: 10 }}
                data={props.data[0]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => <CommentItem {...item.item} />}
            />
            <VerticalLine />
            <FlatList
                style={{ padding: 10 }}
                data={props.data[1]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => <CommentItem {...item.item} />}
            />
        </Container>
    )
}

export default CommentList;

const Container = styled(View)`
    flex:  1;
    flex-direction: row;
`

const Header = styled(View)`
    flex-direction: row;
    margin-top: 10px;
    align-items:center;
`

const Name = styled(AvenirNextBold)`
    color: #4B4B4B;
    font-size: 13px;
    margin-right: 10px;
`

const TimeText = styled(AvenirNextBold)`
    color: #ACACAC;
    font-size: 10px;
    font-weight: 500;
`

const Comment = styled(AvenirNextRegular)`
    font-size: 12px;
    font-weight: 500;
    color: #707070;
`
const VerticalLine = styled(View)`
    width: 1px;
    opacity: 0.12;
    background-color: #979797;
    height: 100%;
`