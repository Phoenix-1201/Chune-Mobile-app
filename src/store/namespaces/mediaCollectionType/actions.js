import { _ } from 'lodash'

export const getTotalMediaCollectionTypes = async ({ state, effects }) => {
  const { mediaCollectionTypes } = await effects.gql.queries.mediaCollectionTypes()

  state.mediaCollectionTypes.totalRecords = mediaCollectionTypes.length
}

export const getMediaCollectionTypes = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.mediaCollectionTypes.mediaCollectionTypePerPage,
      skip: (state.mediaCollectionTypes.activePage - 1) * state.mediaCollectionTypes.mediaCollectionTypePerPage
    }
  }
  //
  const { mediaCollectionTypes } = await effects.gql.queries.mediaCollectionTypes(options)

  state.mediaCollectionTypes.mediaCollectionTypes = _.keyBy(mediaCollectionTypes, 'id')
}

export const saveMediaCollectionType = async ({ effects }, data) => {
  return await effects.gql.mutations.saveMediaCollectionType(data)
}

export const onChangePage = async ({ state }, page) => {
  state.mediaCollectionTypes.activePage = page
}

export const onMediaCollectionTypeAdded = ({ state }, data) => {
  state.mediaCollectionTypes.push(data)
}
