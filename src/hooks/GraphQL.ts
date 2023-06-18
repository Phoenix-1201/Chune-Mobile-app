import React from 'react';
import {
  LazyQueryHookOptions,
  MutationHookOptions,
  QueryHookOptions,
  QueryLazyOptions,
  SubscriptionHookOptions,
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from '@apollo/react-hooks';
import {ApolloError, OperationVariables} from 'apollo-client';
import {defaultTo, get} from 'lodash';
import {DocumentNode} from 'graphql';
import {ExecutionResult, MutationFunctionOptions, MutationResult, QueryResult} from '@apollo/react-common';

/**
 * [getResultKeyName get result key in the mutation object.]
 * For the following graph QL, this function just returns string 'saveCart'
 * Some kind of hack.
 *  gql`mutation
        saveCart(
            $userId: String!
            $addItems: [CartItemInput!]
        ){
            saveCart(           // Just this value.
                userId: $userId
                addItems: $addItems
            ){
                id
            }
        }
 * @return {[type]} [description]
 */
export function getGQLResultKeyName(gql: DocumentNode): string {
  // This will change when apollo sdk changes
  return get(gql, 'definitions[0].selectionSet.selections[0].name.value');
}

/**
 * Below defines some useful GraphQL custom hooks, for the app purpose.
 * mutation & query & lazy queries result handling (using useResultEffect)
 * wraps out the response data to data
 * for example
 * for a getSites() query
 * result will look like this : { loading, data:{sites:[]} }
 * the key name `sites` in data object, is defined in GraphQL query and is different per mutations and queries,
 * and need to specify when data is arrived.
 * Just wanted to access directly, without knowing the `sites` key name, just hacked the Apollo library and grabbed the result key name.
 */

function _getDataWithResultKeyName<TData>(
  resultKeyName: string,
  promise: Promise<ExecutionResult<any>>
): Promise<TData> {
  return promise.then((result) => {
    const errors = result.errors;
    if (errors && errors.length) {
      throw new ApolloError({graphQLErrors: errors});
    }
    return get(result.data, resultKeyName) as TData;
  });
}

/**
 * [useMutationEx description]
 * @param  {[type]} mutation [description]
 * @param  {[type]} options  [description]
 * @return {[type]}          [description]
 */
export function useMutationEx<TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options?: MutationHookOptions<any, TVariables>
): [(opt?: MutationFunctionOptions<any, TVariables>) => Promise<TData>, MutationResult<TData>] {
  const [call, {data, ...others}] = useMutation(mutation, options);

  const resultKeyName = React.useMemo(() => {
    const ret = getGQLResultKeyName(mutation);
    console.log('useMutationEx(): Result Key Name for this mutation is : ', ret);
    return ret;
  }, [mutation]);

  return [
    (opt?: MutationFunctionOptions<any, TVariables>) => {
      return _getDataWithResultKeyName(resultKeyName, call(opt));
    },
    {
      data: get(data, resultKeyName) as TData,
      ...others,
    },
  ];
}

export interface QueryResultEx<TData, TVariables> extends QueryResult<TData, TVariables> {
  isRefetching: boolean;
}

/**
 * [useQueryEx description]
 * @param  {[type]} query     [description]
 * @param  {[type]} variables [description]
 * @param  {[type]} options   [description]
 * @return {[type]}           [description]
 */
export function useQueryEx<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  variables?: TVariables,
  options?: QueryHookOptions<TData, TVariables>
): QueryResultEx<TData, TVariables> {
  const _options = defaultTo(options, {});
  if (variables) {
    _options.variables = variables;
  }
  const {data, networkStatus, ...others} = useQuery<any, TVariables>(query, _options);
  const resultKeyName = React.useMemo(() => {
    const ret = getGQLResultKeyName(query);
    console.log('useQueryEx(): Result Key Name for this query is : ', ret);
    return ret;
  }, [query]);

  return {
    data: get(data, resultKeyName) as TData,
    isRefetching: networkStatus === 4,
    networkStatus,
    ...others,
  };
}

/**
 * [useLazyQueryEx description]
 * @param  {[type]} query     [description]
 * @param  {[type]} variables [description]
 * @param  {[type]} options   [description]
 * @return {[type]}           [description]
 */
export function useLazyQueryEx<TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  variables?: TVariables,
  options?: LazyQueryHookOptions<any, TVariables>
): [(options?: QueryLazyOptions<TVariables>) => void, QueryResultEx<TData, TVariables>] {
  const _options = defaultTo(options, {});
  if (variables) {
    _options.variables = variables;
  }
  const [call, {data, networkStatus, ...others}] = useLazyQuery(query, _options);

  const resultKeyName = React.useMemo(() => {
    const ret = getGQLResultKeyName(query);
    console.log('useLazyQueryEx(): Result Key Name for this lazy query  is : ', ret);
    return ret;
  }, [query]);

  return [
    call,
    {
      data: get(data, resultKeyName),
      isRefetching: networkStatus === 4,
      networkStatus,
      ...others,
    },
  ];
}

export interface SubscriptionResultEx<TData> {
  data?: TData | null | undefined;
}
/**
 * useSubscriptionEx
 * @param subscription
 * @param variables
 * @param options
 */
export function useSubscriptionEx<TData = any, TVariables = OperationVariables>(
  subscription: DocumentNode,
  variables?: TVariables,
  options?: SubscriptionHookOptions<any, TVariables>
): {
  variables: TVariables | undefined;
  loading: boolean;
  data?: TData | undefined;
  error?: ApolloError | undefined;
} {
  const _options = defaultTo(options, {});
  if (variables) {
    _options.variables = variables;
  }
  const {data, ...others} = useSubscription(subscription, {
    variables,
    ...options,
  });
  const resultKeyName = React.useMemo(() => {
    const ret = getGQLResultKeyName(subscription);
    console.log('useMutationEx(): Result Key Name for this mutation is : ', ret);
    return ret;
  }, [subscription]);

  return {
    data: get(data, resultKeyName),
    ...others,
  };
}

export default {
  getGQLResultKeyName,
  useMutationEx,
  useQueryEx,
  useLazyQueryEx,
  useSubscriptionEx,
};
