export const state = {
  events: {},
  currentEventId: null,
  eventPerPage: 10,
  totalRecords: 10,
  activePage: 1,
  eventsList: state =>
    Object.values(state.events)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.eventPerPage)
}