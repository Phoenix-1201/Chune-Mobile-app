import React, { Fragment, useState } from 'react';
import { observer } from 'mobx-react';
import { SectionList, Button, RefreshControl, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import EventItem from '@/components/eventDetail/EventItem';
import { AvenirNextBold } from '../../components/controls/Text';
import ParallaxTabView from '@/components/general/ParallaxTabView';
import Images from '@/styles/Images';

const EventList = observer(() => {
    const navigation = useNavigation();

    const renderContent = () => {
        return (
            <Fragment>
                {
                    <EmptyContainer>
                        <EmptyLogo source={Images.icons.ic_menu_logo} />
                        <BigString>Introducing Events</BigString>
                        <EmptyString>
                            Introducing Events Chewbox makes it easy for groups of people to enjoy meals delivered at the same time. Treat your friends, go dutch, or donate meals recipients can customize. All meals come to one location in the same delivery. Set a specific time of day. $50 minimum.
                        </EmptyString>
                    </EmptyContainer>}

                {/* {<FlatList
                    // refreshing={vm.loading}
                    // onRefresh={vm.refetch}
                    data={[]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={prop => (<EventItem {...prop} />)}
                    // ItemSeparatorComponent={() => <ItemSeparator />}
                    // ListHeaderComponent={() => <EmptyHeader />}
                    ListFooterComponent={() => <BottomPadding />}
                />} */}

            </Fragment>
        )
    }

    return (
        <Container>
            <ParallaxTabView
                refreshing={false}
                onRefresh={() => { }}
                titles={["UPCOMING", "PAST"]}
                renderContent={renderContent}
            />
        </Container>
    )
});

const Container = styled.View`
    flex: 1;
`

const EmptyContainer = styled.View`
    padding:30px;
    align-items:center;
`

const EmptyString = styled(AvenirNextBold)`
    font-size: 14px;
    color:#B8B8B8
    line-height: 30px;
    text-align:center;
    margin-top:30px;
`

const BottomPadding = styled.View`
    height: 80px;
`

const BigString = styled(AvenirNextBold)`
    font-size: 24px;
    color: #B8B8B8;
`

const EmptyLogo = styled.Image`
    opacity: 0.25;
    width: 180px;
    height: 180px;
    resize-mode: contain;
`

export default EventList;
