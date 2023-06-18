import gql from 'graphql-tag';
import { mediaCollectionTypeFragment } from './fragments';

export const saveMediaCollectionType = gql`
  mutation saveMediaCollectionType($data: MediaCollectionTypeUpdateInput!, $where: MediaCollectionTypeWhereUniqueInput) {
    saveMediaCollectionType(data: $data, where: $where) ${mediaCollectionTypeFragment}
  }
`;

export const deleteMediaCollectionType = gql`
  mutation deleteMediaCollectionType($where: MediaCollectionTypeWhereUniqueInput) {
    deleteMediaCollectionType(where: $where) ${mediaCollectionTypeFragment}
  }
`;
