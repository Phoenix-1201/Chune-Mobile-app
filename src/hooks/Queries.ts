import { useLazyQueryEx, useQueryEx } from '@/hooks/GraphQL';
import * as Queries from '@/gql/Queries';
import { EventDay, MediaCollection } from '@/types';
import { useLazyQuery } from "@apollo/react-hooks";

export interface IPerformer {
  id: string;
  name: string;
  avatar: string;
  score: string;
}

export interface IPerformers {
  id: string;
  performer: IPerformer;
}

// export interface EventDay {
//   id: string;
//   name: string;
//   description?: string;
//   avatar?: string;
//   performers: Array<IPerformers>;
// }

export interface Event {
  id: string;
  days: Array<EventDay>
}

export interface Notification {
  id: string;
  type: "BASIC" | "REVIEW" | "MEAL_PLAN" | "NEW_EVENT" | "RIDDLE" | "POINT" | "INVITED_YOU";
  title: string;
  sentence: Array<{
    link?: {
      id: string;
      view: string;
      text: string;
    }
    text: string;
  }>
  contentUser: {
    id: string;
    avatar: string;
    username: string;
  }
  secondaryUser: {
    id: string;
    avatar: string;
    username: string;
  }
  event: {
    id: string;
    name: string;
    days: Array<{
      id: string;
      startDate: Date;
      endDate: Date;
      name: string;
    }>
  }
}

export function useQueryEventDays<TVariables>(variables?: TVariables) {
  return useQueryEx<Array<EventDay>, TVariables>(Queries.eventDays, variables);
}

export function useQueryMediaCollections<TVariables>(variables?: TVariables) {
  return useLazyQueryEx<Array<MediaCollection>, TVariables>(Queries.mediaCollections, variables);
}