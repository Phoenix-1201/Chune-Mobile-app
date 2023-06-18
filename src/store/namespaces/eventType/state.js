export const state = {
  eventTypes: {},
  currentEventTypeId: null,
  eventTypePerPage: 10,
  totalRecords: 10,
  activePage: 1,
  eventTypesList: state =>
    Object.values(state.eventTypes)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.eventTypePerPage)
}