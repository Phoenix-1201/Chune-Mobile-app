import gql from 'graphql-tag';
import { mediaTypeFragment } from './fragments';

export const saveMediaType = gql`
  mutation saveMediaType($data: MediaTypeUpdateInput!, $where: MediaTypeWhereUniqueInput) {
    saveMediaType(data: $data, where: $where) ${mediaTypeFragment}
  }
`;

export const deleteMediaType = gql`
  mutation deleteMediaType($where: MediaTypeWhereUniqueInput) {
    deleteMediaType(where: $where) ${mediaTypeFragment}
  }
`;
