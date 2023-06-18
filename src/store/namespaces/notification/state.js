export const state = {
  notifications: {},
  currentNotificationId: null,
  notificationPerPage: 10,
  totalRecords: 10,
  activePage: 1,
  notificationsList: state =>
    Object.values(state.notifications)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.notificationPerPage)
}