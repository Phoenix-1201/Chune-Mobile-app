import { _ } from 'lodash'

export const getTotalNotificationTypes = async ({ state, effects }) => {
  const { notificationTypes } = await effects.gql.queries.notificationTypes()

  state.notificationTypes.totalRecords = notificationTypes.length
}

export const getNotificationTypes = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.notificationTypes.notificationTypePerPage,
      skip: (state.notificationTypes.activePage - 1) * state.notificationTypes.notificationTypePerPage
    }
  }
  //
  const { notificationTypes } = await effects.gql.queries.notificationTypes(options)

  state.notificationTypes.notificationTypes = _.keyBy(notificationTypes, 'id')
}

export const saveNotificationType = async ({ effects }, data) => {
  return await effects.gql.mutations.saveNotificationType(data)
}

export const onChangePage = async ({ state }, page) => {
  state.notificationTypes.activePage = page
}

export const onNotificationTypeAdded = ({ state }, data) => {
  state.notificationTypes.push(data)
}
