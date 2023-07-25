import React, {useState} from 'react';
import {Alert, Linking, Animated, PanResponder, Dimensions} from 'react-native';
import {getVersion} from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {useStores} from '@/hooks';
import {AppUpdate} from '@/constants';
import {
  useCreateAppUser,
  useLoginWithToken,
  useVerifySmsCode,
} from '@/hooks/Mutations';
import {User} from '@/types';

function useViewModel() {
  const {hud, user, token, alert} = useStores();
  const navigation = useNavigation();

  return {
  };
}

export default useViewModel;

// Expose other methods that will be used
