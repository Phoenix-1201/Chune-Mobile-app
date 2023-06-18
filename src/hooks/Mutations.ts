import {useMutationEx} from './GraphQL';
import * as Mutations from '@/gql/Mutations';
import {MutationResult} from '@apollo/react-common';
import {AuthPayload} from '@/types';
import {Platform} from 'react-native';
import {useStores} from '.';
import {getVersion} from 'react-native-device-info';

export function useCreateAppUser(): [
  (mobileNumber: string, generateToken: boolean, disableSendingSmsCode: boolean) => Promise<AuthPayload>,
  MutationResult<AuthPayload>
] {
  const [call, result] = useMutationEx<AuthPayload>(Mutations.createAppUser);
  return [
    (mobileNumber: string, generateToken: boolean, disableSendingSmsCode: boolean) => {
      const variables = {mobileNumber, generateToken, disableSendingSmsCode};
      return call({variables});
    },
    result,
  ];
}

export function useVerifySmsCode(): [
  (userId: string, verifyCode: string, mobileNumber: string) => Promise<AuthPayload>,
  MutationResult<AuthPayload>
] {
  const [call, result] = useMutationEx<AuthPayload>(Mutations.verifySmsCode);

  return [
    (userId: string, verifyCode: string, mobileNumber: string) => {
      const variables = {
        userId,
        verifyCode,
        mobileNumber,
        device: {
          OS: Platform.OS,
          Version: Platform.Version,
        },
      };
      return call({variables});
    },
    result,
  ];
}

export function useLoginWithToken(): [
  (token: string, userId: string) => Promise<AuthPayload>,
  MutationResult<AuthPayload>
] {
  const stores = useStores();
  const [call, result] = useMutationEx<AuthPayload>(Mutations.loginWithToken);
  return [
    (token: string, userId: string) => {
      const variables = {token, userId, appVersion: getVersion()};
      return call({variables}).then((payload) => {
        if (payload && payload.user) {
          payload.token = token;  // Just put the token passed
          stores.logIn(payload);
        }
        return payload;
      });
    },
    result,
  ];
}

export function useUpdatePlayerId(): [(playerId: string) => Promise<undefined>, MutationResult] {
  const {user} = useStores();
  const [call, result] = useMutationEx(Mutations.updatePlayerId);
  return [
    (playerId: string) => {
      const variables = {userId: user.id, playerId};
      return call({variables}).then(() => undefined);
    },
    result,
  ];
}
