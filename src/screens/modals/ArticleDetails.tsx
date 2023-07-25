import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Text, ScrollView
} from 'react-native'

import styled from 'styled-components'
import { AvenirNextRegular } from '@/components/controls/Text'
import Swiper from 'react-native-swiper'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 30
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })

const ArticleDetails = (props: any) => {
    return (
        <ScrollView style={styles.container} bounces={false}>
            <SimpleLineIcons name="close" color="#FFFFFF" size={30} style={{position: 'absolute', right: 0, top: 0}} onPress={() => props.cancel()}/>
            <SmallTitle style={{marginTop: 40}}>Bobby Digital Dies at 59; His Regagaw Rhythms Spread Worldwide</SmallTitle>
            <SmallText style={{marginTop: 20}}>The producer born Robert Dixon was responsible for hits like the Shabba Ranks song “Dem Bow,” which became a staple of global pop. </SmallText>
            <Swiper style={[styles.wrapper, {marginTop: 20}]} showsButtons={true} height={250}>
                <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            <SmallText style={{marginTop: 20}}>Robert Dixon, who as Bobby Digital became one of Jamaica's most infulential producers,
            and whose production of the Shabba Ranks song "Dem Bow" became a cornerstone of reggaeton and 21st-century pop,
            died on May 21 om Kingston. He was 59.</SmallText>
            <SmallText style={{marginTop: 20}}>His son Giark Dixon said the cause was kidney disease.</SmallText>
            <SmallText style={{marginTop: 20}}>In the 1980s, Bobby Digital was at the forefront of dancehall’s transformation from rhythm tracks built primarily on live studio performances to computerized and electronic beats. In a prolific career that yielded more than 800 released songs, he recorded influential hits with the gritty-voiced dancehall toaster (rapper) Shabba Ranks, the spiritually charged singer Garnett Silk, the vocal harmony group Morgan Heritage and the socially conscious artist Sizzla.</SmallText>
            <SmallText style={{marginTop: 20}}>His credits also include memorable recordings by Bounty Killer, Buju Banton, Cocoa Tea, Capleton, Beenie Man and Chaka Demus, among a long list of Jamaican vocalists. </SmallText>
            <SmallText style={{marginTop: 20}}>Bobby Digital — not to be confused with RZA of the Wu-Tang Clan, who has also used that nickname — produced Shabba Ranks albums that won Grammy Awards in 1992 and 1993, “As Raw as Ever” and “X-Tra Naked.” And the terse, crisp beat of a 1990 Shabba Ranks song, “Dem Bow” — itself sampled from “Poco Man Jam,” a 1989 record by the Jamaican vocalist Gregory Peck, produced by Steely and Clevie — infiltrated pop worldwide after the Dominican production team Luny Tunes used it in early reggaeton hits. Bobby Digital’s productions have been sampled for hip-hop tracks by Jay-Z, Method Man and 50 Cent. </SmallText>
        </ScrollView>
    )
}

export default ArticleDetails;


const SmallTitle = styled(AvenirNextRegular)`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500
`

const SmallText = styled(AvenirNextRegular)`
    color: white;
    font-size: 15px;
`
