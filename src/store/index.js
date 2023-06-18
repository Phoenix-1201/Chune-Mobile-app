import { merge, namespaced } from 'overmind/config';
import { createHook } from 'overmind-react';

import { onInitialize } from '@/store/onInitialize';
import { state } from '@/store/state';
import * as effects from '@/store/effects';
import * as actions from '@/store/actions';

import * as users from '@/store/namespaces/users';

import * as mediaCollections from './namespaces/mediaCollection'

export const config = merge(
  {
    onInitialize,
    state,
    effects,
    actions
  },
  namespaced({
    mediaCollections,
    users,
    // modals: createModals(modals),
  })
)

export const useOvermind = createHook();