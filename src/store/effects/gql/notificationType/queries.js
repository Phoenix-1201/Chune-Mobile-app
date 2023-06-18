import gql from 'graphql-tag';
import { notificationTypeFragment } from './fragments';

export const notificationTypes = gql`
  query notificationTypes($where: NotificationTypeWhereInput, $orderBy: NotificationTypeOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    notificationTypes(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) ${notificationTypeFragment}
  }
`;
