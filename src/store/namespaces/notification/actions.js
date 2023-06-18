import { _ } from 'lodash'

export const getTotalNotifications = async ({ state, effects }) => {
  const { notifications } = await effects.gql.queries.notifications()

  state.notifications.totalRecords = notifications.length
}

export const getNotifications = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.notifications.notificationPerPage,
      skip: (state.notifications.activePage - 1) * state.notifications.notificationPerPage
    }
  }
  //
  const { notifications } = await effects.gql.queries.notifications(options)

  state.notifications.notifications = _.keyBy(notifications, 'id')
}

export const saveNotification = async ({ effects }, data) => {
  return await effects.gql.mutations.saveNotification(data)
}

export const onChangePage = async ({ state }, page) => {
  state.notifications.activePage = page
}

export const onNotificationAdded = ({ state }, data) => {
  state.notifications.push(data)
}
