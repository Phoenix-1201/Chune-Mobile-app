import { EndPoint } from '@/Config';

export const onInitialize = async ({ actions, effects }) => {

  effects.gql.initialize({
    endpoint: EndPoint.apiUrl, // query and mutation options
    // This runs on every request
    // headers: () => ({
    //   authorization: `Bearer ${state.auth.token}`
    // }),
    // The options are the options passed to GRAPHQL-REQUEST
    // options: {
    //   credentials: 'include',
    //   mode: 'cors',
    // },
  }, {
    endpoint: EndPoint.wssUrl, // subscription options
    // This runs on every connect
    // params: () => ({
    //   token: state.auth.token
    // })
  });

  console.log('Overmind Initialization...');
  effects.init.initialize(actions); // init state
}