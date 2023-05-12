import React, { useState } from 'react'

import ReactNativeParallaxHeader from '../react-native-parallax-header';
import HeaderTab from './HeaderTab'
import HeaderStickyTab from './HeaderStickyTab'
import { View, RefreshControl } from 'react-native';
import styled from 'styled-components'

interface IProps {
    renderContent: () => React.ReactNode;
    titles: Array<string>;
    onRefresh: () => void;
    refreshing: boolean;
}

const ParallaxTabView = (props: IProps) => {

    const [selected, setSelected] = useState(0);

    const renderHeader = () => {
        return (
            <HeaderTab
                titles={props.titles}
                selected={selected}
                onPress={(index: number) => {
                    setSelected(index)
                }}
            />
        )
    }

    const renderNavBar = () => {
        return (
            <HeaderStickyTab
                titles={props.titles}
                selected={selected}
                onPress={(index: number) => {
                    setSelected(index)
                }}
            />
        )
    }

    return (
        <Container>
            <ReactNativeParallaxHeader
                headerMinHeight={30}
                headerMaxHeight={60}
                navbarColor="white"
                renderNavBar={renderNavBar}
                renderContent={props.renderContent}
                renderHeader={renderHeader}
                containerStyle={{ flex: 1, backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                innerContainerStyle={{ flex: 1 }}
                scrollViewProps={{
                    onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                    onScrollEndDrag: () => console.log('onScrollEndDrag'),
                    refreshControl: <RefreshControl onRefresh={props.onRefresh} refreshing={props.refreshing} />
                }}
                alwaysShowNavBar={false}
                alwaysShowTitle={false}
                headerTitleStyle={{ backgroundColor: 'white' }}
            />
        </Container>
    )
}

export default ParallaxTabView;

const Container = styled(View)`
    flex: 1;
    overflow: hidden;
`