import gql from 'graphql-tag';
import { eventTypeFragment } from './fragments';

export const saveEventType = gql`
  mutation saveEventType($data: EventTypeUpdateInput!, $where: EventTypeWhereUniqueInput) {
    saveEventType(data: $data, where: $where) ${eventTypeFragment}
  }
`;

export const deleteEventType = gql`
  mutation deleteEventType($where: EventTypeWhereUniqueInput) {
    deleteEventType(where: $where) ${eventTypeFragment}
  }
`;
