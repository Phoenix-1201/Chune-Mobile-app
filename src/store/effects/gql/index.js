import { graphql } from 'overmind-graphql';

import * as cartMutations from './cart/mutations'
import * as cartQueries from './cart/queries'

import * as cartItemMutations from './cartItem/mutations'
import * as cartItemQueries from './cartItem/queries'

import * as eventMutations from './event/mutations'
import * as eventQueries from './event/queries'

import * as eventDayMutations from './eventDay/mutations'
import * as eventDayQueries from './eventDay/queries'

import * as eventTypeMutations from './eventType/mutations'
import * as eventTypeQueries from './eventType/queries'

import * as mediaMutations from './media/mutations'
import * as mediaQueries from './media/queries'

import * as mediaTypeMutations from './mediaType/mutations'
import * as mediaTypeQueries from './mediaType/queries'

import * as mediaCollectionMutations from './mediaCollection/mutations'
import * as mediaCollectionQueries from './mediaCollection/queries'

import * as mediaCollectionMemberMutations from './mediaCollectionMember/mutations'
import * as mediaCollectionMemberQueries from './mediaCollectionMember/queries'

import * as mediaCollectionTypeMutations from './mediaCollectionType/mutations'
import * as mediaCollectionTypeQueries from './mediaCollectionType/queries'

import * as orderMutations from './order/mutations'
import * as orderQueries from './order/queries'

import * as transactionMutations from './transaction/mutations'
import * as transactionQueries from './transaction/queries'

import * as userMutations from './users/mutations';
import * as userQueries from './users/queries';
import * as userSubscriptions from './users/subscriptions';

export default graphql({
  queries: {
    ...cartQueries,
    ...cartItemQueries,
    ...eventDayQueries,
    ...eventQueries,
    ...eventTypeQueries,
    ...mediaQueries,
    ...mediaTypeQueries,
    ...mediaCollectionQueries,
    ...mediaCollectionMemberQueries,
    ...mediaCollectionTypeQueries,
    ...orderQueries,
    ...userQueries,
    ...transactionQueries,
  },
  mutations: {
    ...cartMutations,
    ...cartItemMutations,
    ...eventDayMutations,
    ...eventMutations,
    ...eventTypeMutations,
    ...mediaMutations,
    ...mediaTypeMutations,
    ...mediaCollectionMutations,
    ...mediaCollectionMemberMutations,
    ...mediaCollectionTypeMutations,
    ...orderMutations,
    ...userMutations,
    ...transactionMutations,
  },
  subscriptions: {
    // ...userSubscriptions
  }
});