import gql from 'graphql-tag';
import * as Fragments from './Fragments';

export const user = gql`
    subscription userSubscription($userId: String!){
        userSubscription(userId: $userId){
            node${Fragments.User}
        }
    }
`;
