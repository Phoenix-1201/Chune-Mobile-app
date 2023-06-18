export const state = {
  mediaCollectionTypes: {},
  currentMediaCollectionTypeId: null,
  mediaCollectionTypePerPage: 10,
  totalRecords: 10,
  activePage: 1,
  mediaCollectionTypesList: state =>
    Object.values(state.mediaCollectionTypes)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.mediaCollectionTypePerPage)
}