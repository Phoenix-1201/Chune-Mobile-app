import gql from 'graphql-tag';
import { notificationTypeFragment } from './fragments';

export const saveNotificationType = gql`
  mutation saveNotificationType($data: NotificationTypeUpdateInput!, $where: NotificationTypeWhereUniqueInput) {
    saveNotificationType(data: $data, where: $where) ${notificationTypeFragment}
  }
`;

export const deleteNotificationType = gql`
  mutation deleteNotificationType($where: NotificationTypeWhereUniqueInput) {
    deleteNotificationType(where: $where) ${notificationTypeFragment}
  }
`;
