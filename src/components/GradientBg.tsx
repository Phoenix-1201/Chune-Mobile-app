import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ViewStyle} from 'react-native';

const GradientBG: React.FC<{style?: ViewStyle}> = ({style, children}) => {
  return (
    <LinearGradient colors={['#FBFBFB', '#E0E0E0']} style={style}>
      {children}
    </LinearGradient>
  );
};

export default GradientBG;
