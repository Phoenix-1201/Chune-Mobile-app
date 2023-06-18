export const state = {
  notificationTypes: {},
  currentNotificationTypeId: null,
  notificationTypePerPage: 10,
  totalRecords: 10,
  activePage: 1,
  notificationTypesList: state =>
    Object.values(state.notificationTypes)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.notificationTypePerPage)
}