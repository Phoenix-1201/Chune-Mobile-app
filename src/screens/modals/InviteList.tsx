import React from 'react'

import {
    View, FlatList, ListRenderItemInfo
} from 'react-native'

import styled from 'styled-components'
import GradientContainer from '@/components/general/GradientContainer'
import NotificationItem from '@/components/invite/NotificationItem'
// import { useQueryNotifications } from '@/hooks/Queries'
import { useStores } from '@/hooks'
import { Notification } from '@/hooks/Queries'


const InviteList = () => {
    const { user } = useStores()
    // const { data, loading, refetch } = useQueryNotifications({ userId: user.id });
    const data: Array<Notification> = [];
    const refetch = () => { }
    const loading = false;

    console.log(data)

    return (
        <Container>
            <FlatList
                onRefresh={refetch}
                refreshing={loading}
                data={data}
                style={{ paddingTop: 20 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={item => (
                    <NotificationItem
                        {...item.item}
                    />
                )}
            />
        </Container>
    )
}

export default InviteList;

const Container = styled(GradientContainer)`
    flex: 1;
`