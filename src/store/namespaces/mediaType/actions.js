import { _ } from 'lodash'

export const getTotalMediaTypes = async ({ state, effects }) => {
  const { mediaTypes } = await effects.gql.queries.mediaTypes()

  state.mediaTypes.totalRecords = mediaTypes.length
}

export const getMediaTypes = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.mediaTypes.mediaTypePerPage,
      skip: (state.mediaTypes.activePage - 1) * state.mediaTypes.mediaTypePerPage
    }
  }
  //
  const { mediaTypes } = await effects.gql.queries.mediaTypes(options)

  state.mediaTypes.mediaTypes = _.keyBy(mediaTypes, 'id')
}

export const saveMediaType = async ({ effects }, data) => {
  return await effects.gql.mutations.saveMediaType(data)
}

export const onChangePage = async ({ state }, page) => {
  state.mediaTypes.activePage = page
}

export const onMediaTypeAdded = ({ state }, data) => {
  state.mediaTypes.push(data)
}
