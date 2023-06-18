export const state = {
  mediaTypes: {},
  currentMediaTypeId: null,
  mediaTypePerPage: 10,
  totalRecords: 10,
  activePage: 1,
  mediaTypesList: state =>
    Object.values(state.mediaTypes)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.mediaTypePerPage)
}