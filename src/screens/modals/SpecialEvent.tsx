import React, { useEffect } from 'react'

import BaseScreen from '@/components/general/BaseScreen'
import SearchBar from '@/components/general/SearchBar'
import ParallaxTabView from '@/components/general/ParallaxTabView'
import {
    FlatList, RefreshControl
} from 'react-native'
import VSItem from '@/components/specialEvent/VSItem'
// import { useQueryEvents } from '@/hooks/Queries'


const Home = () => {
    // const { data, loading, refetch } = useQueryEvents({});
    // console.log(data)
    return (
        <BaseScreen statusBarStyle="light-content">
            <SearchBar />
            <ParallaxTabView
                refreshing={false}
                onRefresh={() => { }}
                titles={["UPCOMING", "PAST", "SAVED"]}
                renderContent={() => (
                    <FlatList
                        data={[]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={() => null}
                        // renderItem={value => (
                        //     <VSItem {...value.item.days[0]} />
                        // )}
                        style={{ backgroundColor: 'white' }}
                    />
                )}
            />
        </BaseScreen>
    )
}

export default Home;