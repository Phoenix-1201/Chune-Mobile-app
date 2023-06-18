import React from 'react';
import * as Subscriptions from '@/gql/Subscriptions';
import {useSubscriptionEx} from './GraphQL';
import {useStores} from './';
import {get} from 'lodash';
import {UserSubscriptionPayload} from '@/types';

export function useUserSubscription() {
  // Use user store.
  const {user} = useStores();
  const variables = {userId: user.id};

  const {data} = useSubscriptionEx<UserSubscriptionPayload>(
    Subscriptions.user,
    variables,
  );

  React.useEffect(() => {
    const userData = get(data, 'node');
    if (userData) {
      // Update user with data.
      // Call user update action
      console.log('useUserSubscription(): User Arrived - ', userData);
      user.update(userData);
    }
    // user never changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
}
