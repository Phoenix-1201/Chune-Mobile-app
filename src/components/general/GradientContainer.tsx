import React from 'react'

import LinearGradient from 'react-native-linear-gradient'
import { ViewStyle, ViewProps } from 'react-native';

interface IProps {
    children?: React.ReactNode;
}
const GradientContainer = React.memo((props: IProps & ViewProps) => {
    return (
        <LinearGradient
            colors={['#FBFBFB', '#CFCFCF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
            {...props}
        >
            {props.children}
        </LinearGradient>
    )
})

export default GradientContainer;