import gql from 'graphql-tag';
import { eventTypeFragment } from './fragments';

export const eventTypes = gql`
  query eventTypes($where: EventTypeWhereInput, $orderBy: EventTypeOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    eventTypes(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) ${eventTypeFragment}
  }
`;
