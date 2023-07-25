import React from 'react';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import {useDelay, useDelayEachTimeout, useStores} from '@/hooks';
import {Keyboard, LayoutAnimation} from 'react-native';
import Sizes from '@/styles/Sizes';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '@/constants/Navigation';


const loginFullHeight = Sizes.bottomSheet.loginSnap;
const menuFullHeight = Sizes.bottomSheet.mainMenuSnap;

const useMethods = () => {
  const {user, window} = useStores();
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const bottomSheetRef = React.useRef<BottomSheetBehavior | null>(null);
  const isLoggedIn = user.isLoggedIn;
  // const navigation = useNavigation();

  React.useEffect(() => {
    bottomSheetRef.current?.snapTo?.(1);
  }, [user.isLoggedIn]);

  React.useEffect( () => {
    bottomSheetRef.current?.snapTo?.(1);
  }, [window.size]);

  const setKeyboardHeightDelayed = useDelayEachTimeout((height) => {
    setKeyboardHeight(height);
  });

  // Subscribe to keyboard showing / not showing issue
  React.useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', evt => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      //console.log('Keyboard Did Show', evt, evt.endCoordinates);
      setKeyboardHeight(evt.endCoordinates.height);
    });
    const hideListener = Keyboard.addListener('keyboardWillHide', evt => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      //console.log('Keyboard Will Hide', evt, evt.startCoordinates, evt.endCoordinates);
      setKeyboardHeight(0);
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    }
  }, []);

  // Calculate snap points
  const fullHeight = Math.min(isLoggedIn ? menuFullHeight : loginFullHeight + keyboardHeight, window.size.height);

  const onPressLogo = () => {
    bottomSheetRef.current?.snapTo(0);

  };

  const bottomSnapPoints = [
    fullHeight, Sizes.bottomSheet.collapsedSnap
  ];

  console.log(bottomSnapPoints);

  return {
    bottomSheetRef,
    onPressLogo,
    user,
    keyboardHeight,
    isLoggedIn,

    bottomSnapPoints,

    hideKeyboard: Keyboard.dismiss
  };
};

export default useMethods;
