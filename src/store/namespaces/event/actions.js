import { _ } from 'lodash'

export const getTotalEvents = async ({ state, effects }) => {
  const { events } = await effects.gql.queries.events()

  state.events.totalRecords = events.length
}

export const getEvents = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.events.eventPerPage,
      skip: (state.events.activePage - 1) * state.events.eventPerPage
    }
  }
  //
  const { events } = await effects.gql.queries.events(options)

  state.events.events = _.keyBy(events, 'id')
}

export const saveEvent = async ({ effects }, data) => {
  return await effects.gql.mutations.saveEvent(data)
}

export const onChangePage = async ({ state }, page) => {
  state.events.activePage = page
}

export const onEventAdded = ({ state }, data) => {
  state.events.push(data)
}
