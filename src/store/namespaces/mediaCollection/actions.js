import { _ } from 'lodash';

export const getTotalMediaCollections = async ({ state, effects }) => {
  const { mediaCollections } = await effects.gql.queries.mediaCollections()

  state.mediaCollections.totalRecords = mediaCollections.length
}

export const getMediaCollections = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.mediaCollections.mediaCollectionPerPage,
      skip: (state.mediaCollections.activePage - 1) * state.mediaCollections.mediaCollectionPerPage
    }
  }
  //
  const { mediaCollections } = await effects.gql.queries.mediaCollections(options)

  state.mediaCollections.mediaCollections = _.keyBy(mediaCollections, 'id')
}

export const saveMediaCollection = async ({ effects }, data) => {
  return await effects.gql.mutations.saveMediaCollection(data)
}

export const onChangePage = async ({ state }, page) => {
  state.mediaCollections.activePage = page
}

export const onMediaCollectionAdded = ({ state }, data) => {
  state.mediaCollections.push(data)
}
