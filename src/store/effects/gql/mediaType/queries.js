import gql from 'graphql-tag';
import { mediaTypeFragment } from './fragments';

export const mediaTypes = gql`
  query mediaTypes($where: MediaTypeWhereInput, $orderBy: MediaTypeOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    mediaTypes(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) ${mediaTypeFragment}
  }
`;
