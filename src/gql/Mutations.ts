/* eslint-disable prettier/prettier */
import gql from 'graphql-tag';
import * as Fragments from './Fragments';

export const createAppUser = gql`
  mutation createAppUser(
      $mobileNumber: String!
      $generateToken: Boolean
      $disableSendingSmsCode: Boolean
      
  ) {
      createAppUser(
          generateToken: $generateToken
          mobileNumber: $mobileNumber
          disableSendingSmsCode: $disableSendingSmsCode
      )${Fragments.AuthPayLoad}
  }
`;

export const verifySmsCode = gql`
  mutation verifySmsCode(
      $userId: String!
      $verifyCode: String!
      $mobileNumber: String!
      $device: Json
  ) {
    verifySmsCode(
        userId: $userId
        verifyCode: $verifyCode
        mobileNumber: $mobileNumber
        device: $device
    ) {
      user {
        id
      }
      token
    }
  }
`;

export const loginWithToken = gql`
    mutation loginWithToken(
        $token: String!
        $userId: String!
        $appVersion: String
    ){
        loginWithToken(
            token: $token
            userId: $userId
            appVersion: $appVersion
        )${Fragments.AuthPayLoad}
    }
`;

export const updateUser = gql`
  mutation updateUser(
    $userId: String!
    $email: String
    $site: SiteWhereUniqueInput
    $title: String
    $avatar: String
    $avatarType: String
    $fullName: String
    $firstName: String
    $lastName: String
    $paymentMethod: PaymentMethodCreateInput
    $removePaymentMethods: [String]
    $removeEmails: [String]
    $removePhones: [String]
    $lunchtime: DateTime
    $googlePlacesId: String
    $gps: GeoLocCreateInput
    $timezoneOffset: Int
    $timezone: String
  ) {
    updateUser(
      userId: $userId
      email: $email
      site: $site
      title: $title
      avatar: $avatar
      avatarType: $avatarType
      fullName: $fullName
      firstName: $firstName
      lastName: $lastName
      paymentMethod: $paymentMethod
      removePaymentMethods: $removePaymentMethods
      removeEmails: $removeEmails
      removePhones: $removePhones
      lunchtime: $lunchtime
      googlePlacesId: $googlePlacesId
      gps: $gps
      timezoneOffset: $timezoneOffset
      timezone: $timezone
    )${Fragments.AuthPayLoad}
  }
`;

export const generateBraintreeClientToken = gql`
  mutation generateBraintreeClientToken($customerId: String!) {
    generateBraintreeClientToken(customerId: $customerId)
  }
`;

export const updatePlayerId = gql`
  mutation updatePlayerId($userId: String!, $playerId: String!) {
    updatePlayerId(userId: $userId, playerId: $playerId) {
      token
      user {
        id
      }
      verificationCode
    }
  }
`;
