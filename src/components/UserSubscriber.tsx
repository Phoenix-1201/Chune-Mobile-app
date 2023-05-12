import React from 'react';
import {useStores} from '@/hooks';
import {useUserSubscription} from '@/hooks/Subscriptions';
import {isEmpty} from 'lodash';
import {observer} from 'mobx-react';

const SubscribeComponent: React.FC = () => {
  // This will do all the magic inside it.
  useUserSubscription();
  return null;
};

const WrapperComponent: React.FC = () => {
  const {user} = useStores();
  const userId = user.id;

  console.log('UserSubscriberComponent: UserId Changed to : ', userId);
  return isEmpty(userId) ? null : <SubscribeComponent />;
};

export default observer(WrapperComponent);
