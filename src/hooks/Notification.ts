import React from 'react';
import {toJS} from 'mobx';
import {useStores} from './';
import {useUpdatePlayerId} from '@/hooks/Mutations';

/**
 * Notification Subscribe
 */
// Make sure the component using this is wrapped inside observer of mobx
export default function useSetupNotification() {
  const {notification} = useStores();
  const [updatePlayerId] = useUpdatePlayerId();

  // Whenever player id is arrived
  React.useEffect(() => {
    if (notification.playerId) {
      // When valid playerId
      // Call api to update player id
      updatePlayerId(notification.playerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification.playerId]);

  // When ever new notification is arrived
  React.useEffect(() => {
    if (notification.notification) {
      // do some notification stuff.
    }
  }, [notification.notification]);

  // Whenever new open result is arrived
  // When ever new notification is arrived
  React.useEffect(() => {
    if (notification.openResult) {
      // do some notification stuff.
      const openResult = notification.openResult;

      console.log('useSetupNotification(): OpenResult', toJS(openResult));

      const payload = openResult.notification.payload;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const additionalData = payload.additionalData;
      // Do something with additional Data
    }
  }, [notification.openResult]);
}
