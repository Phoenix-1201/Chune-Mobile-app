import { _ } from 'lodash'

export const getTotalEventTypes = async ({ state, effects }) => {
  const { eventTypes } = await effects.gql.queries.eventTypes()

  state.eventTypes.totalRecords = eventTypes.length
}

export const getEventTypes = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.eventTypes.eventTypePerPage,
      skip: (state.eventTypes.activePage - 1) * state.eventTypes.eventTypePerPage
    }
  }
  //
  const { eventTypes } = await effects.gql.queries.eventTypes(options)

  state.eventTypes.eventTypes = _.keyBy(eventTypes, 'id')
}

export const saveEventType = async ({ effects }, data) => {
  return await effects.gql.mutations.saveEventType(data)
}

export const onChangePage = async ({ state }, page) => {
  state.eventTypes.activePage = page
}

export const onEventTypeAdded = ({ state }, data) => {
  state.eventTypes.push(data)
}
