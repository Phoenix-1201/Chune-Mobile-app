import gql from 'graphql-tag';
import { mediaCollectionTypeFragment } from './fragments';

export const mediaCollectionTypes = gql`
  query mediaCollectionTypes($where: MediaCollectionTypeWhereInput, $orderBy: MediaCollectionTypeOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    mediaCollectionTypes(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) ${mediaCollectionTypeFragment}
  }
`;
