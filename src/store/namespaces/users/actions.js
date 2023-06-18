// import { pipe, parallel } from 'overmind';
// import * as o from './operators';
// import { Action, AsyncAction } from 'app/overmind';
import { _ } from 'lodash';

// import { OPTIMISTIC_USER_ID } from './state';

/*
*
*/
export const getUsers = async ({ state, effects }) => { // pass actions also when activating the subscription
  const { users } = await effects.gql.queries.users()
// console.log(state, _, users)
  state.users.users = _.keyBy(users, 'id')
  // state.usersList

  // subscription example
  // effects.gql.subscriptions.onProductAdded(actions.onProductAdded)
}

/*
*
*/
export const saveUser = async ({ effects }, data) => {
  await effects.gql.mutations.saveUser({ data })
}

/*
*
*/
export const onUserAdded = ({ state }, user) => {
  state.users.push(user)
}

/*
*
*/
// export const showHomePage = o.setPage('People')

/*
*
*/
// export const showUsersPage = pipe(
//   o.setPage('People'),
//   o.closeUserModal(),
//   o.shouldLoadUsers(),
//   o.loadUsers()
// )

/*
*
*/
// export const showUserModal = pipe(
//   o.setPage('People'),
//   parallel(
//     pipe(
//       o.setCurrentUserModalTabIndex(),
//       o.shouldLoadUserWithDetails(),
//       o.loadUserWithDetails()
//     ),
//     pipe(
//       o.shouldLoadUsers(),
//       o.loadUsers()
//     )
//   )
// )