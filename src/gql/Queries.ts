import gql from 'graphql-tag';
import {EventDay} from '@/gql/Fragments';

// All search
export const search = gql`
  query search($keywords: String!, $userId: String) {
    search(keywords: $keywords, userId: $userId)
  }
`;

export const searchGooglePlaces = gql`
  query searchGooglePlaces($keyword: String!) {
    searchGooglePlaces(keyword: $keyword)
  }
`;

export const eventDays = gql`
  query eventDays(
    $where: EventDayWhereInput
    $orderBy: EventDayOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ){
    eventDays(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    )${EventDay} 
  }
`;

export const mediaCollections = gql`
    query mediaCollections($where: MediaCollectionWhereInput $orderBy: MediaCollectionOrderByInput 
    $skip: Int $after: String $before: String $first: Int $last: Int) {
      mediaCollections(where:$where orderBy:$orderBy skip:$skip after:$after before:$before first:$first last:$last) {
        id
        name
        type
        members {
          id
          sortOrder
          member {
            id
            name
            caption
            description
            source
            creators {
              id
              name
            }
          }
        }
      }
    }
`;